export type ProjectStatus =
  | "live"
  | "in-development"
  | "archived"
  | "website-project";

export const projectStatusLabels = {
  live: "Live",
  "in-development": "In development",
  archived: "Archived",
  "website-project": "Website project",
} satisfies Record<ProjectStatus, string>;

export type Project = {
  id: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  description: string;

  technologies: string[];
  featured: boolean;
  visibility: "public" | "limited" | "private";
  image?: string;
  showcaseTone?: "warm" | "cool";
  preview?: {
    caption?: string;
    placeholder?: {
      eyebrow?: string;
      heading?: string;
      description?: string;
    };
  };
  href?: string;
  caseStudy?: {
    role?: string;
    timeline?: string;
    type?: string;
    problem?: string;
    approach?: string;
    features?: string[];
    featuresLabel?: string;
    cover?: string;
    coverAlt?: string;
    note?: string;
  };
};

export const projects: Project[] = [
  {
    id: "travelbuddy",
    title: "TravelBuddy",
    status: "in-development",
    summary: "Making travel planning feel more connected.",
    description:
      "A travel project focused on making it easier to plan and organize trips. More details will be shared when the project is ready for public presentation.",
    technologies: [
      "nextjs",
      "typescript",
      "nestjs",
      "postgresql",
      "tailwindcss",
      "git",
      "github",
      "react",
    ],
    featured: true,
    visibility: "limited",
    image: "/travelbuddy.png",
    caseStudy: {
      timeline: "Ongoing",
      type: "Web application",
      problem: "Planning a trip can mean keeping track of ideas, destinations, and details in different places. TravelBuddy explores how to make that process feel more connected.",
      approach: "I'm working toward a thoughtful travel planning experience, with a focus on clear interfaces and making it easier to organize a trip. The project is still in development, with more details to share as it takes shape.",
      featuresLabel: "Project focus",
      features: ["Connected travel planning", "Organizing trip ideas and details", "Clear, thoughtful user experience"],
      note: "More journeys. More possibilities.",
    },
    showcaseTone: "cool",
    preview: {
      caption: "Concept preview · Public details coming later",
      placeholder: {
        eyebrow: "A project in progress",
        heading: "The next chapter.",
        description:
          "Thoughtful travel planning. More to share when it's ready.",
      },
    },
  },
  {
    id: "conlinks-energies",
    title: "Conlinks Energies",
    status: "website-project",
    summary: "A digital presence for an energy business.",
    description:
      "A website project for Conlinks Energies. The detailed case study will cover the confirmed contribution, implementation decisions, and technologies.",
    technologies: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "git",
      "github",
      "react",
    ],
    featured: true,
    visibility: "public",
    image: "/conlinksenergies.png",
    caseStudy: {
      type: "Business website",
      problem: "The project centers on giving an energy business a digital presence that introduces the company clearly.",
      approach: "The website brings the business into a digital experience. A fuller case study covering my contribution and implementation decisions will be shared when those details are ready.",
      featuresLabel: "Project focus",
      features: ["Business presentation", "Clear company information", "A considered digital presence"],
      note: "A business. A digital presence.",
    },
    // Add a live project URL only after confirming it.
  },
];

/** Projects that can appear on public portfolio pages. */
export function getVisibleProjects() {
  return projects.filter((project) => project.visibility !== "private");
}

export function getFeaturedProjects() {
  return getVisibleProjects().filter((project) => project.featured);
}
