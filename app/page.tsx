import { AboutSection } from "@/components/home/AboutSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";

import { getFeaturedProjects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main
      id="main-content"
      className="min-h-screen overflow-x-clip bg-paper text-navy"
    >
      <HeroSection />
      <ProjectShowcase projects={featuredProjects} />
      <ApproachSection />
      <TechnologiesSection />
      <AboutSection />
    </main>
  );
}
