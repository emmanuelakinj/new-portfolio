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
    href: "https://conlinksenergies.com",

    caseStudy: {
      type: "Business website",
      problem:
        "The project centers on giving an energy business a digital presence that introduces the company clearly.",
      approach:
        "The website brings the business into a digital experience. A fuller case study covering my contribution and implementation decisions will be shared when those details are ready.",
      featuresLabel: "Project focus",
      features: [
        "Business presentation",
        "Clear company information",
        "A considered digital presence",
      ],
      note: "A business. A digital presence.",
    },
  },
  {
  id: "travelbuddy",
  title: "TravelBuddy",
  status: "in-development",
  summary: "Connecting travelers through shared experiences.",
  description:
    "A full-stack travel platform for discovering group trips, booking experiences, and joining a travel community. TravelBuddy brings the customer booking journey and the team's day-to-day operations into one connected system.",
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
    type: "Full-stack web application",
    problem:
      "Group travel involves more than choosing a destination. Travelers need clear trip information and a straightforward booking experience, while organizers need to manage availability, payments, and customer records.",
    approach:
      "I'm building a public-facing travel website alongside a dedicated admin workspace, backed by a NestJS API and PostgreSQL database. The work connects trip discovery with booking and Paystack checkout, while giving administrators tools to manage trips, review payments, and track activity.",
    featuresLabel: "Core capabilities",
    features: [
      "Trip discovery with detailed experience pages",
      "Booking and ticket availability management",
      "Paystack checkout and payment verification",
      "Admin payment review and verified refund tracking",
      "Travel community membership through the Tribe",
      "Role-based administration, analytics, and notifications",
    ],
    note: "Shared experiences. New connections. More places to go.",
  },
  showcaseTone: "cool",
  preview: {
    caption: "In development · Travel discovery, booking, and operations",
    placeholder: {
      eyebrow: "Travel together",
      heading: "Your next adventure starts with connection.",
      description:
        "Discover group trips, book an experience, and find your travel community.",
    },
  },
},
];

/** Projects that can appear on public portfolio pages. */
export function getVisibleProjects() {
  return projects.filter((project) => project.visibility !== "private");
}

export function getFeaturedProjects() {
  return getVisibleProjects().filter((project) => project.featured);
}
