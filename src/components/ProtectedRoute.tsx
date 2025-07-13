import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSecureAuth } from '@/hooks/useSecureAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute = ({ children, redirectTo = '/auth' }: ProtectedRouteProps) => {
  const { isAuthenticated, isInitialized } = useSecureAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      navigate(redirectTo);
    }
  }, [isAuthenticated, isInitialized, navigate, redirectTo]);

  // Show loading while initializing
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-dark">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // Don't render children if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};