import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Full-screen lightbox for the gallery. Controlled by the parent via
 * `activeIndex` (null when closed). Handles Escape / arrow-key
 * navigation and locks page scroll while open.
 */
export default function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const isOpen = activeIndex !== null && activeIndex !== undefined;

  const handleKey = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey, isOpen]);

  const item = isOpen ? items[activeIndex] : null;

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/95 backdrop-blur-md px-4 sm:px-10"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-6 right-6 sm:top-8 sm:right-10 flex items-center justify-center w-11 h-11 rounded-full border border-cream/25 text-cream hover:border-caramel-light hover:text-caramel-light transition-colors duration-300"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous image"
            className="hidden sm:flex absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 items-center justify-center w-11 h-11 rounded-full border border-cream/25 text-cream hover:border-caramel-light hover:text-caramel-light transition-colors duration-300"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="hidden sm:flex absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 items-center justify-center w-11 h-11 rounded-full border border-cream/25 text-cream hover:border-caramel-light hover:text-caramel-light transition-colors duration-300"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>

          <motion.figure
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[82vh] flex flex-col items-center"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[72vh] w-auto max-w-full object-contain rounded-image shadow-2xl"
            />
            <figcaption className="mt-5 eyebrow text-cream/70">{item.caption}</figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
