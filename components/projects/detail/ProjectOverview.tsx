import { CalendarDays, Layers, UserRound } from "lucide-react";
import { projectStatusLabels } from "@/data/projects";
import type { Project } from "@/data/projects";

export function ProjectOverview({ project }: { project: Project }) {
  const study = project.caseStudy;
  const facts = [
    { label: "My role", value: study?.role, icon: UserRound },
    { label: "Timeline", value: study?.timeline, icon: CalendarDays },
    { label: "Type", value: study?.type, icon: Layers },
    {
      label: "Status",
      value: projectStatusLabels[project.status],
      icon: Layers,
    },
  ].filter((fact) => fact.value);

  return (
    <section
      aria-labelledby="overview-heading"
      className="grid gap-8 border-b border-navy/10 py-8 md:grid-cols-[0.65fr_1.6fr] md:gap-10"
    >
      <div className="md:border-r md:border-navy/10 md:pr-7">
        <h2
          id="overview-heading"
          className="font-serif text-2xl font-semibold"
        >
          Project overview
        </h2>

        <dl className="mt-5 space-y-5">
          {facts.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex gap-3">
              <Icon
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-blue-deep"
                strokeWidth={1.5}
              />

              <div>
                <dt className="text-xs font-semibold text-blue-deep">
                  {label}
                </dt>

                <dd className="mt-1 text-xs leading-6 text-ink-soft">
                  {value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="font-serif text-2xl font-semibold">The problem</h2>

          <p className="mt-2 max-w-xl text-sm leading-7 text-ink-soft">
            {study?.problem ?? project.description}
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold">My approach</h2>

          <p className="mt-2 max-w-xl text-sm leading-7 text-ink-soft">
            {study?.approach ??
              "More on the thinking and implementation behind this project will be shared as the case study develops."}
          </p>
        </div>
      </div>
    </section>
  );
}
