import { useEffect } from "react";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import MarketOpportunity from "@/components/sections/MarketOpportunity";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ROISection from "@/components/sections/ROISection";
import MarketTimingSection from "@/components/sections/MarketTimingSection";
import TractionSection from "@/components/sections/TractionSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    // Handle hash navigation on mount
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={scrollToSection} />
      <Hero />
      <MarketOpportunity />
      <ProblemSection />
      <SolutionSection />
      <ROISection />
      <MarketTimingSection />
      <TractionSection />
      <CTASection />
      <Footer />
    </div>
  );
}
