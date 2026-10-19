import Image from "next/image";
import journeyImage from "@/public/blog.jpg";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export function AboutNextSteps() {
  return (
  <section className="bg-pale">
    <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-16">
      <div>
        <SectionLabel number="04">What&apos;s next</SectionLabel>

        <p className="max-w-xl text-[15px] leading-7 text-ink-soft">
          I&apos;m still figuring things out, learning new technologies, and
          working towards the kind of engineer I want to become.
          There&apos;s a lot more I want to explore — in software and
          outside it.
        </p>

        <p className="mt-4 text-[15px] leading-7 text-ink-soft">
          For now, I&apos;m happy to keep building, learning, and growing.
        </p>

        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-deep hover:underline"
        >
          See what I&apos;m working on
          <ArrowDownRight size={17} />
        </Link>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-sky/20">
        <Image
          src={journeyImage}
          alt="Emmanuel smiling while seated outdoors"
          className="block aspect-[4/3] h-auto w-full object-cover object-top sm:aspect-[16/9]"
          sizes="(max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 48vw, 616px"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        <p className="absolute bottom-5 right-5 max-w-[160px] font-serif text-lg italic leading-6 text-white sm:bottom-7 sm:right-7 sm:text-xl">
          Same person.
          <br />
          Bigger dreams.
        </p>
      </div>
    </div>
  </section>
  );
}
