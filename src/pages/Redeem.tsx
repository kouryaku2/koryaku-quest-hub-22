import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Menu } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useState } from 'react';

const Redeem = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const games = [
    {
      name: 'Genshin Impact',
      logo: '/lovable-uploads/c3b0ac1c-f8f9-4754-8ecf-d5da09513366.png',
      packages: [
        { name: 'Welkin Moon', cost: 648 },
        { name: 'Battle Pass', cost: 1298 },
        { name: '6480 Genesis Crystals', cost: 12998 }
      ]
    },
    {
      name: 'Honkai: Star Rail',
      logo: '/lovable-uploads/ec93d3be-125a-4fce-8ccf-b68a7629ae6f.png',
      packages: [
        { name: 'Express Supply Pass', cost: 648 },
        { name: 'Nameless Glory', cost: 1298 }
      ]
    },
    {
      name: 'PUBG Mobile',
      logo: '/lovable-uploads/c32a5ab6-d548-4905-bde6-2cc73909cb30.png',
      packages: [
        { name: '60 UC', cost: 129 },
        { name: '325 UC', cost: 648 },
        { name: '1800+ UC', cost: 3248 }
      ]
    },
    {
      name: 'Free Fire',
      logo: '/lovable-uploads/2a6696cc-3318-435c-a226-1c1be8e9f5f6.png',
      packages: [
        { name: 'Weekly Membership', cost: 324 },
        { name: 'Monthly Membership', cost: 1298 },
        { name: '310 Diamonds', cost: 648 }
      ]
    },
    {
      name: 'Wuthering Waves',
      logo: '/lovable-uploads/eb64eea7-7749-46a1-98d4-e4f46daf2f3f.png',
      packages: [
        { name: 'Monthly Pass', cost: 648 },
        { name: 'Basic Supply Pack', cost: 1948 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark px-2 sm:px-4 py-4 sm:py-8">
      <div className="container mx-auto max-w-6xl">
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
            <h1 className="text-lg sm:text-2xl font-bold cyber-text neon-glow truncate">Redeem</h1>
          </div>
        </div>

        {/* Responsive game grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {games.map((game, index) => (
            <Dialog key={game.name}>
              <DialogTrigger asChild>
                <Card className="relative overflow-hidden border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer group h-64 sm:h-80">
                  {/* Blurred background image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center scale-110 blur-sm opacity-60"
                    style={{
                      backgroundImage: `url(${game.logo})`,
                      filter: 'blur(8px) brightness(0.3)'
                    }}
                  />
                  
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                    {/* Game icon - responsive sizing */}
                    <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <img 
                        src={game.logo} 
                        alt={`${game.name} Logo`}
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                      />
                    </div>
                    
                    {/* Game name */}
                    <h3 className="cyber-text text-lg sm:text-xl font-bold text-white mb-2 drop-shadow-lg">
                      {game.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-200 text-xs sm:text-sm drop-shadow-md">
                      View available top-up packages
                    </p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-card/95 backdrop-blur-md border-purple-500/20 max-w-sm sm:max-w-md mx-2 sm:mx-auto">
                <DialogHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src={game.logo} 
                      alt={`${game.name} Logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <DialogTitle className="cyber-text text-sm sm:text-base">{game.name} Packages</DialogTitle>
                  </div>
                </DialogHeader>
                <div className="space-y-3 sm:space-y-4">
                  {game.packages.map((pkg, pkgIndex) => (
                    <div 
                      key={pkgIndex}
                      className="bg-background/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-500/10"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base">{pkg.name}</h3>
                        <div className="flex items-center space-x-1">
                          <img 
                            src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
                            alt="Akira Shards" 
                            className="h-3 w-3 sm:h-4 sm:w-4"
                          />
                          <span className="font-bold text-primary text-sm sm:text-base">{pkg.cost}</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-cyber-gradient hover:opacity-90 text-white font-semibold text-sm sm:text-base"
                        disabled
                      >
                        Redeem
                      </Button>
                    </div>
                  ))}
                  <div className="text-center pt-3 sm:pt-4 border-t border-purple-500/10">
                    <p className="text-xs text-muted-foreground">
                      Redeem functionality coming soon
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-6 sm:mt-8">
          <Card className="bg-card/80 backdrop-blur-sm border-purple-500/20">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="cyber-text text-base sm:text-lg">Redeem Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                <p>• All prices include a 30% service fee</p>
                <p>• Redemptions are processed within 24-48 hours</p>
                <p>• Ensure you have sufficient Akira Shards before redeeming</p>
                <p>• Contact support if you encounter any issues with your redemption</p>
                <p>• Game accounts must be verified before processing top-ups</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Redeem;