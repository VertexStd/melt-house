import { motion } from "framer-motion";
import LazyImage from "../ui/LazyImage.jsx";
import images from "../../assets/images/index.js";

const EASE = [0.16, 1, 0.3, 1];

const POINTS = [
  {
    number: "01",
    title: "Premium Ingredients",
    description: "European butter, Belgian couverture, and single-origin chocolate — sourced, not settled for."
  },
  {
    number: "02",
    title: "Freshly Baked Daily",
    description: "Mixed at dawn, baked in small trays through the day. Nothing sits on a shelf waiting for you."
  },
  {
    number: "03",
    title: "Handcrafted With Care",
    description: "Every dough is scooped and weighed by hand, finished with the same attention as our very first batch."
  },
  {
    number: "04",
    title: "Small-Batch Quality",
    description: "We bake in trays of two dozen, never vats of two hundred — consistency you can taste in every bite."
  }
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="relative bg-cream-soft py-section sm:py-section-lg">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-caramel inline-block mb-6" />
            <h2 className="font-display font-medium text-[clamp(2.25rem,5vw,3.75rem)] leading-display tracking-[-0.02em] text-espresso mb-6 max-w-md">
              What goes in, matters as much as what comes out.
            </h2>
            <p className="text-espresso/60 font-light leading-prose max-w-prose mb-10">
              Every Melt House cookie is built on four quiet promises — the kind you won&apos;t see on
              the box, but will always taste in the bite.
            </p>
            <LazyImage
              src={images.vibe}
              alt="A stack of Melt House cookies beside a latte, dusted with chocolate"
              className="aspect-[4/5] rounded-image hidden lg:block"
            />
          </motion.div>

          <div className="lg:col-span-7">
            {POINTS.map((point, i) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="group flex gap-6 sm:gap-10 py-9 border-b border-espresso/12 first:pt-0"
              >
                <span className="font-display text-2xl sm:text-3xl text-caramel/70 shrink-0 pt-1">
                  {point.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-espresso mb-2.5 transition-colors duration-300 group-hover:text-caramel">
                    {point.title}
                  </h3>
                  <p className="text-espresso/60 font-light leading-prose max-w-prose">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
