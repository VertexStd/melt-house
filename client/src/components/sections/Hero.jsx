import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "../ui/Button.jsx";
import images from "../../assets/images/index.js";

const EASE = [0.16, 1, 0.3, 1];

const HEADLINE_LINE_1 = "Freshly Baked";
const HEADLINE_LINE_2 = "Happiness.";

function AnimatedWords({ text, delayStart = 0 }) {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <span key={word + i} className="inline-block overflow-hidden mr-[0.28em] align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              ease: EASE,
              delay: delayStart + i * 0.09
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-[1.12]">
        <img
          src={images.hero}
          alt="Warm interior of the Melt House cookie counter at golden hour, pastry case glowing with fresh bakes"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-espresso/15"
      />
      <div className="absolute inset-0 bg-espresso/10" />

      {/* Floating accent element — subtle, brand-toned */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-[22%] right-[9%] z-10 items-center justify-center w-24 h-24 rounded-full border border-cream/25 bg-cream/5 backdrop-blur-sm"
      >
        <span className="font-display italic text-cream/80 text-sm text-center leading-tight px-3">
          Est. 2019
        </span>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex h-full flex-col justify-end px-6 sm:px-10 pb-24 sm:pb-28"
      >
        <div className="mx-auto w-full max-w-content">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-caramel-light" />
            <span className="eyebrow text-caramel-light">A House of Handmade Cookies</span>
          </motion.div>

          <h1 className="font-display font-medium text-cream text-[15vw] sm:text-7xl md:text-8xl lg:text-[6.5rem] leading-[0.98] max-w-4xl">
            <AnimatedWords text={HEADLINE_LINE_1} delayStart={0.3} />
            <br />
            <span className="italic font-light text-caramel-light">
              <AnimatedWords text={HEADLINE_LINE_2} delayStart={0.55} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
            className="mt-9 max-w-md text-cream/80 text-base sm:text-lg font-light leading-relaxed"
          >
            Small-batch cookies, baked every morning from real butter and real chocolate —
            in a house built for slowing down.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.25 }}
            className="mt-11 flex flex-wrap items-center gap-5"
          >
            <Button href="#story" variant="inverted">
              Explore Our Story
            </Button>
            <Button href="#visit" variant="outline" className="text-cream">
              Visit Us
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#story"
        aria-label="Scroll to Our Story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 right-6 sm:right-10 z-10 flex items-center gap-2 text-cream/70 hover:text-cream transition-colors"
      >
        <span className="eyebrow hidden sm:inline">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center w-9 h-9 rounded-full border border-cream/40"
        >
          <ArrowDown size={15} strokeWidth={1.6} />
        </motion.span>
      </motion.a>
    </section>
  );
}
