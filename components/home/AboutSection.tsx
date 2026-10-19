import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-12">
      <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-paper p-8 sm:min-h-80">
        <div className="absolute left-8 top-8 h-20 w-20 rotate-[-8deg] bg-sky/60" />
        <div className="relative max-w-sm border border-navy/15 bg-paper p-8 shadow-sm rotate-[-4deg]">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-blue">
            Notes to self
          </p>
          <p className="font-serif text-5xl leading-[1.05]">
            Build.
            <br />
            Explore.
            <br />
            Learn.
            <br />
            Repeat.
          </p>
          <p className="mt-6 text-xs text-ink-soft">
            A work in progress, always.
          </p>
        </div>
      </div>

      <div>
        <h2 className="max-w-lg font-serif text-5xl tracking-tight sm:text-6xl">
          More than just code.
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-ink-soft sm:text-base">
          I&apos;m interested in the ideas, experiences, and people that shape
          how we see the world. Outside software, I enjoy exploring creativity,
          learning new things, and finding inspiration in everyday life.
        </p>

        <Link
          href="/about"
          className="group mt-7 inline-flex items-center gap-2 border-b border-navy/20 pb-2 text-sm font-medium"
        >
          Get to know me
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
