export function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3">
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
