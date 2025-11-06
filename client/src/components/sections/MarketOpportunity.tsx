import { Card, CardContent } from "@/components/ui/card";

interface MarketCard {
  label: string;
  metrics: {
    label: string;
    value: string;
  }[];
  scope: string;
}

const marketCards: MarketCard[] = [
  {
    label: "SOM",
    metrics: [
      { label: "Software spend", value: "$1.3b" },
      { label: "Advertising spend", value: "$402m" },
      { label: "Vehicles sold", value: "482k" },
      { label: "Dealers", value: "3700+" },
    ],
    scope: "Class 4-8 (US)",
  },
  {
    label: "SAM",
    metrics: [
      { label: "Software spend", value: "$7.2b" },
      { label: "Advertising spend", value: "$10.9b" },
      { label: "Vehicles sold", value: "12.3m" },
      { label: "Dealers", value: "20,000+" },
    ],
    scope: "Class 1-8 (US)",
  },
  {
    label: "TAM",
    metrics: [
      { label: "Software spend", value: "$12.6b" },
      { label: "Advertising spend", value: "$19.5b" },
      { label: "Vehicles sold", value: "23.7m" },
      { label: "Dealers", value: "35,000+" },
    ],
    scope: "Class 1-8 (Global)",
  },
];

export default function MarketOpportunity() {
  return (
    <section id="opportunity" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30" aria-labelledby="market-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 id="market-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Massive Market Opportunity
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Addressing a critical inefficiency in a high-growth industry
          </p>
        </div>

        {/* Market Segmentation Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {marketCards.map((card) => (
            <Card 
              key={card.label} 
              className="relative overflow-hidden bg-card border-2 border-primary/20 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus:outline-none"
              tabIndex={0}
              role="article"
              aria-labelledby={`market-card-${card.label}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  // Cards are informational, so we just ensure focus is visible
                  e.currentTarget.focus();
                }
              }}
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00F280] to-[#2FC774]" aria-hidden="true" />
              
              <CardContent className="relative pt-6 pb-6">
                <div id={`market-card-${card.label}`} className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                  {card.label}
                </div>
                <div className="space-y-3 mb-4">
                  {card.metrics.map((metric) => (
                    <div key={metric.label} className="flex justify-between items-baseline gap-2">
                      <span className="text-sm text-muted-foreground flex-shrink-0">{metric.label}</span>
                      <span className="text-base sm:text-lg font-bold text-foreground text-right flex-shrink-0">{metric.value}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-border text-xs text-muted-foreground font-medium">
                  {card.scope}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Explanatory Sections */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left Section */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-primary">
              Why Dealers: The Distribution Channel
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">95% of commercial vehicles</strong> sold through dealers
              </p>
              <p>
                Each dealer coordinates <strong className="text-foreground">50-100+ partners</strong>
              </p>
              <p>
                <strong className="text-foreground">$200k+ annual software spend</strong> across single-point solutions
              </p>
              <p>
                Multiple revenue opportunities: <strong className="text-foreground">Software + Advertising + Transaction + Partner referrals</strong>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-primary">
              Class 4-8 Dealers: The Perfect Entry Point
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground">
              <p>
                Every truck requires <strong className="text-foreground">extensive customization</strong>
              </p>
              <p>
                Complex ecosystem - <strong className="text-foreground">chassis, bodies, equipment, delivery, finance</strong>
              </p>
              <p>
                <strong className="text-foreground">Large venture opportunity</strong> for go-to-market
              </p>
              <p>
                <strong className="text-foreground">Network effects multiply</strong> with each dealer/partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

