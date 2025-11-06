import { Card, CardContent } from "@/components/ui/card";

interface TimingStat {
  value: string;
  title: string;
  description: string;
  source?: {
    number: number;
    url: string;
  };
}

const timingStats: TimingStat[] = [
  {
    value: "64%",
    title: "EV Fleet Operations",
    description: "of fleet professionals currently operate electric vehicles, with 87% planning 5-year electrification roadmaps",
    source: {
      number: 4,
      url: "https://qmerit.com/blog/2025-industry-insights-ev-fleet-conversion-survey/",
    },
  },
  {
    value: "438",
    title: "Dealer Consolidation",
    description: "dealership transactions in 2024 (up 10% from 2023), creating urgent need for standardized workflows",
    source: {
      number: 5,
      url: "https://www.kerriganadvisors.com/in-the-news/report-dealership-buy-sell-market-hits-another-record-in-2024",
    },
  },
  {
    value: "95%",
    title: "Integration Demand",
    description: "of dealers believe better integrations would improve efficiency by 20%+ as fragmentation costs escalate",
  },
];

export default function MarketTimingSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30" aria-labelledby="timing-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 id="timing-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Perfect Market Timing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">Three powerful tailwinds accelerating adoption</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {timingStats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <h3 className="font-bold text-lg mb-2">{stat.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
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
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

