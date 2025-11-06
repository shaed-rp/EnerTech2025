import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6" aria-labelledby="hero-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold tracking-tight">
            Simplifying the future of
            <br />
            <span className="bg-gradient-to-r from-[#00F280] to-[#2FC774] bg-clip-text text-transparent">
              electric mobility
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            SHAED is the unified platform transforming commercial vehicle procurement—connecting dealers, upfitters, OEMs, and fleet buyers in a $1.28 trillion market.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Executive Summary
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

