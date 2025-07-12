
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Gift } from 'lucide-react';

const DailySpin = () => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cyber-glow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Gift className="h-5 w-5 mr-2 text-purple-400" />
            Daily Spin
          </CardTitle>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
            Available
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center">
          {/* Large Akira Shards coin as main visual */}
          <div className="relative mb-4">
            <img 
              src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
              alt="Akira Shards" 
              className="h-24 w-24 md:h-28 md:w-28 mx-auto akira-coin animate-pulse hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-cyber-gradient/20 rounded-full blur-xl"></div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Spin daily for bonus Akira Shards!
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-xs text-center mb-4">
          <div className="bg-secondary/50 rounded p-3 space-y-1">
            <img 
              src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
              alt="Akira Shards" 
              className="h-6 w-6 mx-auto akira-coin-sm animate-pulse"
            />
            <div className="font-bold cyber-text">50-200</div>
          </div>
          <div className="bg-secondary/50 rounded p-3 space-y-1">
            <img 
              src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
              alt="Akira Shards" 
              className="h-6 w-6 mx-auto akira-coin-sm animate-pulse"
            />
            <div className="font-bold cyber-text">10-50</div>
          </div>
          <div className="bg-secondary/50 rounded p-3 space-y-1">
            <img 
              src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
              alt="Akira Shards" 
              className="h-6 w-6 mx-auto akira-coin-sm animate-pulse"
            />
            <div className="font-bold cyber-text">5-25</div>
          </div>
        </div>
        
        <Button 
          className="w-full bg-cyber-gradient hover:opacity-90 text-white font-medium"
        >
          <Zap className="h-4 w-4 mr-2" />
          Spin Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default DailySpin;
