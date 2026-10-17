import { ArrowDown } from "lucide-react";

export function WorkHeader({ count }: { count: number }) {
  return (
    <section
      aria-labelledby="work-heading"
      className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12"
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-blue-deep">
        <span>Project index /{String(count).padStart(2, "0")} entries</span>
        <span>Ideas into practice</span>
      </div>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
        <h1
          id="work-heading"
          className="font-serif text-[clamp(5rem,13vw,11rem)] leading-[0.85] tracking-[-0.055em]"
        >
          Things
          <br />
          I&apos;ve
          <span className="italic text-blue-deep">built.</span>
        </h1>
        <div className="max-w-sm pb-2">
          <p className="text-sm leading-7 text-ink-soft">
            A growing collection of useful things. Some out in the world, some
            still taking shape. Each one a chance to turn an idea into something
            real.
          </p>
          <ArrowDown
            aria-hidden="true"
            className="mt-6 size-7 text-blue-deep"
            strokeWidth={1}
          />
        </div>
      </div>
    </section>
  );
}
