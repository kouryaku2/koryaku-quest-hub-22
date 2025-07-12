
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TasksSection from '@/components/TasksSection';
import RewardsSection from '@/components/RewardsSection';
import SpinWheel from '@/components/SpinWheel';
import Leaderboard from '@/components/Leaderboard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <Header />
      <main>
        <HeroSection />
        
        {/* New Gamification Section */}
        <section className="py-8 px-4 bg-gradient-to-b from-transparent to-purple-500/5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SpinWheel />
              <Leaderboard />
            </div>
          </div>
        </section>
        
        <TasksSection />
        <RewardsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
