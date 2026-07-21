import { forwardRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-espresso text-cream border border-espresso hover:border-caramel shadow-[0_1px_2px_rgba(44,26,16,0.08)] hover:shadow-[0_8px_28px_-8px_rgba(44,26,16,0.28)]",
  inverted:
    "bg-cream text-espresso border border-cream hover:border-caramel shadow-[0_1px_2px_rgba(44,26,16,0.06)] hover:shadow-[0_8px_28px_-8px_rgba(44,26,16,0.18)]",
  outline:
    "bg-transparent border border-current hover:bg-current/10 shadow-none hover:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.15)]"
};

const fillClasses = {
  primary: "bg-caramel",
  inverted: "bg-caramel",
  outline: "bg-current/10"
};

const textHoverClasses = {
  primary: "group-hover:text-espresso",
  inverted: "group-hover:text-espresso",
  outline: ""
};

const Button = forwardRef(function Button(
  { children, href, variant = "primary", className = "", icon: Icon, type = "button", ...props },
  ref
) {
  const classes = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 sm:px-8 py-3 sm:py-3.5 text-sm tracking-[0.02em] transition-all duration-400 ease-melt focus-visible:outline-caramel ${variants[variant]} ${className}`;

  const content = (
    <>
      <span
        className={`absolute inset-0 scale-x-0 origin-left transition-transform duration-400 ease-melt group-hover:scale-x-100 ${fillClasses[variant]}`}
        aria-hidden="true"
      />
      <span
        className={`relative z-10 flex items-center gap-2 transition-colors duration-400 ease-melt ${textHoverClasses[variant]}`}
      >
        {children}
        {Icon && <Icon size={16} strokeWidth={1.6} aria-hidden="true" />}
      </span>
    </>
  );

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      ref={ref}
      href={href}
      type={href ? undefined : type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={classes}
      {...props}
    >
      {content}
    </MotionTag>
  );
});

export default Button;
