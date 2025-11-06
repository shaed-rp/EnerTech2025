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
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border" role="contentinfo">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <a href="/" aria-label="SHAED Home" className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              <img 
                src="/shaed-logo.png" 
                alt="SHAED" 
                className="h-7 sm:h-8" 
                loading="lazy"
                width="120"
                height="32"
              />
            </a>
            <span className="text-xs sm:text-sm text-muted-foreground">© 2025 SHAED. All rights reserved.</span>
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
            Simplifying the future of commercial mobility
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
          <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Sources</h4>
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

