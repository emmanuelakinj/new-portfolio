import Image from "next/image";
import { Check } from "lucide-react";
import { getProjectMedia } from "./project-media";
import type { Project } from "@/data/projects";

export function ProjectFeatures({ project }: { project: Project }) {
  const study = project.caseStudy;
  const { cover, screenshot } = getProjectMedia(project);

  return (
    <section
      aria-labelledby="features-heading"
      className="grid items-center gap-8 border-b border-navy/10 py-8 md:grid-cols-2 md:gap-12"
    >
      <div>
        <h2
          id="features-heading"
          className="font-serif text-2xl font-semibold"
        >
          {study?.featuresLabel ?? "Key features"}
        </h2>

        {study?.features?.length ? (
          <ul className="mt-4 space-y-3">
            {study.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm leading-6 text-ink-soft"
              >
                <Check
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 rounded-full bg-sky/25 text-blue-deep"
                />

                {feature}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Feature details will be shared as the project is ready for
            public presentation.
          </p>
        )}
      </div>

      <figure className="min-w-0">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`${project.title} interface`}
            width={2880}
            height={1800}
            sizes="(max-width: 767px) 85vw, 470px"
            className="aspect-[16/10] w-full rounded-md border border-navy/10 object-cover object-top shadow-sm"
          />
        ) : cover ? (
          <Image
            src={cover}
            alt={study?.coverAlt ?? `${project.title} inspiration`}
            width={1000}
            height={750}
            sizes="(max-width: 767px) 85vw, 470px"
            className="aspect-[16/10] w-full rounded-md object-cover"
          />
        ) : null}

        {project.visibility === "limited" && (
          <figcaption className="mt-3 text-[10px] leading-5 text-ink-soft">
            Inspiration image · Product screenshots will be shared when
            ready.
          </figcaption>
        )}
      </figure>
    </section>
  );
}
