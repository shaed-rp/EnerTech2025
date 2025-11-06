interface Source {
  number: number;
  title: string;
}

const sources: Source[] = [
  { number: 1, title: "Yahoo Finance - Fleet Management Software Market Analysis, September 2024" },
  { number: 2, title: "Fortune Business Insights - U.S. Commercial Vehicle Market Report" },
  { number: 3, title: "Work Truck Solutions - Q3 2025 Commercial Vehicle Market Analysis, October 2025" },
  { number: 4, title: "Qmerit - 2025 Industry Insights: EV Fleet Conversion Survey, May 2025" },
  { number: 5, title: "Kerrigan Advisors - 2024 Blue Sky Report, March 2025" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border" role="contentinfo">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="/" aria-label="SHAED Home">
              <img src="/shaed-logo.png" alt="SHAED" className="h-8" />
            </a>
            <span className="text-sm text-muted-foreground">© 2025 SHAED. All rights reserved.</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Simplifying the future of electric mobility
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <h4 className="text-sm font-semibold mb-4">Sources</h4>
          <div className="text-xs text-muted-foreground space-y-1" role="list">
            {sources.map((source) => (
              <div key={source.number} role="listitem">
                [{source.number}] {source.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

