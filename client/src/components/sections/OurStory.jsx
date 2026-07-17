import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import images from "../../assets/images/index.js";

const EASE = [0.16, 1, 0.3, 1];

export default function OurStory() {
  return (
    <section id="story" className="relative bg-cream py-28 sm:py-40">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-7 relative"
          >
            <div className="aspect-[5/6] sm:aspect-[4/5] overflow-hidden rounded-sm bg-cream-deep">
              <img
                src={images.apron}
                alt="A Melt House baker arranging freshly baked cookies on a marble counter, bathed in warm afternoon light"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
              className="hidden sm:flex absolute -bottom-8 -right-8 items-center justify-center w-32 h-32 rounded-full bg-cream border border-espresso/10 shadow-xl text-center font-display italic text-espresso text-base leading-tight p-6"
            >
              Baked fresh, every morning
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 lg:pl-4">
            <SectionHeading
              eyebrow="Our Story"
              title="It started with one oven, and a very stubborn belief in butter."
              className="mb-10"
            />

            <blockquote className="border-l border-caramel/50 pl-6 mb-8">
              <p className="font-display italic text-2xl sm:text-[1.75rem] text-espresso/85 leading-snug">
                &ldquo;A cookie should feel like something someone made for you.&rdquo;
              </p>
            </blockquote>

            <div className="space-y-5 text-espresso/65 font-light leading-relaxed max-w-xl">
              <p>
                Melt House began as a single home oven and a recipe that refused to be rushed —
                slow-creamed butter, real chocolate, and a two-day rest for every batch of dough.
                No shortcuts, no substitutes, no exceptions.
              </p>
              <p>
                Today that same recipe fills a small house of warm light and marble counters, where
                every cookie is still shaped, baked, and boxed by hand.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-espresso/12 pt-9">
              {[
                { value: "2019", label: "House Founded" },
                { value: "12+", label: "Signature Flavors" },
                { value: "100%", label: "Handmade Batches" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                >
                  <p className="font-display text-3xl sm:text-4xl text-espresso">{stat.value}</p>
                  <p className="eyebrow text-espresso/45 mt-2 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
