import { AboutPhoto } from "./AboutPhoto";

export function AboutIntro() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.25fr] lg:gap-10 lg:px-12 lg:py-20">
      <div>
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl">
          About me
        </h1>

        <p className="mt-6 max-w-md text-xl font-medium leading-relaxed text-blue-deep sm:text-2xl">
          The person behind the projects is a story worth telling.
        </p>

        <p className="mt-6 max-w-lg text-base leading-7 text-ink-soft">
          I&apos;m Emmanuel — a software engineer who enjoys bringing ideas to life,
          figuring out how things work, and finding inspiration in the world
          around me. There&apos;s more to me than the code I write and the things I
          build. This is where the experiences, interests, and ambitions behind
          the work come together.
        </p>
      </div>

      <AboutPhoto
        src="/me-2.JPG"
        width={2048}
        height={2559}
        alt="Emmanuel Akinjogunla"
        caption="Emmanuel, beyond the code."
        number="EA / 01"
        variant="portrait"
        sizes="(max-width: 639px) 85vw, (max-width: 1023px) 400px, 430px"
        preload
      />
    </section>
  );
}
