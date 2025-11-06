import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface Result {
  title: string;
  description: string;
}

const results: Result[] = [
  {
    title: "DTT Improvement: 202 → 190 days",
    description: "6% reduction (12-day improvement)",
  },
  {
    title: "78,993 documents processed",
    description: "98.9% automation success rate",
  },
  {
    title: "Quote-to-Delivery: 3 days faster",
    description: "88% improvement in response time",
  },
];

const roiBreakdown = [
  { label: "Interest Savings", value: "$978,000" },
  { label: "Labor Savings", value: "$432,000" },
  { label: "Revenue Multiplier", value: "$1,008,000" },
];

export default function ROISection() {
  return (
    <section id="roi" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-labelledby="roi-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 id="roi-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Proven ROI
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Real results from beta deployment with multi-location commercial dealer group
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <div>
            <Card className="bg-card border-2 border-primary/20 rounded-2xl hover:shadow-md transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Beta Dealer Profile</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Volume</span>
                    <span className="font-semibold">35,000+ units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Floorplan Line Managed</span>
                    <span className="font-semibold">$380M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Starting DTT</span>
                    <span className="font-semibold">230 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Implementation</span>
                    <span className="font-semibold">6 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 sm:space-y-8 mt-8 md:mt-0">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-5">Results After 6 Months</h3>
              <div className="space-y-4 sm:space-y-5" role="list">
                {results.map((result) => (
                  <div key={result.title} className="flex items-start gap-3 sm:gap-4" role="listitem">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm sm:text-base mb-1">{result.title}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{result.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-5 sm:p-6 md:p-8 rounded-2xl border-2 border-primary">
              <h4 className="font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Total Annual ROI</h4>
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm mb-4 sm:mb-5" role="list">
                {roiBreakdown.map((item) => (
                  <div key={item.label} className="flex justify-between items-center gap-2" role="listitem">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 sm:pt-5 border-t-2 border-primary/30">
                <div className="flex justify-between items-center flex-wrap gap-2 sm:gap-3">
                  <span className="font-bold text-sm sm:text-base md:text-lg">Total Impact</span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">$2.42M</span>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">Payback period: 8.2 months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

