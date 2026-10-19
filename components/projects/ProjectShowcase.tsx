import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getTechnology } from "@/data/technologies";
import { projectStatusLabels, type Project } from "@/data/projects";
import { LaptopPreview } from "@/components/projects/LaptopPreview";

const showcaseTones = {
  warm: "bg-[#eeede4]",
  cool: "bg-[#e9f0f0]",
};

export function ProjectShowcase({ projects }: { projects: readonly Project[]; }) {
  return (
    <section
      id="selected-work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-y border-navy/10 bg-paper"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mb-12 flex items-end justify-between gap-5 sm:mb-20">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-deep">
              A few things I&apos;ve been building
            </p>
            <h2
              id="work-heading"
              className="font-serif text-5xl leading-none tracking-tight sm:text-6xl"
            >
              Selected work<span className="text-blue">.</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group hidden items-center gap-2 pb-1 text-xs sm:inline-flex"
          >
            All projects{" "}
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-y-16">
          {projects.map((project) => {
            const projectTechnologies = project.technologies
              .map(getTechnology)
              .filter((technology) => technology !== undefined);
            return (
              <article
                key={project.id}
                aria-labelledby={`project-${project.id}`}
                className={`relative grid gap-10 rounded-lg border border-navy/8 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12 lg:p-12 ${showcaseTones[project.showcaseTone ?? "warm"]}`}
              >
                <div>
                  <div className="mb-7 flex items-center gap-4">
                    <p className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.15em] text-ink-soft">
                      <span className="size-1.5 rounded-full bg-blue-deep" />
                      {projectStatusLabels[project.status]}
                    </p>
                  </div>
                  <h3
                    id={`project-${project.id}`}
                    className="font-serif text-4xl leading-none tracking-[-0.035em] sm:text-5xl xl:text-6xl"
                  >
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-ink-soft">
                    {project.summary}
                  </p>
                  {project.visibility === "limited" && (
                    <p className="mt-2 max-w-sm text-xs leading-6 text-ink-soft">
                      More details will be shared when the project is ready for
                      public presentation.
                    </p>
                  )}
                  <div className="mt-7 max-w-sm">
                    <p
                      id={`stack-${project.id}`}
                      className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-soft"
                    >
                      Built with
                    </p>
                    {projectTechnologies.length ? (
                      <ul
                        aria-labelledby={`stack-${project.id}`}
                        className="flex flex-wrap gap-2"
                      >
                        {projectTechnologies.map((technology) => (
                          <li
                            key={technology.id}
                            className="rounded-md border border-navy/10 bg-paper/75 px-3 py-1.5 text-[11px] font-medium leading-5 text-navy"
                          >
                            {technology.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-ink-soft">
                        Technologies to be confirmed
                      </p>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="group mt-8 inline-flex items-center gap-5 rounded-full bg-navy px-5 py-3 text-xs text-paper transition-colors hover:bg-blue-deep"
                  >
                    Explore project{" "}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
                <div className="min-w-0 lg:py-6">
                  <LaptopPreview project={project} />
                </div>
              </article>
            );
          })}
        </div>
        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 text-xs sm:hidden"
        >
          View all projects <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
