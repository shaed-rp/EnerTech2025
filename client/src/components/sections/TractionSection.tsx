import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

interface TractionStat {
  value: string;
  label: string;
}

const tractionStats: TractionStat[] = [
  { value: "18+", label: "OEM system rules connected" },
  { value: "28+", label: "Upfitters live on platform" },
  { value: "4", label: "Major dealer groups in trials" },
  { value: "4-6", label: "Week implementation timeline" },
];

export default function TractionSection() {
  return (
    <section id="traction" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-labelledby="traction-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 id="traction-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Current Traction
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Building momentum with industry leaders</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {tractionStats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-2xl border-2 border-primary/20">
          <div className="flex items-start gap-3 sm:gap-4">
            <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Network Effects in Action</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                SHAED becomes more valuable as more participants join. Each new OEM, upfitter, or dealer strengthens the platform for all users—creating a powerful moat that competitors cannot easily replicate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

