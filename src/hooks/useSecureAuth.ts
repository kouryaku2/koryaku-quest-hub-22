import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  signUpSchema, 
  signInSchema, 
  GENERIC_ERROR_MESSAGES, 
  RateLimiter,
  type SignUpFormData,
  type SignInFormData 
} from '@/lib/auth-utils';
import type { User, Session } from '@supabase/supabase-js';

const rateLimiter = new RateLimiter();

export const useSecureAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Handle successful authentication
        if (event === 'SIGNED_IN' && session?.user) {
          // Defer user creation to avoid potential RLS issues
          setTimeout(() => {
            handleSecureUserCreation(session);
          }, 0);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsInitialized(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Secure user creation with proper conflict handling
  const handleSecureUserCreation = async (session: Session) => {
    try {
      // Use upsert with proper ON CONFLICT handling
      const { error } = await supabase
        .from('users')
        .upsert({
          id: session.user.id,
          email: session.user.email,
        }, {
          onConflict: 'id',
          ignoreDuplicates: true
        });

      if (error) {
        // Only log non-conflict errors
        if (!error.message.includes('duplicate') && !error.message.includes('conflict')) {
          console.warn('User creation warning:', error.message);
        }
      }
    } catch (error) {
      // Silent handling - user creation issues shouldn't block authentication
      console.warn('User creation failed silently:', error);
    }
  };

  const signUp = async (formData: SignUpFormData) => {
    const identifier = formData.email;
    
    // Client-side rate limiting
    if (rateLimiter.isRateLimited(identifier)) {
      toast({
        variant: "destructive",
        title: "Too many attempts",
        description: GENERIC_ERROR_MESSAGES.RATE_LIMITED,
      });
      return { error: new Error(GENERIC_ERROR_MESSAGES.RATE_LIMITED) };
    }

    // Validate form data
    const validation = signUpSchema.safeParse(formData);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        variant: "destructive",
        title: "Validation error",
        description: firstError.message,
      });
      return { error: new Error(firstError.message) };
    }

    setLoading(true);
    rateLimiter.recordAttempt(identifier);

    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: redirectUrl
        }
      });

      if (error) {
        // Use generic error messages to prevent user enumeration
        const message = error.message.toLowerCase().includes('rate limit') 
          ? GENERIC_ERROR_MESSAGES.RATE_LIMITED
          : GENERIC_ERROR_MESSAGES.SIGNUP_FAILED;
          
        toast({
          variant: "destructive",
          title: "Sign up failed",
          description: message,
        });
        return { error };
      }

      toast({
        title: "Check your email",
        description: "We sent you a confirmation link.",
      });
      return { error: null };
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Network error",
        description: GENERIC_ERROR_MESSAGES.NETWORK_ERROR,
      });
      return { error: error as Error };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (formData: SignInFormData) => {
    const identifier = formData.email;
    
    // Client-side rate limiting
    if (rateLimiter.isRateLimited(identifier)) {
      toast({
        variant: "destructive",
        title: "Too many attempts",
        description: GENERIC_ERROR_MESSAGES.RATE_LIMITED,
      });
      return { error: new Error(GENERIC_ERROR_MESSAGES.RATE_LIMITED) };
    }

    // Validate form data
    const validation = signInSchema.safeParse(formData);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        variant: "destructive",
        title: "Validation error",
        description: firstError.message,
      });
      return { error: new Error(firstError.message) };
    }

    setLoading(true);
    rateLimiter.recordAttempt(identifier);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        // Use generic error messages to prevent user enumeration
        toast({
          variant: "destructive",
          title: "Sign in failed",
          description: GENERIC_ERROR_MESSAGES.AUTH_FAILED,
        });
        return { error };
      }

      return { error: null };
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Network error",
        description: GENERIC_ERROR_MESSAGES.NETWORK_ERROR,
      });
      return { error: error as Error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      // Clear local state
      setUser(null);
      setSession(null);
      navigate('/auth');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Sign out failed",
        description: "Please try again.",
      });
    }
  };

  return {
    user,
    session,
    loading,
    isInitialized,
    signUp,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };
};