export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3">
      <span className="font-mono text-xs text-blue-deep">{number}</span>
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
