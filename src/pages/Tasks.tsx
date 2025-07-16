import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Menu, Gift, Video } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useState } from 'react';

const Tasks = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-dark px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="sm" className="border-purple-500/20 hover:bg-purple-500/10">
                  <Menu className="h-4 w-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-card/90 backdrop-blur-sm border-purple-500/20">
                <div className="p-6 space-y-4">
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
                      className="w-full justify-start"
                      onClick={() => {
                        navigate('/dashboard');
                        setDrawerOpen(false);
                      }}
                    >
                      Dashboard
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => {
                        navigate('/tasks');
                        setDrawerOpen(false);
                      }}
                    >
                      Tasks
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => {
                        navigate('/redeem-code-detector');
                        setDrawerOpen(false);
                      }}
                    >
                      Redeem Code Detector
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
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
              className="h-8 w-8 animate-float"
            />
            <h1 className="text-2xl font-bold cyber-text neon-glow">Tasks</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20 hover:bg-card/90 transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-cyber-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="cyber-text text-xl">Earn Akira via Offerwalls</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Complete surveys, download apps, and participate in various offers to earn Akira Shards.
              </p>
              <Button 
                className="bg-cyber-gradient hover:opacity-90 text-white font-semibold w-full"
                disabled
              >
                Coming Soon - SDK Integration
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20 hover:bg-card/90 transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-cyber-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Video className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="cyber-text text-xl">Earn Akira by Watching Ads</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Watch rewarded video advertisements to earn Akira Shards quickly and easily.
              </p>
              <Button 
                className="bg-cyber-gradient hover:opacity-90 text-white font-semibold w-full"
                disabled
              >
                Coming Soon - SDK Integration
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="cyber-text">Task Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>• Complete tasks daily to maximize your Akira Shards earnings</p>
                <p>• Higher value tasks may require more time but offer better rewards</p>
                <p>• Check back regularly for new opportunities and special offers</p>
                <p>• Ensure stable internet connection when completing tasks</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tasks;