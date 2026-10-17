import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AboutQualities } from "./AboutQualities";

export function AboutJourney() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="mt-8 rounded-lg border border-navy/10 p-4 sm:mt-10 sm:p-6"
    >
      <div className="grid items-start gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
        <Image
          src="/about/journey.jpg"
          alt="An open notebook and pen on a desk"
          width={1000}
          height={750}
          sizes="(max-width: 767px) 85vw, 420px"
          className="aspect-[5/4] w-full border-4 border-white object-cover shadow-sm"
        />

        <div>
          <h2
            id="journey-heading"
            className="font-serif text-4xl font-semibold leading-none tracking-tight sm:text-5xl"
          >My journey</h2>

          <p className="mt-5 text-sm leading-7 text-ink-soft">Curiosity is at the heart of how I approach technology: how things work, how to make them better, and how to build something meaningful.</p>

          <p className="mt-4 text-sm leading-7 text-ink-soft">Through my projects, I&apos;m growing into a product-minded engineer who cares about people, design, and impact. Every idea I work on brings a new perspective and something new to learn.</p>

          <details className="group mt-4">
            <summary
              className="inline-flex min-h-11 cursor-pointer list-none items-center gap-3 text-xs font-semibold text-blue-deep [&::-webkit-details-marker]:hidden"
            >
              <span className="group-open:hidden">Read my full story</span>
              <span className="hidden group-open:inline">A little less of the story</span>
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-open:rotate-90" />
            </summary>

            <div className="mt-2 space-y-3 border-l-2 border-sky pl-4 text-sm leading-7 text-ink-soft">
              <p>I enjoy the space between an idea and a working product. Understanding the problem, exploring an interface, and building the pieces that make it work are all part of the process.</p>
              <p>My toolkit keeps growing as I learn through practice. I value readable code, clear communication, and being open to a better approach. I want each project to be useful to the people it reaches and a chance to become a more thoughtful builder.</p>
            </div>
          </details>
        </div>
      </div>

      <AboutQualities />
    </section>
  );
}
