
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import UserStats from '@/components/UserStats';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/b0e4990b-327d-4606-8033-146175a890a0.png" 
              alt="Kōryaku Logo" 
              className="h-8 w-8 animate-float"
            />
            <h1 className="text-xl font-bold cyber-text neon-glow">Kōryaku</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#tasks" className="text-foreground hover:text-purple-400 transition-colors text-sm">Akira Tasks</a>
            <a href="#rewards" className="text-foreground hover:text-purple-400 transition-colors text-sm">Akira Rewards</a>
            <a href="#leaderboard" className="text-foreground hover:text-purple-400 transition-colors text-sm">Leaderboard</a>
          </nav>

          {/* Desktop Actions - Enhanced coin display */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-full border border-purple-500/20">
              <img 
                src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
                alt="Akira Shards" 
                className="h-5 w-5 akira-coin-sm animate-pulse"
              />
              <div className="text-right">
                <div className="text-sm font-bold cyber-text">750</div>
                <div className="text-xs text-cyan-400">$AKIRA</div>
              </div>
            </div>
            <Button size="sm" className="bg-cyber-gradient hover:opacity-90 text-white font-medium text-xs px-4">
              Akira Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-card/80 rounded-lg border border-purple-500/20 animate-slide-up space-y-4">
            <UserStats />
            <div className="flex flex-col space-y-3 pt-3 border-t border-purple-500/20">
              <a href="#tasks" className="text-foreground hover:text-purple-400 transition-colors text-sm py-1">Akira Tasks</a>
              <a href="#rewards" className="text-foreground hover:text-purple-400 transition-colors text-sm py-1">Akira Rewards</a>
              <a href="#leaderboard" className="text-foreground hover:text-purple-400 transition-colors text-sm py-1">Leaderboard</a>
              <Button className="bg-cyber-gradient hover:opacity-90 text-white font-medium text-sm mt-2">
                Akira Wallet
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
