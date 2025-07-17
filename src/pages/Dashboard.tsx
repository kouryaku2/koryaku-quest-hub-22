import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { LogOut, Shield, Clock, Menu } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

const Dashboard = () => {
  const [userRecord, setUserRecord] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lastActivity, setLastActivity] = useState<Date>(new Date());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, session, signOut, isAuthenticated, isInitialized } = useSecureAuth();

  // Session timeout handling (30 minutes of inactivity)
  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

  useEffect(() => {
    // Redirect if not authenticated
    if (isInitialized && !isAuthenticated) {
      navigate('/auth');
      return;
    }

    if (!user) return;

    // Fetch user record securely
    const fetchUserData = async () => {
      try {
        const { data: userData, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .maybeSingle(); // Use maybeSingle to avoid errors if no data

        if (error) {
          console.warn('Error fetching user data:', error.message);
          toast({
            variant: "destructive",
            title: "Data access error",
            description: "Unable to load your profile data. Please try refreshing.",
          });
        } else {
          setUserRecord(userData);
        }
      } catch (error) {
        console.warn('Network error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, isAuthenticated, isInitialized, navigate, toast]);

  // Activity tracking for session timeout
  useEffect(() => {
    const updateActivity = () => setLastActivity(new Date());
    
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, updateActivity, true);
    });

    const checkSessionTimeout = setInterval(() => {
      const now = new Date();
      const timeSinceActivity = now.getTime() - lastActivity.getTime();
      
      if (timeSinceActivity > SESSION_TIMEOUT && session) {
        toast({
          title: "Session expired",
          description: "You've been signed out due to inactivity.",
        });
        signOut();
      }
    }, 60000); // Check every minute

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, updateActivity, true);
      });
      clearInterval(checkSessionTimeout);
    };
  }, [lastActivity, session, signOut, toast]);

  const handleSecureSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Sign out error",
        description: "Please try again or clear your browser cache.",
      });
    }
  };

  // Show loading state
  if (!isInitialized || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-dark">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Redirect to auth if not authenticated
  if (!isAuthenticated) {
    return null; // Component will unmount as useEffect navigates
  }

  return (
    <div className="min-h-screen bg-cyber-dark px-2 sm:px-4 py-4 sm:py-8">
      <div className="container mx-auto max-w-4xl">
        {/* Mobile-first header */}
        <div className="flex items-center justify-between mb-4 sm:mb-8">
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="sm" className="border-purple-500/20 hover:bg-purple-500/10 flex-shrink-0">
                  <Menu className="h-4 w-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-card/90 backdrop-blur-sm border-purple-500/20">
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <img 
                      src="/lovable-uploads/b0e4990b-327d-4606-8033-146175a890a0.png" 
                      alt="Kōryaku Logo" 
                      className="h-6 w-6"
                    />
                    <h2 className="text-lg font-bold cyber-text">Menu</h2>
                  </div>
                  <nav className="space-y-2">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-left"
                      onClick={() => {
                        navigate('/dashboard');
                        setDrawerOpen(false);
                      }}
                    >
                      Dashboard
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-left"
                      onClick={() => {
                        navigate('/tasks');
                        setDrawerOpen(false);
                      }}
                    >
                      Tasks
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-left"
                      onClick={() => {
                        navigate('/redeem-code-detector');
                        setDrawerOpen(false);
                      }}
                    >
                      Redeem Code Detector
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-left"
                      onClick={() => {
                        navigate('/redeem');
                        setDrawerOpen(false);
                      }}
                    >
                      Redeem
                    </Button>
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
            <img 
              src="/lovable-uploads/b0e4990b-327d-4606-8033-146175a890a0.png" 
              alt="Kōryaku Logo" 
              className="h-6 w-6 sm:h-8 sm:w-8 animate-float flex-shrink-0"
            />
            <h1 className="text-lg sm:text-2xl font-bold cyber-text neon-glow truncate">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <div className="hidden sm:flex items-center space-x-1 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              <span>Secure Session</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSecureSignOut}
              className="border-purple-500/20 hover:bg-purple-500/10"
            >
              <LogOut className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="cyber-text text-base sm:text-lg">Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-xs sm:text-sm text-muted-foreground">Email</label>
                <p className="font-medium text-sm sm:text-base break-words">{user?.email}</p>
              </div>
              <div>
                <label className="text-xs sm:text-sm text-muted-foreground">User ID</label>
                <p className="font-mono text-xs break-all">{user?.id}</p>
              </div>
              <div>
                <label className="text-xs sm:text-sm text-muted-foreground">Member Since</label>
                <p className="font-medium text-sm sm:text-base">
                  {userRecord?.created_at ? new Date(userRecord.created_at).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              <div className="flex items-center space-x-1 text-xs text-green-600">
                <Clock className="h-3 w-3" />
                <span>Session active</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="cyber-text flex items-center space-x-2 text-base sm:text-lg">
                <img 
                  src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
                  alt="Akira Shards" 
                  className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                />
                <span>Akira Shards</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl sm:text-3xl font-bold cyber-text mb-2">
                {userRecord?.akira_shards || 0}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Complete tasks to earn more shards!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 sm:mt-8">
          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="cyber-text text-base sm:text-lg">Welcome to Kōryaku!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                Your account has been successfully created and secured. Start completing tasks to earn Akira Shards and unlock amazing rewards!
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <Button 
                  onClick={() => navigate('/tasks')}
                  className="bg-cyber-gradient hover:opacity-90 text-white font-semibold w-full sm:w-auto"
                >
                  Explore Tasks
                </Button>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Protected by RLS policies</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;