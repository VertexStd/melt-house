import { Wheat, Clock, HandHeart } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import IconFeatureCard from "../ui/IconFeatureCard.jsx";
import DripDivider from "../ui/DripDivider.jsx";

const PILLARS = [
  {
    icon: Wheat,
    title: "Premium Ingredients",
    description:
      "European butter, single-origin chocolate, and Belgian couverture — nothing in our dough is there to cut a corner."
  },
  {
    icon: Clock,
    title: "Freshly Baked Daily",
    description:
      "Every batch is mixed at dawn and baked in small trays through the day, so what reaches you is never more than a few hours old."
  },
  {
    icon: HandHeart,
    title: "Crafted With Care",
    description:
      "Scooped, weighed, and finished by hand — the same way our very first tray was, back when the house was just one oven."
  }
];

export default function SignatureExperience() {
  return (
    <section id="experience" className="relative bg-espresso text-cream">
      <DripDivider tone="cream" />
      <div className="grain relative mx-auto max-w-content px-6 sm:px-10 pt-6 pb-28 sm:pb-36">
        <SectionHeading
          eyebrow="Signature Experience"
          title="Three things we never negotiate on."
          tone="dark"
          align="center"
          className="mb-20 sm:mb-24"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7">
          {PILLARS.map((pillar, i) => (
            <IconFeatureCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              index={i}
              tone="dark"
            />
          ))}
        </div>
      </div>
      <DripDivider tone="cream" flip />
    </section>
  );
}
