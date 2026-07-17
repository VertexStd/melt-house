import { motion } from "framer-motion";
import images from "../../assets/images/index.js";

const EASE = [0.16, 1, 0.3, 1];

const FLAVORS = [
  "Double Choco",
  "Lotus Biscoff",
  "Red Velvet",
  "Salted Caramel",
  "Pistachio Rose",
  "Classic Butter"
];

export default function BrandExperience() {
  return (
    <section id="brand-experience" className="relative bg-cream overflow-hidden">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative min-h-[440px] lg:min-h-[620px]"
        >
          <div className="h-full min-h-[440px] lg:min-h-[620px] w-full overflow-hidden bg-cream-deep">
            <img
              src={images.bag}
              alt="A guest holding a warm Melt House cookie fresh from a paper bag, wearing a Melt House branded t-shirt"
              width={1122}
              height={1402}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="relative flex flex-col justify-center bg-espresso text-cream px-6 sm:px-14 lg:px-20 py-24 sm:py-28">
          <span className="w-1.5 h-1.5 rounded-full bg-caramel-light mb-6" />
          <h2 className="font-display font-medium text-5xl sm:text-6xl leading-[1.05] max-w-md mb-7">
            Every detail, wrapped in the same warmth.
          </h2>
          <p className="text-cream/65 font-light leading-relaxed max-w-md mb-12">
            From the tissue in your box to the apron on our bakers, Melt House is built as one
            continuous feeling — not a logo stamped on at the end.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Handmade Boxes", "House Merch", "Paper Bag Service", "In-House Roast"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                className="rounded-full border border-cream/20 px-5 py-2.5 text-xs tracking-wide uppercase font-medium text-cream/75"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-y border-espresso/10 bg-cream-deep py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...FLAVORS, ...FLAVORS, ...FLAVORS].map((flavor, i) => (
            <span
              key={`${flavor}-${i}`}
              className="mx-8 flex items-center gap-8 font-display italic text-xl sm:text-2xl text-espresso/60"
            >
              {flavor}
              <span className="w-1.5 h-1.5 rounded-full bg-caramel" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
