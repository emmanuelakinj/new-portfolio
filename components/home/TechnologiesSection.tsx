"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...new Set(technologies.flatMap((technology) => technology.categories)),
    ],
    [],
  );

  const visibleTechnologies = useMemo(
    () =>
      activeCategory === "All"
        ? technologies
        : technologies.filter((technology) =>
          technology.categories.includes(activeCategory),
        ),
    [activeCategory],
  );

  function getProjectCount(technologyId: string) {
    return projects.filter(
      (project) =>
        project.visibility !== "private" &&
        project.technologies.includes(technologyId),
    ).length;
  }

  return (
    <section
      aria-labelledby="technologies-heading"
      className="relative overflow-hidden border-y border-navy/10 bg-paper"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-12 lg:px-12">
        <div className="relative md:top-10 md:sticky">
          <h2
            id="technologies-heading"
            className="max-w-sm font-serif text-5xl leading-[1.04] tracking-[-0.035em] sm:text-6xl"
          >
            Tools in practice.
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-6 text-ink-soft">
            A growing collection of technologies, selected by how I use them in
            real projects. Not just a list of tools, but the stack that powers
            my work.
          </p>

          <div
            aria-hidden="true"
            className="mt-8 hidden w-fit rotate-[-5deg] text-blue md:block"
          >
            <p className="font-serif text-sm italic leading-5">
              Real projects.
              <br />
              Real tools.
            </p>
            <svg viewBox="0 0 68 28" fill="none" className="ml-12 mt-1 w-16">
              <path
                d="M2 3C15 20 31 23 54 7M45 6L55 7L51 16"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="min-w-0">
          <div
            aria-label="Filter technologies by category"
            className="mb-4 flex gap-2 overflow-x-auto pb-1"
          >
            {categories.map((category) => {
              const selected = activeCategory === category;
              const count =
                category === "All"
                  ? technologies.length
                  : technologies.filter((technology) =>
                    technology.categories.includes(category),
                  ).length;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 border px-3 py-1.5 text-[10px] cursor-pointer transition-colors duration-200 ${selected
                      ? "border-navy bg-navy text-white"
                      : "border-line bg-white/60 text-ink-soft hover:border-blue hover:bg-white"
                    }`}
                >
                  {category}
                  {category === "All" ? ` (${count})` : ""}
                </button>
              );
            })}
          </div>

          {visibleTechnologies.length > 0 ? (
            <div
              key={activeCategory}
              aria-live="polite"
              aria-atomic="true"
              className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 xl:grid-cols-3"
            >
              {visibleTechnologies.map((technology) => {
                const projectCount = getProjectCount(technology.id);

                return (
                  <article
                    key={technology.id}
                    className="group flex min-h-[145px] min-w-0 flex-col border border-line bg-paper p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue hover:shadow-md hover:shadow-navy/5 sm:min-h-[154px] sm:p-4"
                  >
                    <div className="mb-3 flex h-7 items-center">
                      <Image
                        src={technology.logo}
                        alt=""
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="break-words font-sans text-[12px] font-semibold tracking-tight text-navy sm:text-[13px]">
                      {technology.name}
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-ink-muted sm:text-[11px]">
                      {technology.description}
                    </p>

                    <p className="mt-2 text-[10px] font-medium text-blue-deep">
                      {technology.status === "used"
                        ? "In practice"
                        : technology.status === "learning"
                          ? "Currently learning"
                          : "Exploring"}
                    </p>
                    <div className="mt-auto flex items-end justify-between gap-1 pt-3">
                      <p className="text-[9px] leading-4 text-ink-soft sm:text-[10px]">
                        {projectCount === 1
                          ? "Listed in 1 project"
                          : `Listed in ${projectCount} projects`}
                      </p>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-blue opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="border border-dashed border-line p-6 text-sm text-ink-soft">
              No technologies in this category yet.
            </p>
          )}

          <div className="mt-4 flex items-start gap-2">
            <span
              aria-hidden="true"
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
            />
            <p className="text-[10px] leading-5 text-ink-muted">
              Showing technologies from my projects. I&apos;m always learning
              and exploring new tools.
            </p>
            <ArrowRight
              aria-hidden="true"
              className="mt-1 h-3.5 w-3.5 shrink-0 text-blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
