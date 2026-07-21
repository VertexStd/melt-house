import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import LazyImage from "../ui/LazyImage.jsx";
import Lightbox from "../ui/Lightbox.jsx";
import images from "../../assets/images/index.js";

const EASE = [0.16, 1, 0.3, 1];

const GALLERY_ITEMS = [
  { src: images.vibe, alt: "A stack of three cookies beside a latte in a Melt House mug", caption: "Slow mornings", ratio: "aspect-[4/5]" },
  { src: images.exterior, alt: "The Melt House storefront glowing at dusk", caption: "The House, at dusk", ratio: "aspect-[4/3]" },
  { src: images.packaging, alt: "Melt House cookie boxes and individually wrapped cookies", caption: "Boxed for gifting", ratio: "aspect-[3/4]" },
  { src: images.bag, alt: "A warm cookie being placed into a Melt House paper bag", caption: "Straight from the tray", ratio: "aspect-[4/5]" },
  { src: images.cap, alt: "Melt House branded cap on a warm cream background", caption: "House merchandise", ratio: "aspect-square" },
  { src: images.apron, alt: "A baker plating fresh cookies in the Melt House kitchen", caption: "Made by hand", ratio: "aspect-[3/4]" }
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openAt = useCallback((i) => setActiveIndex(i), []);
  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length),
    []
  );
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % GALLERY_ITEMS.length), []);

  return (
    <section id="gallery" className="relative bg-cream py-section sm:py-section-lg">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="A house worth lingering in."
          supporting="From the counter to the kitchen, a look at the details that make Melt House what it is."
          className="mb-16 sm:mb-20"
        />

        <div className="columns-2 sm:columns-3 gap-4 sm:gap-5 [column-fill:balance]">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.button
              type="button"
              key={item.caption}
              onClick={() => openAt(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
              className="group relative mb-4 sm:mb-5 block w-full overflow-hidden rounded-image break-inside-avoid text-left focus-visible:outline-caramel"
              aria-label={`Open larger preview: ${item.caption}`}
            >
              <LazyImage
                src={item.src}
                alt={item.alt}
                className={item.ratio}
                imgClassName="transition-transform duration-[1400ms] ease-melt group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-cream text-sm font-display italic tracking-wide">{item.caption}</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-cream/40 text-cream shrink-0">
                  <Expand size={13} strokeWidth={1.5} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox items={GALLERY_ITEMS} activeIndex={activeIndex} onClose={close} onPrev={prev} onNext={next} />
    </section>
  );
}
