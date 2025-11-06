import { Card, CardContent } from "@/components/ui/card";
import { Network, Zap, FileCheck, BarChart3 } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Network className="h-6 w-6 text-primary" />,
    title: "Digital Vehicle Catalog",
    description: "Unified inventory visibility across all locations with live status tracking and smart search",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "End-to-End Order Management",
    description: "OEM ordering, upfitter coordination, and delivery orchestration—all in one place",
  },
  {
    icon: <FileCheck className="h-6 w-6 text-primary" />,
    title: "AI-Powered Digital Deal Jacket",
    description: "98.9% automation success rate with zero lost documents vs. 5-8% in traditional processes",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: "Real-Time Analytics",
    description: "Days-to-Turn tracking, working capital optimization, and upfitter performance metrics",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30" aria-labelledby="solution-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 id="solution-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            The SHAED Platform
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            A unified operating system for commercial mobility that eliminates fragmentation and unlocks efficiency across the entire procurement ecosystem
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 w-fit mb-3 sm:mb-4" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border-2 border-primary/20">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Competitive Moat</h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            SHAED is the <span className="font-bold text-primary">only platform</span> that unifies OEMs, dealers, upfitters, and fleet buyers in a single procurement operating system. Competitors solve point problems—we eliminate the entire inefficiency.
          </p>
        </div>
      </div>
    </section>
  );
}

