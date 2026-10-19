import Image from "next/image";
import beginningImage from "@/public/beginning.jpeg";
import { SectionLabel } from "./SectionLabel";

export function AboutBeginning() {
  return (
  <section className="border-y border-line bg-paper/70">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-20">
      <div>
        <SectionLabel number="01">The beginning</SectionLabel>

        <div className="max-w-xl space-y-4 text-[15px] leading-7 text-ink-soft">
          <p>
            I didn&apos;t always see myself becoming a software engineer. At
            the time, I wanted to study medicine.
          </p>

          <p>
            While waiting for admission, I started exploring tech. What
            began as something to spend my time on gradually became
            something I was genuinely interested in. I found myself wanting
            to understand how things worked and how I could use what I was
            learning to build things of my own.
          </p>

          <p>
            That interest eventually led me to study Computer Science, and
            I&apos;ve been finding my way through software development ever
            since.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-pale">
        <Image
          src={beginningImage}
          alt="Emmanuel standing outdoors"
          className="block h-120 w-full"
          // sizes="(max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 20vw, 400px"
          placeholder="blur"
        />
      </div>
    </div>
  </section>
  );
}
