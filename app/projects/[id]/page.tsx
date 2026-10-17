import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVisibleProjects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/detail/ProjectHero";
import { ProjectOverview } from "@/components/projects/detail/ProjectOverview";
import { ProjectFeatures } from "@/components/projects/detail/ProjectFeatures";
import { ProjectRelated } from "@/components/projects/detail/ProjectRelated";

const visibleProjects = getVisibleProjects();
type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return visibleProjects.map((project) => ({ id: project.id }));
}

function findProject(id: string) {
  const project = visibleProjects.find((project) => project.id === id);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).id);
  return {
    title: `${project.title} — Emmanuel Akinjogunla`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = findProject((await params).id);
  const nextProject =
    visibleProjects[
      (visibleProjects.indexOf(project) + 1) % visibleProjects.length
    ];

  return (
    <main
      id="main-content"
      className="mx-auto max-w-[1120px] px-5 pb-14 pt-8 sm:px-8 sm:pt-12 lg:px-12"
    >
      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      <ProjectFeatures project={project} />

      <ProjectRelated project={project} nextProject={nextProject} />
    </main>
  );
}
