import { Layers } from "lucide-react";

import Image from "next/image";

import type { Project } from "@/data/projects";

export function LaptopPreview({ project }: { project: Project }) {
  const showPlaceholder = project.visibility !== "public" || !project.image;
  const placeholder = project.preview?.placeholder;
  const caption =
    project.preview?.caption ??
    (showPlaceholder
      ? `Project preview · ${project.title} · Details coming soon`
      : `Website preview · ${project.title}`);

  return (
    <figure className="relative mx-auto w-full max-w-2xl lg:-mt-14 lg:w-[112%] lg:max-w-none">
      <div className="relative mx-auto w-[90%] rounded-t-xl border border-white/20 bg-[#20262c] p-1.5 pb-2 shadow-2xl shadow-navy/20 sm:rounded-t-2xl sm:p-2.5 sm:pb-3">
        <div
          aria-hidden="true"
          className="mb-1.5 flex h-1 items-center justify-center sm:mb-2"
        >
          <span className="size-1 rounded-full bg-slate-500" />
        </div>
        <div
          className={`relative overflow-hidden ${showPlaceholder ? "aspect-[16/10] bg-[#eaf0ee] text-navy" : "bg-white"}`}
        >
          {showPlaceholder ? (
            <div className="flex h-full flex-col items-center justify-center px-5 text-center">
              <Layers
                aria-hidden="true"
                className="mb-3 size-9 text-blue-deep sm:mb-5 sm:size-12"
                strokeWidth={1}
              />
              <p className="text-[8px] uppercase tracking-[0.22em] text-blue-deep sm:text-[10px]">
                {placeholder?.eyebrow ?? "Project preview"}
              </p>
              <p className="mt-2 font-serif text-3xl tracking-tight sm:text-5xl">
                {placeholder?.heading ?? project.title}
              </p>
              <p className="mt-3 max-w-56 text-[10px] leading-5 text-ink-soft sm:text-xs">
                {placeholder?.description ?? "More to share when it's ready."}
              </p>
              <span className="mt-4 border-t border-navy/15 pt-3 text-[8px] uppercase tracking-[0.2em] sm:mt-6">
                {project.title}
              </span>
            </div>
          ) : (
            <Image
              src={project.image!}
              alt={`${project.title} website preview inside a laptop frame`}
              width={2880}
              height={1800}
              unoptimized
              sizes="(max-width: 1023px) 85vw, 55vw"
              className="block h-auto w-full"
            />
          )}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="relative h-3 rounded-b-[50%] border-t border-white/80 bg-slate-300 shadow-lg shadow-navy/15 sm:h-4"
      >
        <div className="mx-auto h-1.5 w-[15%] rounded-b-md bg-slate-400 sm:h-2" />
      </div>
      <figcaption className="mt-5 text-center text-[9px] uppercase tracking-[0.15em] text-ink-soft">
        {caption}
      </figcaption>
    </figure>
  );
}
