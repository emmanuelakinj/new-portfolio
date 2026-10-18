import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

export function AboutIntro() {
  return (
    <section
      aria-labelledby="about-heading"
      className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr] md:gap-14"
    >
      <div className="max-w-lg">
        <h1
          id="about-heading"
          className="font-serif text-6xl font-semibold leading-none tracking-tight sm:text-7xl"
        >
          About me
        </h1>

        <p className="mt-6 max-w-md text-xl font-medium leading-relaxed text-blue-deep sm:text-2xl">
          I&apos;m a software engineer, builder, learner, and a curious human.
        </p>

        <p className="mt-6 max-w-md text-sm leading-7 text-ink-soft">
          I love building products that solve real problems. I&apos;m passionate
          about clean code, great user experiences, and the impact technology
          can have when it&apos;s used thoughtfully.
        </p>
      </div>

      <figure className="relative mx-auto w-full max-w-100 pb-3 pl-12 pt-6 sm:pl-16 md:ml-auto md:mr-0">
        <Image
          src="/me.JPG"
          alt="Emmanuel Akinjogunla"
          width={1592}
          height={1592}
          preload
          sizes="(max-width: 767px) 300px, 400px"
          className="aspect-[4/5] w-full -rotate-[4deg] border-4 border-white bg-pale object-cover shadow-[10px_12px_0_0_#8dcbf075]"
        />
      </figure>
    </section>
  );
}
