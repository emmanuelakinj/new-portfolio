import { AboutPhoto } from "./AboutPhoto";
import photographyImage from "@/public/photography.jpg";
import { BookOpen, Camera, Tv } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const interests = [
  { label: "Photography", icon: Camera },
  // { label: "Travel", icon: Plane },
  { label: "Movies", icon: Tv },
  { label: "Books & learning", icon: BookOpen },
  // { label: "Good conversations", icon: Headphones },
];

export function BeyondTheCode() {
  return (
    <section id="beyond-the-code" className="border-y border-line bg-paper/70">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.15fr_0.7fr] lg:gap-10 lg:px-12 lg:py-20">
        <AboutPhoto
          src={photographyImage}
          alt="Emmanuel outdoors with a camera around his neck"
          caption="A different kind of focus."
            variant="snapshot"
          sizes="(max-width: 639px) 85vw, 320px"
        />

        <div>
          <SectionLabel>Outside the code</SectionLabel>

          <div className="space-y-4 text-[15px] leading-7 text-ink-soft">
            <p>
              There&apos;s more to me than just code. I&apos;m also into
              photography and enjoy capturing moments, whether it&apos;s a new
              place, a simple scene, or just something that catches my eye.
            </p>

            <p>
              I love exploring, trying new things, and spending time with good
              people. It&apos;s a nice change of pace and gives me a different
              perspective on things.
            </p>
          </div>
        </div>

        <div className="space-y-5 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          {interests.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon size={20} strokeWidth={1.7} />
              <span className="text-sm text-ink-soft">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
