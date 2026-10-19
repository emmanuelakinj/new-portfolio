import { BookOpen, Camera, Code2, Lightbulb, MessageCircle, Users } from "lucide-react";

const topics = [
  {
    title: "Builds & projects",
    description:
      "Updates on what I'm working on, from side projects to bigger ideas.",
    icon: Code2,
  },
  {
    title: "Lessons learned",
    description:
      "What I'm learning in coding, problem solving, and real-world development.",
    icon: Lightbulb,
  },
  {
    title: "Tech & tools",
    description: "Tools, frameworks, and resources that help me build better.",
    icon: BookOpen,
  },
  {
    title: "Life outside code",
    description:
      "Photography, travel, music, books, and the little things that keep me grounded.",
    icon: Camera,
  },
  {
    title: "Career & growth",
    description:
      "My journey, reflections, and what I'm figuring out along the way.",
    icon: Users,
  },
  {
    title: "Quick thoughts",
    description:
      "Short notes, ideas, and anything else that feels worth sharing.",
    icon: MessageCircle,
  },
];

export function BlogTopics() {
  return (
  <section className="border-y border-line bg-pale">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16 lg:px-12">
      <div>
        <p className="mb-4 inline-block -rotate-2 font-serif text-lg italic text-blue-deep">
          What to expect
          <span className="mt-1 block h-px w-20 bg-blue-deep" />
        </p>

        <h2 className="max-w-md font-serif text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
          A mix of thoughts, notes and real experiences.
        </h2>

        <p className="mt-6 max-w-md text-base leading-7 text-ink-soft">
          Here are some of the things I’d like to write about when I get
          started.
        </p>
      </div>

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map(({ title, description, icon: Icon }) => (
          <article key={title} className="group">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/20 text-blue-deep transition group-hover:bg-sky/30">
              <Icon size={24} strokeWidth={1.6} />
            </div>

            <h3 className="font-serif text-lg font-semibold text-navy">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-ink-soft">
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
}
