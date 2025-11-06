import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants/sections";
import MobileMenu from "./MobileMenu";
import { useScrollPosition } from "@/hooks/useScrollPosition";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const hasScrolled = useScrollPosition(50);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 border-b border-border transition-all duration-300 ${
        hasScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm" 
          : "bg-background/80 backdrop-blur-md"
      }`} 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <a href="/" aria-label="SHAED Home" className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            <img 
              src="/shaed-logo.png" 
              alt="SHAED" 
              className="h-7 sm:h-8" 
              loading="eager"
              width="120"
              height="32"
            />
          </a>
          <div className="hidden md:flex gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-sm hover:text-primary transition-colors whitespace-nowrap py-2"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us
              </Button>
            </div>
            <MobileMenu onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </nav>
  );
}

