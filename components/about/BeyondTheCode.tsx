import Image from "next/image";

const interests = [
  {
    title: "Anime",
    image: "/about/anime.png",
    alt: "Anime adventurer overlooking a Japanese city at blue hour",
  },
  {
    title: "Photography",
    image: "/about/photography.jpg",
    alt: "A camera ready for a new perspective",
  },
  {
    title: "Reading",
    image: "/about/reading.jpg",
    alt: "Shelves filled with books",
  },
  {
    title: "Music",
    image: "/about/music.jpg",
    alt: "Headphones for listening to music",
  },
];

export function BeyondTheCode() {
  return (
    <section id="beyond-the-code" aria-labelledby="beyond-heading" className="mt-10 scroll-mt-28">
      <h2 id="beyond-heading" className="font-serif text-4xl font-semibold tracking-tight">Beyond the Code</h2>

      <p className="mt-2 text-sm leading-6 text-ink-soft">Life outside of code is just as important.
        <br />
        Here are a few things that keep me inspired.</p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {interests.map((interest) => <figure
          key={interest.title}
          className="overflow-hidden rounded-md border border-navy/15 bg-paper p-1"
        >
          <Image
            src={interest.image}
            alt={interest.alt}
            width={640}
            height={420}
            sizes="(max-width: 639px) 43vw, 240px"
            className="aspect-[3/2] w-full rounded-t-sm object-cover"
          />
          <figcaption className="px-3 py-3 text-xs font-semibold text-blue-deep">
            {interest.title}
          </figcaption>
        </figure>)}
      </div>
    </section>
  );
}
