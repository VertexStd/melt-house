import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../config/navigation.js";
import logoNav from "../../assets/images/logo-nav.png";
import logoNav2x from "../../assets/images/logo-nav@2x.png";

const EASE = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-melt ${
        solid ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(44,26,16,0.07)]" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-content items-center justify-between px-6 sm:px-10 transition-all duration-500 ease-melt ${
          solid ? "py-3" : "py-6"
        }`}
      >
        <Link
          to="/"
          className="group flex shrink-0 items-center self-center rounded-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-label="Melt House home"
        >
          <motion.div
            animate={{ height: solid ? 40 : 52 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex items-center justify-center overflow-hidden rounded-[15px] bg-[#F8F2EA] px-2.5 shadow-[0_3px_18px_rgba(44,26,16,0.08),0_1px_4px_rgba(44,26,16,0.04)] ring-1 ring-espresso/[0.04] transition-transform duration-200 ease-out will-change-transform transform-gpu group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
          >
            <img
              src={logoNav}
              srcSet={`${logoNav} 1x, ${logoNav2x} 2x`}
              sizes="68px"
              alt="Melt House"
              width={133}
              height={104}
              decoding="async"
              fetchPriority="high"
              className="block h-full w-auto max-w-none select-none object-contain [image-rendering:-webkit-optimize-contrast]"
            />
          </motion.div>
        </Link>

        <ul className="hidden md:flex items-center gap-11">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`group relative eyebrow pb-1 transition-colors duration-300 ${
                  solid ? "text-espresso hover:text-caramel" : "text-cream hover:text-caramel-light"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-400 ease-melt ${
                    solid ? "bg-caramel" : "bg-caramel-light"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/#visit"
          className={`hidden md:inline-flex items-center rounded-full border px-6 py-2.5 text-sm tracking-wide transition-colors duration-300 ${
            solid
              ? "border-espresso text-espresso hover:bg-espresso hover:text-cream"
              : "border-cream text-cream hover:bg-cream hover:text-espresso"
          }`}
        >
          Visit Us
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${
            solid ? "border-espresso text-espresso" : "border-cream text-cream"
          }`}
        >
          {open ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="md:hidden bg-cream border-t border-espresso/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-8 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="block py-3 font-display text-3xl text-espresso hover:text-caramel transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4">
                <Link
                  to="/#visit"
                  className="inline-flex items-center rounded-full border border-espresso px-6 py-2.5 text-sm tracking-wide text-espresso"
                >
                  Visit Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
