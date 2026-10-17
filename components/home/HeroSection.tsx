import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-editorial mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 lg:px-12 lg:pt-14"
    >
      <div className="mb-10 flex items-center justify-between gap-6 border-b border-navy/15 pb-4 text-[10px] uppercase tracking-[0.2em] sm:mb-14">
        <p className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-blue" />
          Product-minded software engineer
        </p>
        <span className="hidden text-ink-soft sm:block">
          A personal collection of work & ideas
        </span>
      </div>
      <div className="relative grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
        <div className="relative z-10 lg:pb-16">
          <h1
            id="hero-heading"
            className="max-w-full font-serif text-[clamp(3rem,11vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-navy sm:text-[5rem] lg:text-[clamp(4.5rem,6.5vw,6rem)]"
          >
            <span className="block">Building</span>
            <span className="block">
              useful things<span className="text-blue">.</span>
            </span>
            <span className="mt-4 block font-normal italic tracking-[-0.035em] text-blue-deep sm:mt-5">
              <span className="block">Growing with</span>
              <span className="block">intention.</span>
            </span>
          </h1>
          <div className="mt-8 grid max-w-xl gap-6 sm:grid-cols-[40px_1fr] lg:mt-10">
            <span
              aria-hidden="true"
              className="hidden pt-1 font-serif text-3xl text-blue sm:block"
            >
              ↳
            </span>
            <div>
              <p className="max-w-sm text-sm leading-7 text-ink-soft">
                I&apos;m Emmanuel, a software engineer who enjoys turning ideas
                into thoughtful, practical digital experiences. Curious about
                the problem. Intentional about the details.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-6">
                <Link
                  href="#selected-work"
                  className="inline-flex items-center gap-4 bg-navy px-5 py-3.5 text-xs text-paper transition-colors hover:bg-blue-deep"
                >
                  Explore my work{" "}
                </Link>
                <a
                  href="/resume.pdf"
                  download="Emmanuel-Akinjogunla-Resume.pdf"
                  className="inline-flex items-center gap-2 border-b border-navy/30 py-2 text-xs"
                >
                  Download Resume{" "}
                  <Download aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-md self-start lg:mt-12 lg:max-w-none">
          <div className="overflow-hidden rounded-2xl bg-pale">
            <Image
              src="/me.png"
              alt="Emmanuel Abiodun Akinjogunla"
              width={1592}
              height={1592}
              unoptimized
              preload
              sizes="(max-width: 1023px) 90vw, 38vw"
              className="block h-auto w-full object-contain"
            />
          </div>
          <figcaption className="mt-5 flex items-center justify-between border-t border-navy/20 pt-3 text-[10px] uppercase tracking-[0.15em]">
            <span>Emmanuel Akinjogunla</span>
            <span className="text-ink-soft">Engineer. Always learning.</span>
          </figcaption>
        </figure>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-navy/15 py-5 text-[10px] uppercase tracking-[0.18em] text-ink-soft lg:mt-2">
        <span>Engineering × Product × People</span>
        <a
          href="#selected-work"
          className="inline-flex items-center gap-3 text-navy"
        >
          A few things I&apos;ve been building{" "}
          <ArrowDown aria-hidden="true" className="h-3 w-3" />
        </a>
      </div>
    </section>
  );
}
