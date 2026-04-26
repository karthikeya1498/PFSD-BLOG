const layers = [
  { name: "Machine Learning Prediction", weight: "0.30", desc: "Calibrated probability output from the active classifier (Logistic Regression / Random Forest / Linear SVM) over a TF-IDF vectorised email." },
  { name: "URL Intelligence", weight: "0.30", desc: "Domain reputation, risky top-level domains (TLDs), IP-encoded URLs, URL shortener detection, and credential-keyword heuristics." },
  { name: "Rule Engine", weight: "0.25", desc: "Pattern matchers for urgency cues, threats, credential prompts, gift-card scams, job-offer scams and reward-bait language." },
  { name: "Emotional / Linguistic Analysis", weight: "0.15", desc: "Detects fear triggers, manipulative phrasing and urgency framing using lexicon-based scoring." },
  { name: "Behavioural Anomalies", weight: "0.05", desc: "Compares the message against historical sender baselines and tenant-level traffic patterns." },
  { name: "Attachment Intelligence", weight: "0.10", desc: "Inspects MIME types, double extensions, executable payloads and known malicious file signatures." },
];

const FusionLayers = () => (
  <table className="blog-table">
    <thead>
      <tr>
        <th className="w-[28%]">Intelligence layer</th>
        <th className="w-[10%] text-center">Weight</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {layers.map((l) => (
        <tr key={l.name}>
          <td className="font-semibold">{l.name}</td>
          <td className="text-center mono">{l.weight}</td>
          <td>{l.desc}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default FusionLayers;
