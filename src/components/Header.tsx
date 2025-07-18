
import { Button } from '@/components/ui/button';

const Header = () => {

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


          {/* Sign In / Sign Up Button - Desktop */}
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10"
            onClick={() => window.location.href = '/auth'}
          >
            Sign In / Sign Up
          </Button>

          {/* Sign In / Sign Up Button - Mobile */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden text-xs px-3 py-2 border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10"
            onClick={() => window.location.href = '/auth'}
          >
            Sign In / Sign Up
          </Button>
        </div>

      </div>
    </header>
  );
};

export default Header;
