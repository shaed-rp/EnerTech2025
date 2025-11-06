import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface Result {
  title: string;
  description: string;
}

const results: Result[] = [
  {
    title: "DTT Improvement: 230 → 195 days",
    description: "15% reduction (35-day improvement)",
  },
  {
    title: "49,993 documents processed",
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
    <section id="roi" className="py-20 px-6" aria-labelledby="roi-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 id="roi-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Proven ROI
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from beta deployment with multi-location commercial dealer group
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-card border-2 border-primary/20 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Beta Dealer Profile</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Volume</span>
                    <span className="font-semibold">35,000+ units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Inventory</span>
                    <span className="font-semibold">$52M</span>
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

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Results After 6 Months</h3>
              <div className="space-y-4" role="list">
                {results.map((result) => (
                  <div key={result.title} className="flex items-center gap-3" role="listitem">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">{result.title}</div>
                      <div className="text-sm text-muted-foreground">{result.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-2xl border-2 border-primary">
              <h4 className="font-bold text-lg mb-4">Total Annual ROI</h4>
              <div className="space-y-2 text-sm mb-4" role="list">
                {roiBreakdown.map((item) => (
                  <div key={item.label} className="flex justify-between" role="listitem">
                    <span>{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t-2 border-primary/30">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Total Impact</span>
                  <span className="text-3xl font-bold text-primary">$2.42M</span>
                </div>
                <div className="text-sm text-muted-foreground mt-2">Payback period: 8.2 months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

