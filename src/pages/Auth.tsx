import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PasswordInput } from '@/components/ui/password-input';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { emailSchema } from '@/lib/auth-utils';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const { user, loading, signUp, signIn, isInitialized } = useSecureAuth();

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (isInitialized && user) {
      navigate('/dashboard');
    }
  }, [user, isInitialized, navigate]);

  // Clear email error when email changes
  useEffect(() => {
    if (emailError) {
      const validation = emailSchema.safeParse(email);
      if (validation.success) {
        setEmailError('');
      }
    }
  }, [email, emailError]);

  const validateEmail = () => {
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      setEmailError(validation.error.errors[0].message);
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail()) return;
    
    await signUp({ email, password });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail()) return;
    
    const result = await signIn({ email, password });
    if (!result.error) {
      navigate('/dashboard');
    }
  };

  // Show loading state while initializing
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-dark px-4">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark px-4">
      <div className="absolute inset-0 bg-cyber-dark opacity-30"></div>
      <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      
      <Card className="w-full max-w-md relative z-10 bg-card/80 backdrop-blur-sm border-purple-500/20">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/lovable-uploads/b0e4990b-327d-4606-8033-146175a890a0.png" 
              alt="Kōryaku Logo" 
              className="h-8 w-8 animate-float"
            />
            <CardTitle className="text-xl font-bold cyber-text neon-glow">Kōryaku</CardTitle>
          </div>
          <CardDescription>
            Join the Akira Shards ecosystem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                    className={emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                    required
                  />
                  {emailError && (
                    <p className="text-sm text-red-500">{emailError}</p>
                  )}
                </div>
                <PasswordInput
                  id="signin-password"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={setPassword}
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-cyber-gradient hover:opacity-90 text-white font-semibold"
                  disabled={loading || !!emailError}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                    className={emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                    required
                  />
                  {emailError && (
                    <p className="text-sm text-red-500">{emailError}</p>
                  )}
                </div>
                <PasswordInput
                  id="signup-password"
                  label="Password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={setPassword}
                  showStrength={true}
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-cyber-gradient hover:opacity-90 text-white font-semibold"
                  disabled={loading || !!emailError}
                >
                  {loading ? 'Creating account...' : 'Sign Up'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;