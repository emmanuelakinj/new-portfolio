import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projectStatusLabels } from "@/data/projects";
import { getProjectMedia } from "./project-media";
import type { Project } from "@/data/projects";

export function ProjectHero({ project }: { project: Project }) {
  const study = project.caseStudy;
  const { cover, screenshot } = getProjectMedia(project);

  return (
    <>
      <Link
        href="/projects"
        className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-blue-deep"
      >
        <ArrowLeft aria-hidden="true" className="size-3.5" />
        Back to projects
      </Link>

      {cover && (
        <figure className="mb-8 overflow-hidden rounded-lg border border-navy/10 bg-pale">
          <Image
            src={cover}
            alt={study?.coverAlt ?? `${project.title} website preview`}
            width={1600}
            height={1000}
            preload
            sizes="(max-width: 1119px) 95vw, 1024px"
            className={`w-full ${screenshot && cover === screenshot ? "h-auto" : "aspect-[4/3] object-cover sm:aspect-[16/9]"}`}
          />

          {project.visibility === "limited" && (
            <figcaption className="px-4 py-3 text-[10px] leading-5 text-ink-soft">
              Inspiration image · Product screenshots will be shared when
              ready.
            </figcaption>
          )}
        </figure>
      )}

      <section
        aria-labelledby="project-heading"
        className="border-b border-navy/10 pb-10 pt-4"
      >
        <div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <h1
              id="project-heading"
              className="break-words font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl"
            >
              {project.title}
            </h1>

            <span
              className="rounded-full border border-blue/25 px-4 py-2 text-[10px] font-medium text-blue-deep"
            >
              {projectStatusLabels[project.status]}
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-deep">
            {project.summary}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
            {project.description}
          </p>

          {project.visibility === "public" && project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-3 text-xs font-semibold text-blue-deep"
            >
              Visit website
              {" "}

              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          )}
        </div>
      </section>
    </>
  );
}
