import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const initialForm = { name: "", email: "", message: "" };
const EASE = [0.16, 1, 0.3, 1];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in every field before sending.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative bg-espresso text-cream py-28 sm:py-40">
      <div className="grain relative mx-auto max-w-content px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title="Say hello, or tell us your favorite flavor."
              tone="dark"
              supporting="Whether it's a question, a bulk order, or just a kind word — we read every message."
            />

            <div className="mt-14 space-y-5 font-light text-cream/70">
              <p className="pb-5 border-b border-cream/10">hello@melthouse.com</p>
              <p className="pb-5 border-b border-cream/10">+92 300 123 4567</p>
              <p>12 Cocoa Lane, Clifton, Karachi</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="eyebrow text-cream/50 mb-3 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-cream/25 py-3.5 text-cream text-lg font-light placeholder:text-cream/25 focus:border-caramel-light outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow text-cream/50 mb-3 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-cream/25 py-3.5 text-cream text-lg font-light placeholder:text-cream/25 focus:border-caramel-light outline-none transition-colors duration-300"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow text-cream/50 mb-3 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-cream/25 py-3.5 text-cream text-lg font-light placeholder:text-cream/25 focus:border-caramel-light outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-3">
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-cream text-espresso px-9 py-4 text-sm tracking-wide transition-opacity duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 scale-x-0 origin-left bg-caramel transition-transform duration-500 ease-melt group-hover:scale-x-100" />
                  <span className="relative z-10 flex items-center gap-2">
                    {status === "loading" ? (
                      <>
                        Sending <Loader2 size={16} className="animate-spin" strokeWidth={1.6} />
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} strokeWidth={1.6} />
                      </>
                    )}
                  </span>
                </motion.button>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="flex items-center gap-2 text-caramel-light text-sm"
                    >
                      <CheckCircle2 size={16} /> Message sent — thank you!
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="flex items-center gap-2 text-burgundy-light text-sm"
                    >
                      <AlertCircle size={16} /> {errorMsg}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
