import Image from "next/image";

export function AboutIntro() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.25fr] lg:gap-10 lg:px-12 lg:py-20">
      <div>
        <p className="mb-3 font-serif text-lg italic text-blue-deep">
          A little about me
        </p>

        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl">
          <span className="block">Building useful things.</span>
          <span className="mt-3 block font-normal italic text-blue-deep">
            Growing with intention.
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-7 text-ink-soft">
          I&apos;m Emmanuel, a software engineer who enjoys turning ideas into
          thoughtful, practical digital experiences. Curious about the problem.
          Intentional about the details. Here&apos;s a little of the journey
          that shaped how I build and keep learning.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-2xl bg-pale">
          <Image
            src="/me-2.JPG"
            width={2048}
            height={2559}
            alt="Emmanuel Akinjogunla"
            className="block h-auto w-full"
            sizes="(max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 51vw, 650px"
          />
        </div>
      </div>
    </section>
  );
}
