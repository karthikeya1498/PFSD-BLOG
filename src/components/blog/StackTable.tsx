const stack = [
  { layer: "Frontend", tech: "HTML5, CSS3, Vanilla JavaScript", purpose: "Email analysis UI and dashboard interactions." },
  { layer: "Backend", tech: "Flask (Python), asyncio, httpx", purpose: "API routing, phishing scoring, ML orchestration, LLM calls." },
  { layer: "Database", tech: "MongoDB (PyMongo)", purpose: "User authentication, scan history, retrain logs, model metadata." },
  { layer: "Machine Learning", tech: "scikit-learn, pandas, numpy", purpose: "Logistic Regression, Random Forest, Gradient Boosting, calibrated Linear SVM." },
  { layer: "LLM Assistance", tech: "Ollama (phi model, local inference)", purpose: "Generates human-readable explanations for flagged emails." },
  { layer: "Browser Integration", tech: "Chrome Extension (Manifest V3)", purpose: "Real-time phishing detection inside Gmail and Outlook." },
  { layer: "Asynchronous I/O", tech: "asyncio + httpx", purpose: "Non-blocking ML inference and parallel intelligence calls." },
  { layer: "Logging & Telemetry", tech: "Python logging + MongoDB sinks", purpose: "Streams every verdict to the SOC dashboard and retrain corpus." },
];

const StackTable = () => (
  <table className="blog-table">
    <thead>
      <tr>
        <th className="w-[22%]">Layer</th>
        <th className="w-[32%]">Technology</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      {stack.map((s) => (
        <tr key={s.layer}>
          <td className="font-semibold">{s.layer}</td>
          <td className="mono text-[13px]">{s.tech}</td>
          <td>{s.purpose}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default StackTable;
