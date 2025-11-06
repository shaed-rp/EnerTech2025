import { useCallback } from "react";
import { NAV_SCROLL_OFFSET } from "@/constants/sections";

interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

/**
 * Custom hook for smooth scrolling to sections
 */
export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string, options: ScrollOptions = {}) => {
    const { offset = NAV_SCROLL_OFFSET, behavior = "smooth" } = options;
    const element = document.getElementById(sectionId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior,
      });
    }
  }, []);

  return { scrollToSection };
}

