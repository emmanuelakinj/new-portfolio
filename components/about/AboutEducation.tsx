import { AboutPhoto } from "./AboutPhoto";
import graduationImage from "@/public/grad.jpg";
import { GraduationCap } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export function AboutEducation() {
  return (
  <section className="bg-pale">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.1fr_0.65fr] lg:gap-10 lg:px-12 lg:py-20">
      <AboutPhoto
        src={graduationImage}
        alt="Emmanuel adjusting his tie outside a university building"
        caption="A milestone, not the finish line."
        variant="milestone"
        sizes="(max-width: 639px) 85vw, 340px"
      />

      <div>
        <SectionLabel>Education</SectionLabel>

        <div className="space-y-4 text-[15px] leading-7 text-ink-soft">
          <p>
            That interest led me to study Computer Science, and I graduated
            with a{" "}
            <strong className="font-semibold text-navy">
              First Class degree.
            </strong>
          </p>

          <p>
            It was an important milestone, but it wasn&apos;t the end. My
            learning didn&apos;t stop at graduation. I&apos;ve kept showing
            up, exploring new technologies, and building on what I know.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper/70 p-5">
        <GraduationCap
          size={34}
          strokeWidth={1.4}
          className="mb-4 text-blue-deep"
        />
        <p className="text-sm text-ink-soft">B.Sc. Computer Science</p>
        <p className="mt-1 font-semibold text-navy">First Class</p>
        <p className="mt-4 text-xs leading-5 text-ink-soft">
          A milestone I&apos;m proud of, and a reminder to keep learning.
        </p>
      </div>
    </div>
  </section>
  );
}
