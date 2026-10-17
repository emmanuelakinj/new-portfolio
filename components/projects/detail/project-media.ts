import type { Project } from "@/data/projects";

/** Only show product screenshots when the project is public. */
export function getProjectMedia(project: Project) {
  const screenshot = project.visibility === "public" ? project.image : undefined;
  return { screenshot, cover: project.caseStudy?.cover ?? screenshot };
}
