import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Gift, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [canSpin, setCanSpin] = useState(true);
  const [lastSpinTime, setLastSpinTime] = useState<number | null>(null);
  const [spinResult, setSpinResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Spin wheel segments and their reward values
  const segments = [
    { label: '10', value: 10, color: 'from-purple-500 to-purple-600' },
    { label: '25', value: 25, color: 'from-blue-500 to-blue-600' },
    { label: '50', value: 50, color: 'from-green-500 to-green-600' },
    { label: '75', value: 75, color: 'from-yellow-500 to-yellow-600' },
    { label: '100', value: 100, color: 'from-red-500 to-red-600' },
    { label: '15', value: 15, color: 'from-indigo-500 to-indigo-600' },
    { label: '30', value: 30, color: 'from-pink-500 to-pink-600' },
    { label: '60', value: 60, color: 'from-orange-500 to-orange-600' },
  ];

  const checkCooldown = () => {
    if (!lastSpinTime) return true;
    const now = Date.now();
    const timeDiff = now - lastSpinTime;
    return timeDiff >= 24 * 60 * 60 * 1000; // 24 hours
  };

  const getTimeUntilNextSpin = () => {
    if (!lastSpinTime) return 0;
    const now = Date.now();
    const nextSpinTime = lastSpinTime + (24 * 60 * 60 * 1000);
    return Math.max(0, nextSpinTime - now);
  };

  const formatTimeRemaining = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const handleSpin = () => {
    if (!checkCooldown()) {
      toast({
        title: "Spin on Cooldown",
        description: `Come back in ${formatTimeRemaining(getTimeUntilNextSpin())}`,
        variant: "destructive",
      });
      return;
    }

    setIsSpinning(true);
    setShowResult(false);
    
    // Random rotation between 1440 and 2160 degrees (4-6 full rotations)
    const baseRotation = 1440 + Math.random() * 720;
    
    // Calculate which segment to land on
    const segmentAngle = 360 / segments.length;
    const randomSegmentIndex = Math.floor(Math.random() * segments.length);
    const targetAngle = randomSegmentIndex * segmentAngle + (segmentAngle / 2);
    const finalRotation = baseRotation + (360 - targetAngle);

    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${finalRotation}deg)`;
    }

    // Set result after spin completes
    setTimeout(() => {
      const reward = segments[randomSegmentIndex].value;
      setSpinResult(reward);
      setIsSpinning(false);
      setShowResult(true);
      setLastSpinTime(Date.now());
      setCanSpin(false);
      
      toast({
        title: "Spin Complete!",
        description: `You won ${reward} Akira Shards!`,
      });
    }, 3000);
  };

  const currentlyCanSpin = checkCooldown();

  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cyber-glow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Gift className="h-5 w-5 mr-2 text-purple-400" />
            Daily Spin & Win
          </CardTitle>
          <Badge className={currentlyCanSpin ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-red-500/20 text-red-400 border-red-500/30"}>
            {currentlyCanSpin ? 'Available' : <><Clock className="h-3 w-3 mr-1" />Cooldown</>}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Spinning Wheel */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-48 h-48 mx-auto">
            {/* Wheel */}
            <div 
              ref={wheelRef}
              className="w-full h-full rounded-full border-4 border-white/20 relative overflow-hidden transition-transform duration-3000 ease-out"
              style={{ 
                background: `conic-gradient(
                  from 0deg,
                  ${segments.map((segment, index) => {
                    const startAngle = (index / segments.length) * 360;
                    const endAngle = ((index + 1) / segments.length) * 360;
                    return `var(--${segment.color.split('-')[1]}) ${startAngle}deg ${endAngle}deg`;
                  }).join(', ')}
                )`
              }}
            >
              {/* Segments with numbers */}
              {segments.map((segment, index) => {
                const angle = (index / segments.length) * 360 + (360 / segments.length) / 2;
                return (
                  <div
                    key={index}
                    className="absolute w-full h-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: 'center'
                    }}
                  >
                    <div style={{ transform: 'translateY(-60px)' }}>
                      {segment.label}
                    </div>
                  </div>
                );
              })}
              
              {/* Center coin */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img 
                  src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
                  alt="Akira Shards" 
                  className="h-16 w-16 akira-coin animate-pulse"
                />
              </div>
            </div>
            
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
            </div>
          </div>
        </div>

        {/* Result Display */}
        {showResult && spinResult && (
          <div className="text-center p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg border border-purple-500/30 animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <img 
                src="/lovable-uploads/91627421-a2df-4dde-9c67-e6418fd6d4ef.png" 
                alt="Akira Shards" 
                className="h-12 w-12 akira-coin animate-bounce"
              />
              <div>
                <div className="text-2xl font-bold cyber-text">+{spinResult}</div>
                <div className="text-sm text-cyan-400">$AKIRA Shards</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Come back tomorrow to spin again!
            </p>
          </div>
        )}

        {/* Spin Button */}
        <Button 
          onClick={handleSpin}
          disabled={isSpinning || !currentlyCanSpin}
          className="w-full bg-cyber-gradient hover:opacity-90 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Zap className="h-4 w-4 mr-2" />
          {isSpinning ? 'Spinning...' : currentlyCanSpin ? 'Spin Now' : `Next spin in ${formatTimeRemaining(getTimeUntilNextSpin())}`}
        </Button>

        {/* Info */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Spin once every 24 hours for 10-100 Akira Shards
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpinWheel;