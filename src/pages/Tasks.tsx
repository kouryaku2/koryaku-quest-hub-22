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
            <h1 className="text-lg sm:text-2xl font-bold cyber-text neon-glow truncate">Tasks</h1>
          </div>
        </div>

        {/* Responsive task cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20 hover:bg-card/90 transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-3 sm:pb-6">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-cyber-gradient rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <CardTitle className="cyber-text text-base sm:text-xl">Earn Akira via Offerwalls</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Complete surveys, download apps, and participate in various offers to earn Akira Shards.
              </p>
              <Button 
                className="bg-cyber-gradient hover:opacity-90 text-white font-semibold w-full text-sm sm:text-base"
                disabled
              >
                Coming Soon - SDK Integration
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20 hover:bg-card/90 transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-3 sm:pb-6">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-cyber-gradient rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Video className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <CardTitle className="cyber-text text-base sm:text-xl">Earn Akira by Watching Ads</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Watch rewarded video advertisements to earn Akira Shards quickly and easily.
              </p>
              <Button 
                className="bg-cyber-gradient hover:opacity-90 text-white font-semibold w-full text-sm sm:text-base"
                disabled
              >
                Coming Soon - SDK Integration
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 sm:mt-8">
          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="cyber-text text-base sm:text-lg">Task Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
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