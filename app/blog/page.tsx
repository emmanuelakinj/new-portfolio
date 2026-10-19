import type { Metadata } from "next";

import { BlogIntro } from "@/components/blog/BlogIntro";
import { BlogTopics } from "@/components/blog/BlogTopics";
import { BlogComingSoon } from "@/components/blog/BlogComingSoon";

export const metadata: Metadata = {
  title: "Blog — Emmanuel Akinjogunla",
  description:
    "Notes on building, learning, and the ideas in between. Emmanuel's blog is coming soon.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-navy">
      <BlogIntro />
      <BlogTopics />
      <BlogComingSoon />
    </main>
  );
}
