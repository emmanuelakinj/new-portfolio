import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Emmanuel Akinjogunla",
  description:
    "Notes on building, learning, and the ideas in between. Emmanuel's blog is coming soon.",
};

export default function BlogPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[70svh] max-w-7xl items-center justify-center px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <section aria-labelledby="blog-heading" className="max-w-2xl text-center">
        <div className="mx-auto mb-8 flex size-16 items-center justify-center rounded-full border border-blue/15 bg-sky/20">
          <PenLine aria-hidden="true" className="size-7 text-blue-deep" strokeWidth={1.3} />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-deep">
          The blog / Coming soon
        </p>
        <h1
          id="blog-heading"
          className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight sm:text-8xl"
        >
          A few thoughts,<br />
          <span className="italic text-blue-deep">still taking shape.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-ink-soft">
          I&apos;ll be sharing what I&apos;m building, what I&apos;m learning,
          and the ideas I pick up along the way. The first post is on its way.
        </p>
        <Link
          href="/projects"
          className="group mt-9 inline-flex min-h-11 items-center gap-3 rounded-full bg-navy px-6 py-3 text-xs text-paper transition-colors hover:bg-blue-deep"
        >
          Explore my work in the meantime
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </main>
  );
}
