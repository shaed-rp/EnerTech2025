import { useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

// Lazy load sections for better performance
const MarketOpportunity = lazy(() => import("@/components/sections/MarketOpportunity"));
const ProblemSection = lazy(() => import("@/components/sections/ProblemSection"));
const SolutionSection = lazy(() => import("@/components/sections/SolutionSection"));
const ROISection = lazy(() => import("@/components/sections/ROISection"));
const MarketTimingSection = lazy(() => import("@/components/sections/MarketTimingSection"));
const TractionSection = lazy(() => import("@/components/sections/TractionSection"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const Footer = lazy(() => import("@/components/sections/Footer"));

// Loading placeholder component
function SectionSkeleton() {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-label="Loading section">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-pulse space-y-4">
          <div className="h-8 sm:h-10 md:h-12 bg-muted rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 sm:h-5 bg-muted rounded w-1/2 mx-auto mb-8"></div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    // Handle hash navigation on mount
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => scrollToSection(hash), 100);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navigation onNavigate={scrollToSection} />
      <main id="main-content">
        <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <MarketOpportunity />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ProblemSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <SolutionSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ROISection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <MarketTimingSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TractionSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
