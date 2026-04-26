interface Props {
  number: string;
  label: string;
  title: React.ReactNode;
}

const SectionHeader = ({ number, label, title }: Props) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-4">
      <span className="mono text-xs text-primary tracking-[0.3em]">{number}</span>
      <span className="h-px flex-1 bg-border max-w-[80px]" />
      <span className="section-label">{label}</span>
    </div>
    <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
