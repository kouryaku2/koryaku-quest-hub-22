
import { Coins, Users, Trophy, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const UserStats = () => {
  const currentShards = 750;
  const targetShards = 1000;
  const progressPercentage = (currentShards / targetShards) * 100;

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 space-y-4">
      {/* Large Akira Shards Display */}
      <div className="flex items-center justify-center space-x-4 p-4 bg-cyber-gradient/10 rounded-lg">
        <img 
          src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
          alt="Akira Shards" 
          className="h-16 w-16 md:h-20 md:w-20 akira-coin animate-pulse"
        />
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold cyber-text">{currentShards.toLocaleString()}</div>
          <div className="text-sm text-cyan-400 font-medium">$AKIRA</div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
              alt="Akira Shards" 
              className="h-5 w-5 akira-coin-sm animate-pulse"
            />
            <span className="cyber-text font-bold">{currentShards.toLocaleString()}</span>
            <span className="text-muted-foreground">/ {targetShards.toLocaleString()}</span>
            <span className="text-xs text-cyan-400">$AKIRA</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Trophy className="h-3 w-3" />
            <span>Gold</span>
          </div>
        </div>
        <Progress value={progressPercentage} className="h-3" />
        <p className="text-xs text-muted-foreground text-center">
          {targetShards - currentShards} Akira Shards to next reward
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-purple-500/20">
        <div className="text-center">
          <div className="text-sm font-bold cyber-text">12</div>
          <div className="text-xs text-muted-foreground">Akira Tasks</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-bold cyber-text">5</div>
          <div className="text-xs text-muted-foreground">Referrals</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <Star className="h-3 w-3 text-yellow-400" />
          </div>
          <div className="text-xs text-muted-foreground">Level 3</div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
