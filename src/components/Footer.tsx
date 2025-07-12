
import { Button } from '@/components/ui/button';
import { Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-purple-900/20 to-transparent border-t border-purple-500/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img 
                src="/lovable-uploads/b0e4990b-327d-4606-8033-146175a890a0.png" 
                alt="Kōryaku Logo" 
                className="h-6 w-6"
              />
              <h3 className="text-lg font-bold cyber-text neon-glow">Kōryaku</h3>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs mx-auto md:mx-0">
              Complete tasks. Earn coins. Get free game top-ups instantly.
            </p>
            <div className="flex justify-center md:justify-start space-x-2">
              <Button size="sm" variant="outline" className="border-purple-500/50 hover:bg-purple-500/10 h-8 w-8 p-0">
                <Instagram className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="outline" className="border-purple-500/50 hover:bg-purple-500/10 h-8 w-8 p-0">
                <Youtube className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="outline" className="border-purple-500/50 hover:bg-purple-500/10 h-8 w-8 p-0">
                <Twitter className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="outline" className="border-purple-500/50 hover:bg-purple-500/10 h-8 w-8 p-0">
                <MessageCircle className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-center">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <div><a href="#tasks" className="text-xs text-muted-foreground hover:text-purple-400 transition-colors">Tasks</a></div>
              <div><a href="#rewards" className="text-xs text-muted-foreground hover:text-purple-400 transition-colors">Rewards</a></div>
              <div><a href="#help" className="text-xs text-muted-foreground hover:text-purple-400 transition-colors">Help</a></div>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-3 text-center">
            <h4 className="text-sm font-semibold text-foreground">Support</h4>
            <div className="space-y-2">
              <div><a href="#faq" className="text-xs text-muted-foreground hover:text-purple-400 transition-colors">FAQ</a></div>
              <div><a href="#contact" className="text-xs text-muted-foreground hover:text-purple-400 transition-colors">Contact</a></div>
              <div><a href="#privacy" className="text-xs text-muted-foreground hover:text-purple-400 transition-colors">Privacy</a></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 pt-6 text-center">
          <p className="text-xs text-muted-foreground mb-3">
            © 2024 Kōryaku. All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-4 text-xs text-muted-foreground">
            <span className="flex items-center">🔒 Secure</span>
            <span className="flex items-center">⚡ Instant</span>
            <span className="flex items-center">🛡️ 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
