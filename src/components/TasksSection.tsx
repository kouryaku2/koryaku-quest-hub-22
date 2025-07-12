
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Instagram, Youtube, Twitter, Heart, MessageCircle, Share2, Clock, Users, Filter } from 'lucide-react';

const TasksSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Instagram', 'YouTube', 'Twitter', 'TikTok'];
  
  const trendingTasks = [
    {
      id: 1,
      platform: 'Instagram',
      icon: Instagram,
      title: 'Follow @gamingworld',
      reward: 50,
      time: '30s',
      participants: 1200,
      category: 'Instagram'
    },
    {
      id: 2,
      platform: 'YouTube',
      icon: Youtube,
      title: 'Comment on Gaming Video',
      reward: 75,
      time: '2m',
      participants: 850,
      category: 'YouTube'
    },
    {
      id: 3,
      platform: 'Twitter',
      icon: Twitter,
      title: 'Retweet Gaming Tips',
      reward: 40,
      time: '15s',
      participants: 2100,
      category: 'Twitter'
    },
    {
      id: 4,
      platform: 'Instagram',
      icon: Heart,
      title: 'Like 5 Gaming Posts',
      reward: 60,
      time: '1m',
      participants: 1500,
      category: 'Instagram'
    }
  ];

  const filteredTasks = selectedCategory === 'All' 
    ? trendingTasks 
    : trendingTasks.filter(task => task.category === selectedCategory);

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Instagram': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'YouTube': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Twitter': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <section id="tasks" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="cyber-text neon-glow">Akira Tasks</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Simple tasks. Quick completion. Instant Akira Shards.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-cyber-gradient hover:opacity-90 text-white" 
                : "border-purple-500/50 hover:bg-purple-500/10"
              }
            >
              {category === 'All' && <Filter className="h-3 w-3 mr-1" />}
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTasks.map((task, index) => (
            <Card 
              key={task.id} 
              className="bg-card/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 cyber-glow animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${getPlatformColor(task.platform)}`}>
                    <task.icon className="h-4 w-4" />
                  </div>
                  <Badge variant="outline" className={`${getPlatformColor(task.platform)} text-xs`}>
                    {task.platform}
                  </Badge>
                </div>
                <CardTitle className="text-sm group-hover:text-purple-400 transition-colors leading-tight">
                  {task.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{task.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{task.participants.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-1">
                    <img 
                      src="/lovable-uploads/3ac42aad-2daf-4ad8-a856-47d2026c6ab4.png" 
                      alt="Akira Shards" 
                      className="h-4 w-4 animate-pulse"
                    />
                    <span className="font-bold text-sm cyber-text">
                      {task.reward}
                    </span>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-cyber-gradient hover:opacity-90 text-white font-medium text-xs px-3 py-1 h-7 group-hover:animate-glow-pulse"
                  >
                    Start
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="border-purple-500/50 hover:bg-purple-500/10 text-sm px-6"
          >
            View All Akira Tasks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TasksSection;
