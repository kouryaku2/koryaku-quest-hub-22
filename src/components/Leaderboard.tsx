
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';

const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: 'Ahmed', shards: 2850, badge: 'Diamond' },
    { rank: 2, name: 'Fatima', shards: 2340, badge: 'Gold' },
    { rank: 3, name: 'Ali', shards: 1980, badge: 'Gold' },
    { rank: 4, name: 'Zara', shards: 1650, badge: 'Silver' },
    { rank: 5, name: 'Omar', shards: 1420, badge: 'Silver' }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="h-5 w-5 text-yellow-400" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Award className="h-5 w-5 text-amber-600" />;
      default: return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Diamond': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Gold': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Silver': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cyber-glow">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-purple-400" />
          Weekly Leaders
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {topUsers.map((user) => (
          <div key={user.rank} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8">
                {getRankIcon(user.rank)}
              </div>
              <div>
                <div className="font-medium text-sm">{user.name}</div>
                <Badge variant="outline" className={`${getBadgeColor(user.badge)} text-xs`}>
                  {user.badge}
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <img 
                src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
                alt="Akira Shards" 
                className="h-6 w-6 akira-coin-sm animate-pulse hover:animate-glow-pulse transition-all duration-300"
              />
              <div className="text-right">
                <div className="font-bold cyber-text">{user.shards.toLocaleString()}</div>
                <div className="text-xs text-cyan-400">$AKIRA</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
