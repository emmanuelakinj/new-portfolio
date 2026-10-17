import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTechnology } from "@/data/technologies";
import type { Project } from "@/data/projects";

export function ProjectRelated({ project, nextProject }: { project: Project; nextProject?: Project }) {
  const stack = project.technologies.map(getTechnology).filter((technology) => technology !== undefined);

  return (
    <section
      aria-labelledby="stack-heading"
      className="grid gap-8 pt-8 md:grid-cols-[1.3fr_1fr] md:gap-12"
    >
      <div>
        <h2
          id="stack-heading"
          className="font-serif text-2xl font-semibold"
        >
          Technologies used
        </h2>

        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((technology) => (
            <li
              key={technology.id}
              className="inline-flex items-center gap-2 rounded-full border border-blue/10 bg-sky/15 px-3 py-2 text-[11px] font-medium text-blue-deep"
            >
              <Image
                src={technology.logo}
                alt=""
                width={16}
                height={16}
                className="size-4 object-contain"
              />

              {technology.name}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={
          nextProject && nextProject.id !== project.id
            ? `/projects/${nextProject.id}`
            : "/projects"
        }
        className="group flex min-h-28 items-center justify-between gap-5 rounded-md border border-navy/15 p-5 transition-colors hover:bg-pale"
      >
        <div>
          <p className="text-[10px] uppercase tracking-widest text-blue-deep">
            Keep exploring
          </p>

          <p className="mt-2 font-serif text-2xl">
            {nextProject && nextProject.id !== project.id
              ? nextProject.title
              : "See more projects"}
          </p>
        </div>

        <ArrowRight
          aria-hidden="true"
          className="size-5 shrink-0 text-blue-deep transition-transform group-hover:translate-x-1"
        />
      </Link>
    </section>
  );
}
