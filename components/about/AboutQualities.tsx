import { Headphones, Network, UsersRound } from "lucide-react";

const qualities = [
  {
    title: "Problem solver",
    description: "I enjoy breaking down complex problems and finding simple, practical solutions.",
    icon: Network,
  },
  {
    title: "Collaborator",
    description: "I believe great products are built with great teams and shared thinking.",
    icon: UsersRound,
  },
  {
    title: "Always learning",
    description: "I'm constantly exploring new technologies, ideas, and perspectives.",
    icon: Headphones,
  },
];

export function AboutQualities() {
  return (
    <div className="mt-7 grid gap-6 border-t border-navy/10 pt-6 md:grid-cols-3 md:gap-0">
      {qualities.map(({ title, description, icon: Icon }) => <div
        key={title}
        className="flex gap-3 md:px-5 md:first:pl-0 md:last:pr-0 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-navy/15"
      >
        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sky/30">
          <Icon aria-hidden="true" className="size-6 text-blue-deep" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-xs font-semibold">
            {title}
          </h3>
          <p className="mt-2 text-xs leading-6 text-ink-soft">
            {description}
          </p>
        </div>
      </div>)}
    </div>
  );
}
