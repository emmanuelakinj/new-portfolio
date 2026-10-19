import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate pb-8 pt-7 sm:pt-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 inset-y-2 -z-10 bg-sky/30 [clip-path:polygon(0_0,100%_5%,100%_100%,0_95%)] sm:inset-y-3 sm:[clip-path:polygon(0_0,100%_12%,100%_100%,0_88%)]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-navy/15 pb-5 text-[10px] uppercase tracking-[0.18em]">
          <p className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-blue"
            />
            A personal collection of work & ideas
          </p>
          <span className="text-ink-soft">Engineering with intention</span>
        </div>

        <div className="grid items-center gap-12 py-12 sm:gap-16 sm:py-16 lg:grid-cols-[0.85fr_1.25fr] lg:gap-20 lg:py-20">
          <figure className="relative order-2 mx-auto w-full max-w-sm lg:order-1 lg:max-w-none">
            <div className="overflow-hidden rounded-tr-[clamp(48px,8vw,100px)] border-b-4 border-blue-deep bg-pale">
              <Image
                src="/me-1.JPG"
                width={1839}
                height={2488}
                alt="Emmanuel Abiodun Akinjogunla"
                preload
                sizes="(max-width: 1023px) min(90vw, 384px), 35vw"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-navy/20 pt-4">
              <span className="text-xs font-medium text-navy">
                Emmanuel Akinjogunla
              </span>
              <span className="text-[9px] uppercase tracking-[0.14em] text-ink-soft">
                Engineer / Always learning
              </span>
            </figcaption>
          </figure>

          <div className="order-1 lg:order-2">
            <p className="mb-5 flex items-center gap-3 text-xs text-blue-deep sm:mb-7">
              <span aria-hidden="true" className="h-px w-8 bg-blue/50" />
              Hi, I&apos;m Emmanuel. A software engineer.
            </p>
            <h1
              id="hero-heading"
              className="max-w-2xl font-serif text-[clamp(3.25rem,8vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-navy lg:text-[clamp(4rem,5.8vw,5.25rem)]"
            >
              I build software
              <br className="hidden sm:block" /> that makes
              <br className="hidden sm:block" />{" "}
              <span className="font-normal italic text-blue-deep">
                ideas useful.
              </span>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-ink-soft sm:mt-8 sm:text-[15px]">
              Software Engineer passionate about turning ideas into functional,
              intuitive digital products. Focused on writing clean code, solving
              meaningful problems, and building experiences that work as well as
              they look.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-9">
              <Link
                href="#selected-work"
                className="group inline-flex items-center gap-5 rounded-sm bg-navy px-6 py-4 text-xs font-medium text-paper transition-colors hover:bg-blue-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              >
                Explore my work
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                />
              </Link>
              <a
                href="/resume.pdf"
                download="Emmanuel-Akinjogunla-Resume.pdf"
                className="inline-flex items-center gap-3 border-b border-navy/25 py-2 text-xs transition-colors hover:text-blue-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              >
                Download Resume
                <Download aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-navy/15 pt-5 text-[10px] uppercase tracking-[0.16em] text-ink-soft">
          <span>Thoughtful code. Practical products.</span>
          <a
            href="#selected-work"
            className="inline-flex items-center gap-3 py-2 text-navy transition-colors hover:text-blue-deep"
          >
            A few things I&apos;ve been building
            <ArrowDown aria-hidden="true" className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
