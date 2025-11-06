import { useCallback } from "react";
import { NAV_SCROLL_OFFSET } from "@/constants/sections";

interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

/**
 * Custom hook for smooth scrolling to sections
 * Respects prefers-reduced-motion for accessibility
 */
export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string, options: ScrollOptions = {}) => {
    const { offset = NAV_SCROLL_OFFSET } = options;
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior = prefersReducedMotion ? 'auto' : (options.behavior || 'smooth');
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior,
      });
    }
  }, []);

  return { scrollToSection };
}

