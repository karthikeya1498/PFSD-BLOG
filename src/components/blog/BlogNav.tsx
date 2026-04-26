import { Github } from "lucide-react";
import logo from "@/assets/trustshield-logo.png";

const BlogNav = () => {
  return (
    <header className="border-b border-border bg-card">
      {/* Top bar */}
      <div className="border-b border-border bg-secondary/60">
        <div className="container mx-auto flex items-center justify-between py-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Not logged in</span>
            <a href="#" className="blog-link hover:underline">Contributions</a>
          </div>
                  </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex items-center justify-between py-3 gap-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="TrustShield AI logo" className="h-10 w-10" />
          <div className="leading-tight">
            <div className="serif font-bold text-2xl text-foreground">TrustShield<span className="text-primary">.AI</span></div>
            <div className="text-[11px] italic text-muted-foreground">The Free Phishing Intelligence Platform</div>
          </div>
        </a>


        <a
          href="https://github.com/Tejus468/pfsd_project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-sm bg-secondary hover:bg-muted text-sm text-foreground"
        >
          <Github className="h-4 w-4" />
          <span className="hidden sm:inline">Source</span>
        </a>
      </div>

      {/* Article tabs */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto flex items-center gap-1 text-sm">
          {["Blog", "Read", "View history"].map((t, i) => (
            <a
              key={t}
              href="#"
              className={`px-4 py-2 border-x border-t border-border -mb-px ${
                i === 0 || i === 2
                  ? "bg-background border-b-background text-foreground font-medium"
                  : "bg-secondary/50 border-b-border text-primary hover:bg-secondary"
              }`}
            >
              {t}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default BlogNav;
