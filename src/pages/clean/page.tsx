
import CleanNavbar from '../../components/feature/CleanNavbar';
import CleanHeroSection from './components/CleanHeroSection';
import AboutSnapshot from './components/AboutSnapshot';
import ServicesGrid from './components/ServicesGrid';
import ProcessTimeline from './components/ProcessTimeline';
import FeaturedProjects from './components/FeaturedProjects';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTA from './components/FinalCTA';
import CleanFooter from '../../components/feature/CleanFooter';

export default function CleanPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <CleanNavbar />
      <main>
        <CleanHeroSection />
        <AboutSnapshot />
        <ServicesGrid />
        <ProcessTimeline />
        <FeaturedProjects />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <CleanFooter />
    </div>
  );
}
