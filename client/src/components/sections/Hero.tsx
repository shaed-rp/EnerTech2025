import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6" aria-labelledby="hero-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Simplifying the future of
            <br />
            <span className="gradient-text">
              commercial mobility
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-2">
            SHAED is the unified platform transforming commercial vehicle procurement—connecting dealers, upfitters, OEMs, and fleet buyers in a $1.28 trillion market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto min-h-[44px]">
              View Executive Summary
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[44px]">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

