import { TrendingUp, Network, FileCheck } from "lucide-react";

interface Problem {
  icon: React.ReactNode;
  title: string;
  description: string;
  source?: {
    number: number;
    url: string;
  };
}

const problems: Problem[] = [
  {
    icon: <TrendingUp className="h-5 w-5 text-destructive" />,
    title: "Working Capital Crisis",
    description: "202 days average inventory turn (up 38.4% YoY), costing dealers $7.90/day per vehicle",
    source: {
      number: 3,
      url: "https://www.worktrucksolutions.com/news-and-events/new-commercial-vehicle-market-reflects-transitions-in-q3-2025",
    },
  },
  {
    icon: <Network className="h-5 w-5 text-destructive" />,
    title: "System Fragmentation",
    description: "56% of dealers experience data gaps between CRM, DMS, and FMS more than 25% of the time",
  },
  {
    icon: <FileCheck className="h-5 w-5 text-destructive" />,
    title: "Document Chaos",
    description: "5-8% of documents lost in traditional processes. Costs: $20 to file, $120 to find misfiled, $220 to reproduce lost",
  },
];

const dealerMetrics = [
  { label: "Inventory Value", value: "$29.3M" },
  { label: "Annual Interest Cost", value: "$2.20M", highlight: true },
  { label: "Holding Costs", value: "$797K", highlight: true },
  { label: "Total Annual Burden", value: "$2.99M", total: true },
];

export default function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-labelledby="problem-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 md:hidden">
          <h2 id="problem-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            A Broken Ecosystem
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Commercial vehicle procurement operates through 8-12 disconnected systems, creating severe operational and financial pressure on dealers operating on razor-thin 1-2% net margins.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <div>
            <h2 id="problem-heading-desktop" className="hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              A Broken Ecosystem
            </h2>
            <p className="hidden md:block text-base sm:text-lg text-muted-foreground mb-6">
              Commercial vehicle procurement operates through 8-12 disconnected systems, creating severe operational and financial pressure on dealers operating on razor-thin 1-2% net margins.
            </p>
            <div className="space-y-4 sm:space-y-5" role="list">
              {problems.map((problem) => (
                <div key={problem.title} className="flex items-start gap-3 sm:gap-4" role="listitem">
                  <div className="mt-0.5 sm:mt-1 p-2 rounded-lg bg-destructive/10 flex-shrink-0" aria-hidden="true">
                    {problem.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-sm sm:text-base mb-1">{problem.title}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                      {problem.source && (
                        <sup className="text-primary ml-1">
                          <a
                            href={problem.source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            aria-label={`Source ${problem.source.number}: ${problem.description}`}
                          >
                            [{problem.source.number}]
                          </a>
                        </sup>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 p-6 sm:p-8 rounded-2xl border border-border mt-8 md:mt-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">For a mid-sized dealer:</h3>
            <div className="space-y-3 sm:space-y-4" role="list">
              {dealerMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`flex justify-between items-center gap-2 ${
                    index < dealerMetrics.length - 1 ? "pb-3 sm:pb-4 border-b border-border" : "pt-2"
                  }`}
                  role="listitem"
                >
                  <span className="text-xs sm:text-sm text-muted-foreground">{metric.label}</span>
                  <span
                    className={`font-semibold text-right ${
                      metric.total
                        ? "text-xl sm:text-2xl font-bold text-destructive"
                        : metric.highlight
                        ? "text-destructive text-sm sm:text-base"
                        : "text-sm sm:text-base"
                    }`}
                  >
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

