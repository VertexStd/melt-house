import { useState } from "react";
import SectionHeading from "../ui/SectionHeading.jsx";
import AccordionItem from "../ui/AccordionItem.jsx";

const FAQS = [
  {
    question: "Are your cookies baked fresh every day?",
    answer:
      "Yes — every tray is mixed and baked the same day it's sold. We bake in small batches through the day rather than stocking up in advance, so there's always something warm coming out of the oven."
  },
  {
    question: "Do you cater for events or bulk orders?",
    answer:
      "We do. Reach out through our contact form with your event date, guest count, and preferred flavors, and our team will get back to you with options and lead times."
  },
  {
    question: "Can I customize a cookie box for a gift?",
    answer:
      "Absolutely. Our boxes can be arranged with a mix of flavors and a handwritten note card. Visit the House or send us a message and we'll help you put one together."
  },
  {
    question: "Do you offer gluten-free or eggless options?",
    answer:
      "We currently offer a small selection of eggless cookies, available daily at the counter. Ask our team when you visit, or check with us in advance through the contact form."
  },
  {
    question: "How long do Melt House cookies stay fresh?",
    answer:
      "Best enjoyed within 2 days at room temperature in an airtight container, or up to a week refrigerated. A few seconds in a warm oven brings them right back to fresh-baked softness."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="relative bg-cream-soft py-section sm:py-section-lg">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <SectionHeading
              eyebrow="FAQs"
              title="Good to know before you visit."
              supporting="Can't find your answer here? Our team is always happy to help — just send us a note."
            />
          </div>

          <div className="lg:col-span-8">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
