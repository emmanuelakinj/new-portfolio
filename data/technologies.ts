export type TechnologyStatus = "used" | "learning" | "exploring";

export type Technology = {
  id: string;
  name: string;
  logo: string;
  description: string;
  categories: string[];
  status: TechnologyStatus;
};

export const technologies: Technology[] = [
  {
    id: "javascript",
    logo: "/technologies/javascript.svg",
    name: "JavaScript",
    description: "Interactive web development",
    categories: ["Frontend", "Backend"],
    status: "used",
  },
  {
    id: "typescript",
    logo: "/technologies/typescript.svg",
    name: "TypeScript",
    description: "Type-safe development",
    categories: ["Frontend", "Backend"],
    status: "used",
  },
  {
    id: "react",
    logo: "/technologies/react.svg",
    name: "React",
    description: "Component-based user interfaces",
    categories: ["Frontend"],
    status: "used",
  },
  {
    id: "nextjs",
    logo: "/technologies/nextjs.svg",
    name: "Next.js",
    description: "React framework",
    categories: ["Frontend"],
    status: "used",
  },
  {
    id: "tailwindcss",
    logo: "/technologies/tailwindcss.svg",
    name: "Tailwind CSS",
    description: "Utility-first styling",
    categories: ["Frontend", "Tools"],
    status: "used",
  },
  {
    id: "nestjs",
    logo: "/technologies/nestjs.svg",
    name: "NestJS",
    description: "Backend development",
    categories: ["Backend"],
    status: "learning",
  },
  {
    id: "postgresql",
    logo: "/technologies/postgresql.svg",
    name: "PostgreSQL",
    description: "Relational database",
    categories: ["Database"],
    status: "learning",
  },
  {
    id: "git",
    logo: "/technologies/git.svg",
    name: "Git",
    description: "Version control",
    categories: ["Tools"],
    status: "used",
  },
  {
    id: "github",
    logo: "/technologies/github.svg",
    name: "GitHub",
    description: "Code hosting and collaboration",
    categories: ["Tools"],
    status: "used",
  },
  {
    id: "docker",
    logo: "/technologies/docker.svg",
    name: "Docker",
    description: "Containerized development",
    categories: ["Tools"],
    status: "learning",
  },
];

export function getTechnology(id: string) {
  return technologies.find((technology) => technology.id === id);
}
