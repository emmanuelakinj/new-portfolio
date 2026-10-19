import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found — Emmanuel Akinjogunla",
  description: "This page could not be found. Explore Emmanuel's work or head back home.",
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="mx-auto grid min-h-[70svh] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12"
      aria-labelledby="not-found-heading"
    >
      <div aria-hidden="true" className="relative border-b border-line pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
        <p className="font-serif text-[clamp(7rem,25vw,18rem)] font-medium leading-none tracking-[-0.08em] text-blue-deep">
          404<span className="text-blue">.</span>
        </p>
        <p className="mt-4 font-serif text-xl italic text-ink-soft">
          A little off the beaten path.
        </p>
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-blue-deep">
          Page not found
        </p>
        <h1
          id="not-found-heading"
          className="max-w-lg font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          This page took a different turn.
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-ink-soft">
          The link may be out of date, or the page may have moved. There&apos;s
          still plenty to explore — let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-3 rounded-full bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-blue-deep"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back home
          </Link>
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 border-b border-navy/20 py-2 text-sm font-medium text-blue-deep transition-colors hover:text-navy"
          >
            Explore my work
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
