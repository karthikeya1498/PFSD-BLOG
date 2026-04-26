const stats = [
  { value: "98%", label: "Spam detection rate" },
  { value: "95%", label: "Spear-phishing caught" },
  { value: "<200ms", label: "Avg. verdict latency" },
  { value: "6", label: "Intelligence layers fused" },
];

const StatStrip = () => (
  <section className="border-b border-border bg-secondary/30">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
      {stats.map((s) => (
        <div key={s.label} className="bg-background py-8 px-6 text-center">
          <div className="font-display text-4xl md:text-5xl font-bold text-gradient">{s.value}</div>
          <div className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatStrip;
