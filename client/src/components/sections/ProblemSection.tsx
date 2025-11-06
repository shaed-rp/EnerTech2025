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
    <section className="py-20 px-6" aria-labelledby="problem-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="problem-heading" className="text-4xl md:text-5xl font-bold mb-6">
              A Broken Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Commercial vehicle procurement operates through 8-12 disconnected systems, creating severe operational and financial pressure on dealers operating on razor-thin 1-2% net margins.
            </p>
            <div className="space-y-4" role="list">
              {problems.map((problem) => (
                <div key={problem.title} className="flex items-start gap-3" role="listitem">
                  <div className="mt-1 p-2 rounded-lg bg-destructive/10" aria-hidden="true">
                    {problem.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{problem.title}</div>
                    <div className="text-sm text-muted-foreground">
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

          <div className="bg-muted/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">For a mid-sized dealer:</h3>
            <div className="space-y-4" role="list">
              {dealerMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`flex justify-between items-center ${
                    index < dealerMetrics.length - 1 ? "pb-2 border-b border-border" : "pt-2"
                  }`}
                  role="listitem"
                >
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span
                    className={`font-semibold ${
                      metric.total
                        ? "text-2xl font-bold text-destructive"
                        : metric.highlight
                        ? "text-destructive"
                        : ""
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

