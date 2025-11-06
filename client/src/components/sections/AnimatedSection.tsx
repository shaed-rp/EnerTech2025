import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wrapper component that adds fade-in animation when section enters viewport
 */
export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0 
}: AnimatedSectionProps) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ease-out ${
        hasIntersected
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

