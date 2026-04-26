interface Props {
  caption: string;
  description?: string;
  src: string;
  alt: string;
  badge?: string;
  figureNumber?: string;
}

const CodeBlock = ({ caption, description, src, alt, badge = "python", figureNumber }: Props) => (
  <figure className="blog-figure my-6">
    <div className="code-panel">
      <div className="code-panel-header">
        <span className="mono">{caption}</span>
        <span className="px-2 py-0.5 rounded-sm bg-background border border-border text-[10px] uppercase tracking-wider text-primary">
          {badge}
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
    </div>
    <figcaption>
      {figureNumber && <strong>{figureNumber}. </strong>}
      {description}
    </figcaption>
  </figure>
);

export default CodeBlock;
