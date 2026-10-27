import Link from "next/link";
import { ArrowRight, ArrowUpRight, NotebookPen } from "lucide-react";
import { CONTACT_EMAIL } from "@/data/constant";

export function BlogComingSoon() {
  return (
  <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
    <div className="relative overflow-hidden rounded-3xl bg-pale px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
      <div className="relative z-10 grid items-center gap-6 md:grid-cols-[auto_1fr_auto] md:gap-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-paper/70 text-blue-deep">
          <NotebookPen size={28} strokeWidth={1.4} />
        </div>

        <div className="max-w-xl">
          <p className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Be the first to know
          </p>

          <p className="mt-3 text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">
            I’ll be sharing my first post soon. In the meantime, feel free
            to explore my projects or get in touch.
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-deep transition hover:gap-3"
            >
              Explore my projects
              <ArrowRight size={16} />
            </Link>

            <Link
              href={CONTACT_EMAIL}
              className="inline-flex items-center gap-2 text-sm text-ink-soft transition hover:text-blue-deep"
            >
              Say hello
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="hidden -rotate-6 font-serif text-lg italic leading-7 text-blue-deep lg:block">
          Good things
          <br />
          take a little time.
          <span className="mt-2 block h-px w-20 rotate-[-5deg] bg-blue-deep" />
        </div>
      </div>
    </div>
  </section>
  );
}
