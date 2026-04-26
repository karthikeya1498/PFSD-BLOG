import heroImg from "@/assets/hero-shield.jpg";

const rows: [string, React.ReactNode][] = [
  ["Type", "AI-driven email security framework"],
  ["Domain", "Cybersecurity · Phishing detection"],
  ["Architecture", "Three-tier (UI · Backend · MongoDB)"],
  ["Backend", "Flask (Python) · asyncio"],
  ["Database", <span key="db" className="font-semibold text-primary">MongoDB (PyMongo)</span>],
  ["ML library", "scikit-learn · pandas · numpy"],
  ["Models", "LogReg · RF · GBM · Linear SVM"],
  ["LLM assist", "Ollama (phi model, local)"],
  ["Extension", "Chrome MV3"],
  ["Detection latency", "< 200 ms"],
  ["Detection accuracy", "≈ 95–98%"],
  ["Author", "Karthikeya & contributors"],
  ["Source", <a key="src" href="https://github.com/Tejus468/pfsd_project" className="blog-link">github.com/Tejus468</a>],
  ["Status", <span key="st" className="font-semibold text-accent">Active</span>],
];

const Infobox = () => (
  <aside className="infobox w-full md:w-[300px] md:float-right md:ml-6 md:mb-4 mb-6">
    <div className="infobox-title">TrustShield AI</div>
    <div className="p-2">
      <img
        src={heroImg}
        alt="TrustShield AI conceptual shield"
        className="w-full h-auto rounded-sm border border-border"
      />
      <div className="text-xs text-muted-foreground text-center mt-1.5 italic px-1">
        Conceptual rendering of the TrustShield AI defensive shield
      </div>
    </div>
    <div className="infobox-title border-t" style={{ borderColor: "hsl(var(--infobox-border))" }}>
      Project information
    </div>
    {rows.map(([k, v]) => (
      <div key={k} className="infobox-row">
        <div className="label">{k}</div>
        <div className="value">{v}</div>
      </div>
    ))}
  </aside>
);

export default Infobox;
