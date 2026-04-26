const Hero = () => {
  return (
    <section id="top" className="container mx-auto pt-6">
      <div className="text-xs text-muted-foreground mb-2">
        From TrustShield Blog, the free phishing intelligence platform
      </div>
      <h1 className="wiki-title serif">
        TrustShield AI: Hybrid ML-Based Phishing Detection using <span className="text-primary">Flask</span>, <span className="text-primary">scikit-learn</span> &amp; <span className="text-primary">MongoDB</span>
      </h1>
      <div className="text-sm text-muted-foreground italic mb-4">
        A real-time, multi-layered AI email security framework — combining classical machine
        learning, URL intelligence, behavioural heuristics and a locally hosted LLM, with all
        telemetry persisted in MongoDB for continuous retraining.
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {["MongoDB", "Flask", "Python", "scikit-learn", "Ollama LLM", "Chrome MV3", "Phishing", "AI Security"].map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-sm bg-secondary border border-border text-foreground hover:bg-muted cursor-default"
          >
            #{t}
          </span>
        ))}
      </div>

      <div className="mb-6">
        <a
          href="https://github.com/Tejus468/pfsd_project"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Source Code
        </a>
      </div>

      <div className="hatnote">
        This blog is about the phishing-detection orchestrator. For the underlying machine learning
        pipeline, see <a href="#sec-5" className="blog-link">§ Detection engine</a>. For the
        browser-side component, see <a href="#sec-7" className="blog-link">§ Browser extension</a>.
        For the MongoDB-backed continuous learning pipeline, see <a href="#sec-8" className="blog-link">§ Living retraining dataset</a>.
      </div>
    </section>
  );
};

export default Hero;
