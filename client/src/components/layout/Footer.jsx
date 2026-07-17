import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../../config/navigation.js";
import images from "../../assets/images/index.js";

const EASE = [0.16, 1, 0.3, 1];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" }
];

export default function Footer() {
  return (
    <footer className="relative bg-espresso text-cream">
      <div className="mx-auto max-w-content px-6 sm:px-10 pt-24 sm:pt-28 pb-10">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 pb-16 mb-16 border-b border-cream/10"
        >
          <div>
            <span className="w-1.5 h-1.5 rounded-full bg-caramel-light inline-block mb-5" />
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-tight max-w-md">
              Ready for something warm?
            </h2>
          </div>
          <Link
            to="/#visit"
            className="group inline-flex items-center gap-3 self-start sm:self-auto rounded-full border border-cream/30 px-7 py-3.5 text-sm tracking-wide hover:border-caramel-light hover:text-caramel-light transition-colors duration-300"
          >
            Plan Your Visit
            <ArrowUpRight size={16} strokeWidth={1.6} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-14">
          <div>
            <img src={images.logo} alt="Melt House" className="h-16 w-auto mb-7 brightness-0 invert opacity-90" />
            <p className="text-cream/55 font-light leading-relaxed max-w-xs">
              Handmade cookies, baked in small batches every morning. A quiet corner for warm
              butter, real chocolate, and a little happiness.
            </p>
          </div>

          <div>
            <p className="eyebrow text-caramel-light mb-6">Explore</p>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-cream/70 hover:text-caramel-light transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-caramel-light mb-6">The House</p>
            <ul className="space-y-3.5 text-cream/70 font-light">
              <li>12 Cocoa Lane, Clifton</li>
              <li>Karachi, Pakistan</li>
              <li className="pt-2 text-cream/50 text-sm">Open Daily — 9am to 10pm</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-caramel-light mb-6">Stay Close</p>
            <p className="text-cream/70 font-light mb-6 leading-relaxed">
              hello@melthouse.com
              <br />
              +92 300 123 4567
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`Melt House on ${social.label}`}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-caramel-light hover:text-caramel-light transition-colors duration-300"
                >
                  <social.icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40 tracking-wide">
          <p>&copy; {new Date().getFullYear()} Melt House. All rights reserved.</p>
          <p className="italic font-display text-sm text-cream/50">Freshly Baked Happiness — Every Single Day.</p>
        </div>
      </div>
    </footer>
  );
}
