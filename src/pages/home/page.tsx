
import GlassNavbar from '../../components/feature/GlassNavbar';
import HeroSection from './components/HeroSection';
import BlueprintSection from './components/BlueprintSection';
import MultiverseSection from './components/MultiverseSection';
import ReactorSection from './components/ReactorSection';
import FoundrySection from './components/FoundrySection';
import WatchtowerSection from './components/WatchtowerSection';
import AICoreSection from './components/AICoreSection';
import FinalSection from './components/FinalSection';
import GlassFooter from '../../components/feature/GlassFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <GlassNavbar />
      <main>
        <HeroSection />
        <BlueprintSection />
        <MultiverseSection />
        <ReactorSection />
        <FoundrySection />
        <WatchtowerSection />
        <AICoreSection />
        <FinalSection />
      </main>
      <GlassFooter />
    </div>
  );
}
