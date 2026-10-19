import { AboutPhoto } from "./AboutPhoto";
import journeyImage from "@/public/blog.jpg";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export function AboutNextSteps() {
  return (
    <section className="bg-pale">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-16">
        <div>
          <SectionLabel>What&apos;s next</SectionLabel>

          <p className="max-w-xl text-[15px] leading-7 text-ink-soft">
            I enjoy building things, but I&apos;m also curious about what
            happens beyond the code — how ideas become products, how businesses
            grow, and how technology can solve real problems. I want to keep
            building projects, explore entrepreneurship, and learn more about
            turning ideas into things people actually use. I&apos;m still at the
            beginning of that journey, and there&apos;s a lot I have yet to
            figure out. That&apos;s part of what makes it interesting.
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

        <AboutPhoto
          src={journeyImage}
          alt="Emmanuel smiling while seated outdoors"
          caption="Same person. Bigger dreams."
            variant="wide"
          sizes="(max-width: 1023px) 85vw, 550px"
        />
      </div>
    </section>
  );
}
