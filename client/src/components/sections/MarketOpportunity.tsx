import { Card, CardContent } from "@/components/ui/card";

interface MarketStat {
  label: string;
  value: string;
  description: string;
  source?: {
    number: number;
    url: string;
  };
}

const marketStats: MarketStat[] = [
  {
    label: "TAM",
    value: "$93.2B",
    description: "Global fleet management software market by 2032 at 14.7% CAGR",
    source: {
      number: 1,
      url: "https://finance.yahoo.com/news/fleet-management-software-market-hit-130000905.html",
    },
  },
  {
    label: "SAM",
    value: "$1.28T",
    description: "U.S. commercial vehicle market by 2030 at 10.4% CAGR",
    source: {
      number: 2,
      url: "https://www.fortunebusinessinsights.com/u-s-commercial-vehicle-market-108508",
    },
  },
  {
    label: "SOM",
    value: "~18,000",
    description: "Commercial vehicle dealers in North America—targeting 5-10% penetration",
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {marketStats.map((stat) => (
            <Card key={stat.label} className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-sm font-semibold text-primary mb-2">{stat.label}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                  {stat.source && (
                    <sup className="text-primary ml-1">
                      <a
                        href={stat.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        aria-label={`Source ${stat.source.number}: ${stat.description}`}
                      >
                        [{stat.source.number}]
                      </a>
                    </sup>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

