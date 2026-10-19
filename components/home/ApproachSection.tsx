import Link from "next/link";
import { ArrowRight, Code2, Compass, Sparkles, UserRound } from "lucide-react";

const principles = [
  {
    title: "Product thinking",
    description:
      "Understanding the problem and the people behind it before choosing a solution.",
    icon: Compass,
  },
  {
    title: "Clean code",
    description:
      "Building maintainable, reliable software with clarity and intention.",
    icon: Code2,
  },
  {
    title: "Collaboration",
    description:
      "Turning ideas into useful experiences through communication and shared thinking.",
    icon: UserRound,
  },
  {
    title: "Continuous growth",
    description:
      "Staying curious, learning through practice, and getting better with every project.",
    icon: Sparkles,
  },
];

export function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-pale">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-12">
        <div>
          <h2 className="max-w-md font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl">
            Thoughtful engineering for real people.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-ink-soft sm:text-base">
            Curiosity and empathy come first. I aim to solve meaningful problems
            through clean code, clear communication, and a willingness to keep
            learning.
          </p>
          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-medium"
          >
            Learn more about my approach
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-9">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                className="border-t border-navy/15 pt-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-blue" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
