import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function SectionHeading({
  eyebrow,
  title,
  supporting,
  align = "left",
  tone = "light",
  className = ""
}) {
  const isDark = tone === "dark";
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 sm:gap-6 ${alignClass} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`flex items-center gap-2.5 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-caramel-light" : "bg-caramel"}`} aria-hidden="true" />
        <span className={`eyebrow ${isDark ? "text-cream/70" : "text-espresso/55"}`}>{eyebrow}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
        className={`font-display font-medium leading-display tracking-[-0.02em] text-[clamp(2.25rem,5vw,4.25rem)] max-w-3xl ${
          isDark ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </motion.h2>

      {supporting && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
          className={`max-w-prose text-base sm:text-lg font-light leading-prose ${
            isDark ? "text-cream/70" : "text-espresso/65"
          }`}
        >
          {supporting}
        </motion.p>
      )}
    </div>
  );
}
