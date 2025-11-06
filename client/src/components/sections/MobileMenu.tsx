import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/sections";

interface MobileMenuProps {
  onNavigate: (section: string) => void;
}

export default function MobileMenu({ onNavigate }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu */}
          <div className="fixed top-[64px] sm:top-[72px] left-0 right-0 bg-background border-b border-border z-50 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-300">
            <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Mobile navigation">
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className="text-left px-4 py-3 rounded-lg hover:bg-muted active:bg-muted/80 transition-colors text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={`Navigate to ${item.label} section`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-border mt-2">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

