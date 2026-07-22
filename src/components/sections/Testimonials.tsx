"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Priya & Arun S.",
    location: "Kochi, Kerala",
    avatar: "PA",
    situation: "Unexplained Infertility — 3 years",
    story:
      "Three years. Every month felt like a heartbreak. We didn't even know where to begin looking for help. Our first call to Niora Birth was the turning point. They spoke to us like family — no medical jargon, no rush. Within six months, we were holding our daughter.",
    result: "IVF — First Attempt Success",
    stars: 5,
  },
  {
    name: "Lakshmi T.",
    location: "Coimbatore, Tamil Nadu",
    avatar: "LT",
    situation: "PCOS & Low AMH",
    story:
      "I had been told by three different doctors that my chances were very low because of PCOS and low AMH. I was devastated. A friend told me about Niora. Their team didn't give up on me. They explained every step, every decision. Today my son is 2 years old.",
    result: "IUI followed by IVF — Success",
    stars: 5,
  },
  {
    name: "Deepa & Rahul K.",
    location: "Bangalore, Karnataka",
    avatar: "DR",
    situation: "Male Factor Infertility",
    story:
      "We travelled from Bangalore because we had heard so much about Niora's care and transparency. What stood out was how they treated us — not as patients, but as people with a real dream. The staff remembered our names every visit. We're now expecting twins.",
    result: "ICSI — Expecting Twins",
    stars: 5,
  },
  {
    name: "Meera V.",
    location: "Thrissur, Kerala",
    avatar: "MV",
    situation: "Secondary Infertility",
    story:
      "We had our first child naturally but struggled for 4 years to have a second. I didn't even know secondary infertility was a real thing. Niora Birth made me feel seen and understood. They never dismissed how I felt. Our rainbow baby arrived last year.",
    result: "IUI — Second Baby",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section className="py-24 md:py-36 bg-[#FAF3EE] relative overflow-hidden">
      {/* Ambient decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-mauve-rose/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blush-pink/12 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-[1px] w-10 bg-mauve-rose/50" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-mauve-rose">
              Real Families. Real Stories.
            </span>
            <div className="h-[1px] w-10 bg-mauve-rose/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[34px] md:text-[48px] lg:text-[54px] text-plum-deep font-bold tracking-tight leading-[1.1] max-w-[640px] mx-auto"
          >
            Families who trusted us{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              and found their way.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[16px] text-charcoal-text/60 max-w-[480px] mx-auto leading-relaxed"
          >
            These are real journeys from real people — just like you.
          </motion.p>
        </div>

        {/* Testimonial carousel */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center"
            >
              {/* Avatar column */}
              <div className="flex flex-row lg:flex-col items-center gap-5 lg:gap-5">
                {/* Avatar circle */}
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-mauve-rose to-plum-deep flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="font-display text-[22px] lg:text-[30px] font-bold text-white">
                    {active.avatar}
                  </span>
                </div>
                <div className="lg:text-center">
                  <p className="font-serif text-[17px] font-semibold text-plum-deep leading-snug">{active.name}</p>
                  <p className="text-[13px] text-charcoal-text/55 mt-0.5">{active.location}</p>
                  <div className="mt-2">
                    <StarRating count={active.stars} />
                  </div>
                </div>
              </div>

              {/* Content column */}
              <div className="bg-white rounded-3xl p-7 md:p-10 shadow-[0_4px_40px_rgba(61,31,61,0.08)] border border-cream-bg relative">
                {/* Situation tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blush-pink/25 text-plum-deep text-[12px] font-semibold mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-mauve-rose" />
                  {active.situation}
                </div>

                {/* Quote icon */}
                <Quote className="w-8 h-8 text-blush-pink absolute top-8 right-8 opacity-60" />

                {/* Story */}
                <p className="font-serif text-[17px] md:text-[19px] text-charcoal-text/85 leading-[1.8] mb-6 italic">
                  &ldquo;{active.story}&rdquo;
                </p>

                {/* Result badge */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-cream-bg">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[13.5px] font-semibold text-plum-deep/80">{active.result}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border-2 border-mauve-rose/30 bg-white hover:bg-mauve-rose hover:text-white hover:border-mauve-rose text-mauve-rose flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === activeIndex
                      ? "w-7 h-2.5 bg-mauve-rose"
                      : "w-2.5 h-2.5 bg-mauve-rose/30 hover:bg-mauve-rose/60"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border-2 border-mauve-rose/30 bg-white hover:bg-mauve-rose hover:text-white hover:border-mauve-rose text-mauve-rose flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Story count */}
          <p className="text-center text-[12px] text-charcoal-text/40 mt-4">
            {activeIndex + 1} of {testimonials.length} stories
          </p>
        </div>
      </div>
    </section>
  );
}
