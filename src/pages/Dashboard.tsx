import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [userRecord, setUserRecord] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }

      setUser(session.user);

      // Fetch user record from users table
      const { data: userData, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (error) {
        console.error('Error fetching user data:', error);
      } else {
        setUserRecord(userData);
      }

      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          navigate('/auth');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error.message,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-dark">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b0e4990b-327d-4606-8033-146175a890a0.png" 
              alt="Kōryaku Logo" 
              className="h-8 w-8 animate-float"
            />
            <h1 className="text-2xl font-bold cyber-text neon-glow">Dashboard</h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleSignOut}
            className="border-purple-500/20 hover:bg-purple-500/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="cyber-text">Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Email</label>
                <p className="font-medium">{user?.email}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">User ID</label>
                <p className="font-mono text-xs break-all">{user?.id}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Member Since</label>
                <p className="font-medium">
                  {userRecord?.created_at ? new Date(userRecord.created_at).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="cyber-text flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
                  alt="Akira Shards" 
                  className="h-5 w-5"
                />
                <span>Akira Shards</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold cyber-text mb-2">
                {userRecord?.akira_shards || 0}
              </div>
              <p className="text-sm text-muted-foreground">
                Complete tasks to earn more shards!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="cyber-text">Welcome to Kōryaku!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Your account has been successfully created. Start completing tasks to earn Akira Shards and unlock amazing rewards!
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-cyber-gradient hover:opacity-90 text-white font-semibold"
              >
                Explore Tasks
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;