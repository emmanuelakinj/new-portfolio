import type { Metadata } from "next";

import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutBeginning } from "@/components/about/AboutBeginning";
import { AboutEducation } from "@/components/about/AboutEducation";
import { BeyondTheCode } from "@/components/about/BeyondTheCode";
import { AboutNextSteps } from "@/components/about/AboutNextSteps";

export const metadata: Metadata = {
  title: "About me — Emmanuel Akinjogunla",
  description:
    "Software engineer, builder, learner, and a curious human. Get to know Emmanuel Akinjogunla and the thinking behind his work.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-navy">
      <AboutIntro />
      <AboutBeginning />
      <AboutEducation />
      <BeyondTheCode />
      <AboutNextSteps />
    </main>
  );
}
