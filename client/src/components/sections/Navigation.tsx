import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants/sections";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" aria-label="SHAED Home">
            <img src="/shaed-logo.png" alt="SHAED" className="h-8" />
          </a>
          <div className="flex gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-sm hover:text-primary transition-colors"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

