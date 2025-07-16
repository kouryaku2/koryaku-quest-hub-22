import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Menu, Search } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useState } from 'react';

const RedeemCodeDetector = () => {
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
            <h1 className="text-2xl font-bold cyber-text neon-glow">Redeem Code Detector</h1>
          </div>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-cyber-gradient rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="cyber-text text-2xl">Code Detection System</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-8 text-lg">
              Advanced AI-powered system to detect and validate redeem codes across multiple gaming platforms.
            </p>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/10">
                  <h3 className="font-semibold mb-2 cyber-text">Supported Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Multi-platform code detection</li>
                    <li>• Real-time validation</li>
                    <li>• Automatic expiry checking</li>
                    <li>• Batch code processing</li>
                  </ul>
                </div>
                <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/10">
                  <h3 className="font-semibold mb-2 cyber-text">Supported Games</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Genshin Impact</li>
                    <li>• Honkai: Star Rail</li>
                    <li>• PUBG Mobile</li>
                    <li>• Free Fire & More</li>
                  </ul>
                </div>
              </div>
              <Button 
                className="bg-cyber-gradient hover:opacity-90 text-white font-semibold px-8 py-3 text-lg"
                disabled
              >
                Coming Soon - AI Integration
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8">
          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="cyber-text">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyber-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <p>Upload or paste redeem codes from various sources</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyber-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <p>AI analyzes and identifies the game platform and code format</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyber-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <p>System validates codes and checks expiry status</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyber-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                  <p>Receive organized results with redemption instructions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RedeemCodeDetector;