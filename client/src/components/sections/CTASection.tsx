import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10" aria-labelledby="cta-heading">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Ready to Learn More?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
          Join us in transforming the commercial vehicle procurement industry
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto min-h-[44px]">
            Request Full Deck
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[44px]">
            Schedule Meeting
          </Button>
        </div>
      </div>
    </section>
  );
}

