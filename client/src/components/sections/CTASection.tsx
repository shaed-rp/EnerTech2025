import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10" aria-labelledby="cta-heading">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Learn More?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join us in transforming the commercial vehicle procurement industry
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Request Full Deck
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
          <Button size="lg" variant="outline">
            Schedule Meeting
          </Button>
        </div>
      </div>
    </section>
  );
}

