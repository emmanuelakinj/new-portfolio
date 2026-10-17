import type { Metadata } from "next";
import { WorkHeader } from "@/components/projects/WorkHeader";
import { WorkIndex } from "@/components/projects/WorkIndex";
import { getVisibleProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Emmanuel Akinjogunla",
  description:
    "A growing collection of websites, products, and ideas by Emmanuel Akinjogunla. Explore the work and the thinking behind it.",
};

export default function WorkPage() {
  const visibleProjects = getVisibleProjects();

  return (
    <main id="main-content">
      <WorkHeader count={visibleProjects.length} />

      <WorkIndex projects={visibleProjects} />

      <div
        className="border-t border-navy/15 px-5 py-8 text-center font-serif text-2xl italic text-ink-soft"
      >
        The collection keeps growing.
      </div>
    </main>
  );
}
