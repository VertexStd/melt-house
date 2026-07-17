import { forwardRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary: "bg-espresso text-cream border border-espresso hover:border-caramel",
  inverted: "bg-cream text-espresso border border-cream hover:border-caramel",
  outline: "bg-transparent border border-current hover:bg-current/10"
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

/**
 * Shared pill button with a refined "fill sweep" hover treatment —
 * a soft caramel layer that expands from center rather than an
 * abrupt color swap. Renders as an <a> when `href` is given,
 * otherwise as a <button>, so it works for both navigation and
 * form actions while keeping one premium visual language.
 */
const Button = forwardRef(function Button(
  { children, href, variant = "primary", className = "", icon: Icon, type = "button", ...props },
  ref
) {
  const classes = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm tracking-wide transition-colors duration-500 ease-melt ${variants[variant]} ${className}`;

  const content = (
    <>
      <span
        className={`absolute inset-0 scale-x-0 origin-left transition-transform duration-500 ease-melt group-hover:scale-x-100 ${fillClasses[variant]}`}
        aria-hidden="true"
      />
      <span
        className={`relative z-10 flex items-center gap-2 transition-colors duration-500 ${textHoverClasses[variant]}`}
      >
        {children}
        {Icon && <Icon size={16} strokeWidth={1.6} />}
      </span>
    </>
  );

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      ref={ref}
      href={href}
      type={href ? undefined : type}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...props}
    >
      {content}
    </MotionTag>
  );
});

export default Button;
