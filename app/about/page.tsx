import type { Metadata } from "next";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutJourney } from "@/components/about/AboutJourney";
import { BeyondTheCode } from "@/components/about/BeyondTheCode";

export const metadata: Metadata = {
  title: "About me — Emmanuel Akinjogunla",
  description: "Software engineer, builder, learner, and a curious human. Get to know Emmanuel Akinjogunla and the thinking behind his work.",
};

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-[1120px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12"
    >
      <AboutIntro />

      <AboutStats />

      <AboutJourney />

      <BeyondTheCode />
    </main>
  );
}
