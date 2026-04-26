const items = [
  { n: "1", t: "Overview" },
  { n: "2", t: "Background and motivation" },
  { n: "3", t: "System architecture", sub: ["3.1 Three-tier design", "3.2 Architectural diagram"] },
  { n: "4", t: "Technology stack" },
  { n: "5", t: "Detection engine", sub: ["5.1 Aggressive fusion", "5.2 Scoring layers", "5.3 Code reference"] },
  { n: "6", t: "SOC dashboard" },
  { n: "7", t: "Browser extension" },
  { n: "8", t: "Living retraining dataset" },
  { n: "9", t: "Performance evaluation" },
  { n: "10", t: "Future work" },
  { n: "11", t: "See also" },
  { n: "12", t: "References" },
];

const TableOfContents = () => (
  <nav className="blog-toc my-6 not-prose">
    <div className="blog-toc-title">Contents</div>
    <ol className="text-sm space-y-1 list-none">
      {items.map((i) => (
        <li key={i.n}>
          <a href={`#sec-${i.n}`} className="blog-link">
            <span className="mr-1">{i.n}</span>{i.t}
          </a>
          {i.sub && (
            <ol className="pl-5 mt-1 space-y-0.5 list-none">
              {i.sub.map((s) => (
                <li key={s}>
                  <a href="#" className="blog-link">{s}</a>
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default TableOfContents;
