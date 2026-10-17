import { getVisibleProjects } from "@/data/projects";
import { technologies } from "@/data/technologies";

export function AboutStats() {
  const publicProjectCount = getVisibleProjects().length;
  const stats = [
    { value: String(technologies.length), label: "Technologies in my toolkit" },
    { value: String(publicProjectCount), label: "Projects & counting" },
    { value: "∞", label: "Curiosity level" },
  ];

  return (
    <section
      aria-label="A few things about me"
      className="mt-10 grid grid-cols-3 rounded-lg border border-navy/15 py-5 sm:mt-12 sm:py-6"
    >
      {stats.map((stat) => <div
        key={stat.label}
        className="px-2 text-center [&:not(:last-child)]:border-r [&:not(:last-child)]:border-navy/15 sm:px-5"
      >
        <p className="font-serif text-3xl font-semibold leading-none text-blue-deep sm:text-4xl">
          {stat.value}
        </p>
        <p className="mt-2 text-[10px] font-medium leading-4 text-ink-soft sm:text-xs">
          {stat.label}
        </p>
      </div>)}
    </section>
  );
}
