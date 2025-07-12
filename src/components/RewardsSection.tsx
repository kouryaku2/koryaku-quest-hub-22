
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Zap } from 'lucide-react';

const RewardsSection = () => {
  const topUpRewards = [
    {
      id: 1,
      game: 'PUBG Mobile',
      item: '600 UC',
      price: 1000,
      image: '🎮',
      popular: true,
      discount: '15%'
    },
    {
      id: 2,
      game: 'Free Fire',
      item: '500 Diamonds',
      price: 1000,
      image: '💎',
      popular: true,
      discount: '12%'
    },
    {
      id: 3,
      game: 'Mobile Legends',
      item: '400 Diamonds',
      price: 1000,
      image: '⚡',
      popular: false,
      discount: '10%'
    },
    {
      id: 4,
      game: 'Genshin Impact',
      item: '300 Crystals',
      price: 1000,
      image: '✨',
      popular: false,
      discount: '8%'
    }
  ];

  return (
    <section id="rewards" className="py-16 px-4 bg-gradient-to-b from-transparent to-purple-500/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="cyber-text neon-glow">Akira Rewards</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-6">
            Redeem 1000 Akira Shards for instant game top-ups.
          </p>
          
          {/* Large Akira Shards Display */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img 
              src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
              alt="Akira Shards" 
              className="h-12 w-12 md:h-16 md:w-16 akira-coin animate-pulse"
            />
            <div className="text-left">
              <div className="text-lg md:text-xl font-bold cyber-text">1,000 $AKIRA</div>
              <div className="text-sm text-muted-foreground">= Any Game Top-Up</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {topUpRewards.map((reward, index) => (
            <Card 
              key={reward.id} 
              className="bg-card/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 cyber-glow animate-slide-up group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {reward.popular && (
                <div className="absolute top-0 right-0 bg-cyber-gradient text-white px-2 py-1 rounded-bl-lg text-xs font-medium flex items-center">
                  <Star className="h-3 w-3 mr-1" />
                  Hot
                </div>
              )}
              
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="text-2xl">{reward.image}</div>
                  <div className="flex-1">
                    <CardTitle className="text-sm group-hover:text-purple-400 transition-colors leading-tight">
                      {reward.game}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">{reward.item}</p>
                  </div>
                </div>
                
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30 text-xs w-fit">
                  -{reward.discount} OFF
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center justify-center p-2 bg-secondary/30 rounded-lg">
                  <img 
                    src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
                    alt="Akira Shards" 
                    className="h-8 w-8 akira-coin-sm animate-pulse mr-2"
                  />
                  <div className="text-center">
                    <div className="font-bold text-lg cyber-text">1,000</div>
                    <div className="text-xs text-cyan-400">$AKIRA</div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-cyber-gradient hover:opacity-90 text-white font-medium text-xs h-8 group-hover:animate-glow-pulse"
                >
                  <Zap className="h-3 w-3 mr-1" />
                  Redeem
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 space-y-4">
          <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 max-w-lg mx-auto">
            <h3 className="text-sm font-bold mb-2 cyber-text">Instant Delivery</h3>
            <p className="text-xs text-muted-foreground">
              All top-ups delivered within 5 minutes. 24/7 support.
            </p>
          </div>
          
          <Button 
            variant="outline" 
            className="border-purple-500/50 hover:bg-purple-500/10 text-sm px-6"
          >
            View All Akira Rewards
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
