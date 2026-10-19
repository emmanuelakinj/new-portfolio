import Image from "next/image";
import blogImage from "@/public/blog.jpg";
import { NotebookPen } from "lucide-react";

export function BlogIntro() {
  return (
  <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12 lg:py-24">
    <div>
      <p className="mb-5 inline-block -rotate-3 font-serif text-lg italic text-blue-deep">
        The blog
        <span className="mt-1 block h-px w-16 rotate-[-5deg] bg-blue-deep" />
      </p>

      <h1 className="max-w-xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-6xl lg:text-7xl">
        Things I’m learning along the way.
      </h1>

      <p className="mt-7 max-w-lg text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
        I want to use this space to write about things I’m building, lessons
        from learning software engineering, and ideas I’m still figuring
        out.
      </p>

      <p className="mt-4 text-base leading-7 text-ink-soft">
        Nothing too formal. Just notes from the journey.
      </p>

      <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-navy px-6 py-4 text-sm font-medium text-paper">
        <NotebookPen size={17} />
        <span>Blog coming soon</span>
      </div>

      <p className="mt-4 text-xs text-ink-soft">
        Still putting the first few thoughts together.
      </p>
    </div>

    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-pale">
        <Image
          src={blogImage}
          alt="Emmanuel smiling while seated outdoors"
          className="block h-auto w-full"
          sizes="(max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 43vw, 546px"
          placeholder="blur"
        />
      </div>

      <div className="absolute -right-1 -top-7 hidden rotate-6 font-serif text-lg italic leading-7 text-blue-deep sm:block lg:-right-5">
        Same curiosity.
        <br />
        New topics.
        <span className="mt-2 block h-px w-12 rotate-[-8deg] bg-blue-deep" />
      </div>
    </div>
  </section>
  );
}
