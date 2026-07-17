import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";

const EASE = [0.16, 1, 0.3, 1];

const HOURS = [
  { day: "Monday — Friday", time: "9:00 AM – 10:00 PM" },
  { day: "Saturday — Sunday", time: "10:00 AM – 11:00 PM" }
];

const INFO_CARDS = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["12 Cocoa Lane, Clifton", "Karachi, Pakistan"]
  },
  {
    icon: Clock,
    label: "Opening Hours",
    lines: HOURS.map((h) => `${h.day} — ${h.time}`)
  },
  {
    icon: Phone,
    label: "Reach Us",
    lines: ["+92 300 123 4567", "hello@melthouse.com"]
  }
];

export default function VisitUs() {
  return (
    <section id="visit" className="relative bg-cream py-28 sm:py-40">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading eyebrow="Visit Us" title="Come sit in the warmth for a while." className="mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-7 relative rounded-2xl overflow-hidden min-h-[420px] border border-espresso/10 shadow-[0_1px_2px_rgba(44,26,16,0.05)]"
          >
            <iframe
              title="Melt House location on Google Maps"
              src="https://www.google.com/maps?q=Clifton,Karachi,Pakistan&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="flex gap-5 rounded-2xl border border-espresso/8 bg-white/60 backdrop-blur-sm px-7 py-6 shadow-[0_1px_2px_rgba(44,26,16,0.04)] hover:shadow-[0_20px_40px_-16px_rgba(44,26,16,0.16)] hover:border-caramel/30 transition-shadow duration-500"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-caramel/35 text-caramel shrink-0">
                  <card.icon size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="eyebrow text-espresso/45 mb-2.5">{card.label}</p>
                  {card.lines.map((line) => (
                    <p key={line} className="font-light text-espresso/80 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            <Button
              href="https://www.google.com/maps?q=Clifton,Karachi,Pakistan"
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className="mt-1 w-full sm:w-auto self-start"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
