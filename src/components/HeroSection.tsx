import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-dark opacity-30"></div>
      <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container mx-auto py-16 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up leading-tight">
            Complete Akira Tasks.
            <br />
            <span className="cyber-text neon-glow">Earn Akira Shards.</span>
            <br />
            Get Game Top-Ups.
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            Simple social tasks. Instant Akira Shards. Free game credits.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-cyber-gradient hover:opacity-90 text-white font-semibold px-8 py-4 animate-glow-pulse mb-12" 
            style={{ animationDelay: '0.4s' }}
            onClick={() => window.location.href = '/auth'}
          >
            Start Earning $AKIRA
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          {/* Stats - Enhanced with larger Akira Shards display */}
          <div className="grid grid-cols-3 gap-4 animate-slide-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="bg-card/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 cyber-glow">
              <div className="text-xl md:text-2xl font-bold cyber-text">24.5K</div>
              <div className="text-xs md:text-sm text-muted-foreground">Users</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 cyber-glow">
              <div className="text-xl md:text-2xl font-bold cyber-text flex items-center justify-center space-x-1">
                
                <span>2.8M</span>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Shards</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 cyber-glow">
              <div className="text-xl md:text-2xl font-bold cyber-text flex items-center justify-center">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 mr-1" />
                89%
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;