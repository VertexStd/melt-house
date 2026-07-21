import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Soft-elevated "glass" card: translucent surface, hairline border,
 * gentle shadow that deepens on hover lift. Used for feature/pillar
 * grids (Signature Experience, Premium Ingredients) so both sections
 * share one refined object language instead of flat blocks.
 */
export default function IconFeatureCard({ icon: Icon, title, description, index = 0, tone = "light" }) {
  const isDark = tone === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col items-start rounded-2xl px-8 py-10 sm:py-12 transition-all duration-400 ease-melt ${
        isDark
          ? "bg-cream/[0.04] border border-cream/10 backdrop-blur-sm hover:bg-cream/[0.07] hover:border-caramel-light/30"
          : "bg-white/60 border border-espresso/8 backdrop-blur-sm shadow-[0_1px_2px_rgba(44,26,16,0.04)] hover:shadow-[0_24px_48px_-16px_rgba(44,26,16,0.18)] hover:border-caramel/30"
      }`}
    >
      <span
        className={`flex items-center justify-center w-14 h-14 rounded-full mb-8 transition-colors duration-500 ${
          isDark
            ? "border border-caramel-light/40 text-caramel-light group-hover:bg-caramel-light group-hover:text-espresso"
            : "border border-caramel/35 text-caramel group-hover:bg-caramel group-hover:text-cream"
        }`}
      >
        <Icon size={22} strokeWidth={1.4} />
      </span>
      <h3 className={`font-display text-2xl sm:text-[1.7rem] leading-display tracking-[-0.01em] mb-3 ${isDark ? "text-cream" : "text-espresso"}`}>
        {title}
      </h3>
      <p className={`font-light leading-prose ${isDark ? "text-cream/60" : "text-espresso/60"}`}>
        {description}
      </p>
    </motion.div>
  );
}
