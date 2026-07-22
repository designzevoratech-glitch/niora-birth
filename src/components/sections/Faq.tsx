"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const faqs = [
  {
    question: "What is Niora Birth's role in my fertility journey?",
    answer:
      "Niora Birth is a fertility consultation and patient guidance platform. We help you understand fertility challenges, explain treatment options in plain language, and connect you with qualified fertility specialists and accredited partner hospitals for clinical diagnostics and procedures.",
  },
  {
    question: "Does Niora Birth perform medical procedures directly?",
    answer:
      "No. All clinical evaluations, medical diagnoses, and procedures (such as IVF, IUI, ICSI, or egg retrievals) are performed exclusively by qualified fertility specialists and medical teams at accredited partner hospitals.",
  },
  {
    question: "What happens during my initial guidance consultation?",
    answer:
      "Your first consultation is a relaxed, 1-on-1 conversation with our patient guidance team. We listen to your concerns, review past medical reports if available, and outline initial guidance steps — with zero pressure.",
  },
  {
    question: "What support do you offer for out-of-state and NRI patients?",
    answer:
      "We offer virtual pre-consultations, coordinate preliminary testing with your local physician, and assist with appointment scheduling and travel guidance when visiting partner centers in Kerala.",
  },
  {
    question: "How are treatment decisions made?",
    answer:
      "Treatment decisions and clinical recommendations are made strictly by experienced, qualified fertility specialists after conducting thorough clinical diagnostics.",
  },
];

function FaqItem({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "rounded-2xl border-2 overflow-hidden transition-all duration-350",
        isOpen
          ? "border-mauve-rose/50 bg-white shadow-[0_4px_24px_rgba(193,122,138,0.12)]"
          : "border-cream-bg bg-white hover:border-blush-pink/70 hover:shadow-sm"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex justify-between items-start gap-4 focus:outline-none"
        id={`faq-${index}`}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          <span
            className={cn(
              "font-display text-[12px] font-bold tracking-[0.12em] mt-0.5 transition-colors duration-300 flex-shrink-0",
              isOpen ? "text-mauve-rose" : "text-charcoal-text/30"
            )}
          >
            Q{String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={cn(
              "font-serif text-[16px] md:text-[17px] font-semibold leading-snug transition-colors duration-300",
              isOpen ? "text-plum-deep" : "text-charcoal-text"
            )}
          >
            {faq.question}
          </h3>
        </div>

        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300",
            isOpen
              ? "bg-gradient-to-br from-mauve-rose to-plum-deep text-white shadow-md"
              : "bg-cream-bg text-plum-deep/60"
          )}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 pt-0 pl-[60px]">
              <p className="text-[15px] text-charcoal-text/65 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-36 bg-cream-bg relative overflow-hidden">
      {/* Decorative large text watermark */}
      <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-display font-black text-[20vw] text-plum-deep/[0.025] select-none pointer-events-none leading-none">
        FAQ
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">

          {/* LEFT: Sticky callout column */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-10 bg-mauve-rose" />
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-mauve-rose">
                  Common Questions
                </span>
              </div>

              <h2 className="font-display text-[34px] md:text-[44px] lg:text-[50px] text-plum-deep font-bold tracking-tight leading-[1.08] mb-6">
                Answers to help you{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  move forward.
                </span>
              </h2>

              <p className="text-[16px] text-charcoal-text/65 leading-relaxed mb-10">
                We know this journey can feel overwhelming. These are the questions families most often ask us — answered with honesty.
              </p>

              {/* CTA card */}
              <div className="p-6 rounded-2xl bg-white border border-cream-bg shadow-sm">
                <p className="font-serif text-[15px] text-plum-deep font-semibold mb-2">
                  Still have questions?
                </p>
                <p className="text-[14px] text-charcoal-text/60 leading-relaxed mb-5">
                  Our team is always happy to talk — no question is too small or too personal.
                </p>
                <Link href="https://wa.me/917994892509" target="_blank">
                  <button className="w-full flex items-center justify-center gap-2.5 h-[46px] rounded-xl bg-gradient-to-r from-mauve-rose to-plum-deep text-white text-[14px] font-semibold hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
