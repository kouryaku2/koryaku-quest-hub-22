
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <Header />
      <main>
        {/* Welcome Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold cyber-text neon-glow mb-4 sm:mb-6 leading-tight">
              Welcome to Kouryaku
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto px-2">
              Kouryaku — meaning "strategy" or "conquest" — is a gamer's haven where your time and effort are rewarded with real in-game treasures. Whether you grind for glory or play for passion, Kouryaku is here to help you earn what matters most.
            </p>
          </div>
        </section>

        {/* What Are Akira Shards Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold cyber-text mb-4 sm:mb-6 text-center">
              What Are Akira Shards?
            </h2>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed text-center max-w-3xl mx-auto px-2">
              Akira Shards are the official reward currency of Kouryaku. Complete simple in-app tasks and offers to earn shards — then use them to redeem battle passes, top-ups, and exclusive items in your favorite games. Every shard brings you closer to the gear you deserve.
            </p>
          </div>
        </section>

        {/* Supported Games Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold cyber-text mb-8 sm:mb-12 text-center">
              Supported Games
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {/* Genshin Impact */}
              <div className="relative bg-card/50 rounded-lg border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row relative">
                   <div className="flex-1 p-4 sm:p-6 md:p-8 relative z-10 overflow-hidden">
                     <div 
                       className="absolute inset-0 opacity-30 blur-sm scale-110"
                       style={{
                         backgroundImage: `url('/lovable-uploads/aed5af5e-4b43-4159-bbd5-773b7f0200ff.png')`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                       }}
                     ></div>
                     <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold cyber-text mb-2 sm:mb-3">Genshin Impact</h3>
                      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                        Embark on a fantasy journey across Teyvat. Use Akira Shards to unlock Genesis Crystals, Welkin Moon, and the Battle Pass.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-80 h-40 sm:h-48 md:h-auto relative">
                    <img 
                      src="/lovable-uploads/aed5af5e-4b43-4159-bbd5-773b7f0200ff.png" 
                      alt="Genshin Impact" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Honkai Star Rail */}
              <div className="relative bg-card/50 rounded-lg border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row relative">
                   <div className="flex-1 p-4 sm:p-6 md:p-8 relative z-10 overflow-hidden">
                     <div 
                       className="absolute inset-0 opacity-30 blur-sm scale-110"
                       style={{
                         backgroundImage: `url('/lovable-uploads/648d95ef-2aa8-4afc-89c7-dd468f53f610.png')`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                       }}
                     ></div>
                     <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold cyber-text mb-2 sm:mb-3">Honkai: Star Rail</h3>
                      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                        Step aboard the Astral Express and claim Oneiric Shards, monthly cards, and passes using your hard-earned Akira Shards.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-80 h-40 sm:h-48 md:h-auto relative">
                    <img 
                      src="/lovable-uploads/648d95ef-2aa8-4afc-89c7-dd468f53f610.png" 
                      alt="Honkai: Star Rail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* PUBG Mobile */}
              <div className="relative bg-card/50 rounded-lg border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row relative">
                   <div className="flex-1 p-4 sm:p-6 md:p-8 relative z-10 overflow-hidden">
                     <div 
                       className="absolute inset-0 opacity-30 blur-sm scale-110"
                       style={{
                         backgroundImage: `url('/lovable-uploads/fc994d08-50ce-4501-846a-c5e0972f6593.png')`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                       }}
                     ></div>
                     <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold cyber-text mb-2 sm:mb-3">PUBG Mobile</h3>
                      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                        Gear up for battleground dominance. Redeem UC (Unknown Cash) for gun skins, outfits, and more.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-80 h-40 sm:h-48 md:h-auto relative">
                    <img 
                      src="/lovable-uploads/fc994d08-50ce-4501-846a-c5e0972f6593.png" 
                      alt="PUBG Mobile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Legends */}
              <div className="relative bg-card/50 rounded-lg border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row relative">
                   <div className="flex-1 p-4 sm:p-6 md:p-8 relative z-10 overflow-hidden">
                     <div 
                       className="absolute inset-0 opacity-30 blur-sm scale-110"
                       style={{
                         backgroundImage: `url('/lovable-uploads/5d451198-00b8-446e-9242-018df06ce282.png')`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                       }}
                     ></div>
                     <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold cyber-text mb-2 sm:mb-3">Mobile Legends</h3>
                      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                        Power up your heroes with diamonds and battle passes — fight with style.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-80 h-40 sm:h-48 md:h-auto relative">
                    <img 
                      src="/lovable-uploads/5d451198-00b8-446e-9242-018df06ce282.png" 
                      alt="Mobile Legends" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Free Fire */}
              <div className="relative bg-card/50 rounded-lg border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row relative">
                   <div className="flex-1 p-4 sm:p-6 md:p-8 relative z-10 overflow-hidden">
                     <div 
                       className="absolute inset-0 opacity-30 blur-sm scale-110"
                       style={{
                         backgroundImage: `url('/lovable-uploads/53b87547-0f55-450c-a4b9-c176ad65ce72.png')`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                       }}
                     ></div>
                     <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold cyber-text mb-2 sm:mb-3">Free Fire</h3>
                      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                        Drop into fast-paced combat and redeem Diamonds to unlock elite bundles, emotes, and weapon skins.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-80 h-40 sm:h-48 md:h-auto relative">
                    <img 
                      src="/lovable-uploads/53b87547-0f55-450c-a4b9-c176ad65ce72.png" 
                      alt="Free Fire" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Wuthering Waves */}
              <div className="relative bg-card/50 rounded-lg border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row relative">
                   <div className="flex-1 p-4 sm:p-6 md:p-8 relative z-10 overflow-hidden">
                     <div 
                       className="absolute inset-0 opacity-30 blur-sm scale-110"
                       style={{
                         backgroundImage: `url('/lovable-uploads/c82ef94e-11c0-45f5-867a-a41a93993dc6.png')`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                       }}
                     ></div>
                     <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold cyber-text mb-2 sm:mb-3">Wuthering Waves (WuWa)</h3>
                      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                        Dive into a post-apocalyptic world of sound and shadow. Use Akira Shards for Lustrous Tide and other premium pulls.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-80 h-40 sm:h-48 md:h-auto relative">
                    <img 
                      src="/lovable-uploads/c82ef94e-11c0-45f5-867a-a41a93993dc6.png" 
                      alt="Wuthering Waves" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-t from-purple-500/5 to-transparent">
          <div className="container mx-auto max-w-4xl text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={() => window.location.href = '/auth'}
            >
              Get Started
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
