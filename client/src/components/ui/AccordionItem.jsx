import { useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  const panelId = useId();

  return (
    <div className="border-b border-espresso/15">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left group"
        >
          <span className="font-display text-2xl sm:text-3xl font-normal text-espresso group-hover:text-caramel transition-colors duration-300">
            {question}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-espresso/25 text-espresso group-hover:border-caramel group-hover:text-caramel transition-colors duration-300"
          >
            <Plus size={16} strokeWidth={1.75} />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-12 text-espresso/70 font-light leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
