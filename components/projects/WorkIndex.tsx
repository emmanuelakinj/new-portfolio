"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import {
  projectStatusLabels,
  type Project,
  type ProjectStatus,
} from "@/data/projects";
import { getTechnology } from "@/data/technologies";

export function WorkIndex({ projects }: { projects: readonly Project[] }) {
  const [filter, setFilter] = useState<ProjectStatus | "all">("all");
  const statuses = [...new Set(projects.map((project) => project.status))];
  const visible = projects.filter(
    (project) => filter === "all" || project.status === filter,
  );

  return (
    <section
      aria-label="Project collection"
      className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"
    >
      <div className="mb-10 flex flex-wrap items-center justify-between gap-5 border-y border-navy/15 py-4">
        <div
          aria-label="Filter projects by status"
          className="flex flex-wrap gap-2"
        >
          {(["all", ...statuses] as const).map((status) => (
            <button
              key={status}
              type="button"
              aria-pressed={filter === status}
              onClick={() => setFilter(status)}
              className={`min-h-11 rounded-full border px-4 text-xs transition-colors ${filter === status ? "border-navy bg-navy text-paper" : "border-navy/15 hover:border-blue-deep hover:bg-pale"}`}
            >
              {status === "all"
                ? `All work (${projects.length})`
                : projectStatusLabels[status]}
            </button>
          ))}
        </div>
        <p
          role="status"
          className="font-mono text-[10px] uppercase tracking-widest text-ink-soft"
        >
          {visible.length} {visible.length === 1 ? "project" : "projects"} on
          view
        </p>
      </div>
      <div className="grid items-start gap-x-8 gap-y-14 lg:grid-cols-2">
        {visible.map((project) => {
          const stack = project.technologies
            .map(getTechnology)
            .filter((technology) => technology !== undefined);
          const showImage = project.visibility === "public" && project.image;
          return (
            <article
              id={project.id}
              key={project.id}
              aria-labelledby={`work-${project.id}`}
              className="group min-w-0 scroll-mt-28"
            >
              <div
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-navy/10 p-6 sm:p-10 ${project.showcaseTone === "cool" ? "bg-[#dceaf0]" : "bg-[#eeede4]"}`}
              >
                <span className="absolute left-5 top-4 font-mono text-[10px] text-ink-soft">
                  /{String(projects.indexOf(project) + 1).padStart(2, "0")}
                </span>
                <span className="absolute right-5 top-4 text-[9px] uppercase tracking-widest text-ink-soft">
                  {projectStatusLabels[project.status]}
                </span>
                {showImage ? (
                  <div className="mt-5 w-full overflow-hidden rounded-md border border-navy/15 bg-white shadow-xl shadow-navy/15 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1deg]">
                    <div
                      aria-hidden="true"
                      className="flex gap-1 border-b border-navy/10 bg-paper px-3 py-2"
                    >
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className="size-1.5 rounded-full bg-navy/20"
                        />
                      ))}
                    </div>
                    <Image
                      src={project.image!}
                      alt={`${project.title} website preview`}
                      width={2880}
                      height={1800}
                      sizes="(max-width: 1023px) 85vw, 43vw"
                      className="aspect-[16/10] w-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <span
                      aria-hidden="true"
                      className="mb-4 inline-flex size-16 items-center justify-center rounded-full border border-navy/20 font-serif text-4xl italic text-blue-deep"
                    >
                      {project.title.charAt(0)}
                    </span>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-blue-deep">
                      {project.preview?.placeholder?.eyebrow ??
                        "Project preview"}
                    </p>
                    <p className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                      {project.preview?.placeholder?.heading ?? project.title}
                    </p>
                    <p className="mx-auto mt-4 max-w-64 text-xs leading-6 text-ink-soft">
                      {project.preview?.placeholder?.description ??
                        "More to share when it's ready."}
                    </p>
                  </div>
                )}
              </div>
              <div className="pt-6">
                <h2
                  id={`work-${project.id}`}
                  className="font-serif text-4xl tracking-tight sm:text-5xl"
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="transition-colors hover:text-blue-deep"
                  >
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink-soft">
                  {project.summary}
                </p>
                <ul
                  aria-label={`${project.title} technologies`}
                  className="mt-5 flex flex-wrap gap-x-4 gap-y-2"
                >
                  {stack.map((technology) => (
                    <li
                      key={technology.id}
                      className="flex items-center gap-1.5 text-[10px] text-ink-soft"
                    >
                      <Image
                        src={technology.logo}
                        alt=""
                        width={14}
                        height={14}
                        className="size-3.5 object-contain"
                      />
                      {technology.name}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-4 inline-flex min-h-11 items-center gap-3 text-xs font-semibold text-blue-deep"
                >
                  Explore project{" "}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
                <details className="group/details mt-6 border-y border-navy/15">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between text-xs [&::-webkit-details-marker]:hidden">
                    Project notes{" "}
                    <Plus
                      aria-hidden="true"
                      className="size-4 transition-transform group-open/details:rotate-45"
                    />
                  </summary>
                  <p className="pb-5 text-sm leading-7 text-ink-soft">
                    {project.description}
                  </p>
                </details>
                {project.visibility === "public" && project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-3 text-xs"
                  >
                    Visit website{" "}
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
      {!visible.length && (
        <p className="py-12 text-sm text-ink-soft">More work is on the way.</p>
      )}
    </section>
  );
}
