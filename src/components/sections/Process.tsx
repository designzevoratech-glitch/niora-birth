"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Clock } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Guidance Consultation",
    timeframe: "30-Min Guidance Conversation",
    description: "Connect with our care team to discuss your history, concerns, and goals in a warm, confidential setting. Plain-language answers with zero pressure.",
    accent: "from-blush-pink to-mauve-rose",
  },
  {
    number: "02",
    title: "Specialist Connection & Assessment",
    timeframe: "Partner Center Evaluation",
    description: "We connect you with qualified fertility specialists and accredited partner hospitals for in-depth diagnostic testing and clinical evaluations.",
    accent: "from-mauve-rose to-plum-deep",
  },
  {
    number: "03",
    title: "Treatment Protocol Selection",
    timeframe: "Specialist Recommendation",
    description: "Experienced medical specialists review your diagnostic results and recommend the most effective treatment protocol tailored to your body.",
    accent: "from-plum-deep to-mauve-rose",
  },
  {
    number: "04",
    title: "Ongoing Patient Advocacy",
    timeframe: "Every Journey Milestone",
    description: "Continuous coordination support, appointment scheduling assistance, and compassionate guidance throughout your care at partner centers.",
    accent: "from-mauve-rose to-blush-pink",
  },
];

// Individual desktop step component
function StepItem({
  step,
  index,
  isEven,
}: {
  step: (typeof steps)[0];
  index: number;
  isEven: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 40 : -40 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-12`}
    >
      {/* LEFT — content or spacer */}
      {!isEven ? (
        <div className="bg-white rounded-2xl p-7 border border-cream-bg shadow-sm hover:border-mauve-rose/40 hover:shadow-lg transition-all duration-400 group">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-mauve-rose">Step {step.number}</span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-pink/25 text-plum-deep text-[11.5px] font-bold">
              <Clock className="w-3 h-3 text-mauve-rose" />
              <span>{step.timeframe}</span>
            </div>
          </div>
          <h3 className="font-display text-[22px] md:text-[25px] font-bold text-plum-deep mb-3 leading-tight group-hover:text-mauve-rose transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-[15px] text-charcoal-text/80 leading-relaxed font-normal">{step.description}</p>
        </div>
      ) : (
        <div className="hidden md:flex justify-end">
          <div className="font-display text-[80px] md:text-[96px] font-black text-plum-deep/[0.06] leading-none select-none">
            {step.number}
          </div>
        </div>
      )}

      {/* CENTER — Circle node */}
      <div className="flex justify-center">
        <motion.div
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-[0_4px_24px_rgba(193,122,138,0.35)] flex-shrink-0 relative z-10 border-2 border-white`}
        >
          <span className="font-display text-[18px] md:text-[22px] font-black text-white">
            {step.number}
          </span>
        </motion.div>
      </div>

      {/* RIGHT — spacer or content */}
      {isEven ? (
        <div className="bg-white rounded-2xl p-7 border border-cream-bg shadow-sm hover:border-mauve-rose/40 hover:shadow-lg transition-all duration-400 group">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-mauve-rose">Step {step.number}</span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-pink/25 text-plum-deep text-[11.5px] font-bold">
              <Clock className="w-3 h-3 text-mauve-rose" />
              <span>{step.timeframe}</span>
            </div>
          </div>
          <h3 className="font-display text-[22px] md:text-[25px] font-bold text-plum-deep mb-3 leading-tight group-hover:text-mauve-rose transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-[15px] text-charcoal-text/80 leading-relaxed font-normal">{step.description}</p>
        </div>
      ) : (
        <div className="hidden md:flex justify-start">
          <div className="font-display text-[80px] md:text-[96px] font-black text-plum-deep/[0.06] leading-none select-none">
            {step.number}
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Mobile step item
function MobileStepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div
        className={`absolute -left-[54px] top-4 w-10 h-10 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-md border-2 border-white`}
      >
        <span className="font-display text-[13px] font-black text-white">{step.number}</span>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-cream-bg shadow-sm hover:border-mauve-rose/30 transition-all duration-400">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-pink/25 text-plum-deep text-[11px] font-bold mb-2.5">
          <Clock className="w-3 h-3 text-mauve-rose" />
          <span>{step.timeframe}</span>
        </div>
        <h3 className="font-display text-[20px] font-bold text-plum-deep mb-2">{step.title}</h3>
        <p className="text-[14px] text-charcoal-text/80 leading-relaxed font-normal">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 md:py-40 bg-cream-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush-pink/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-[1px] w-10 bg-mauve-rose/50" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-mauve-rose">
              How We Work
            </span>
            <div className="h-[1px] w-10 bg-mauve-rose/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[34px] sm:text-[46px] md:text-[54px] text-plum-deep font-bold tracking-tight leading-[1.08] max-w-[620px] mx-auto"
          >
            Your journey,{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              step by step.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-5 text-[15.5px] sm:text-[17px] text-charcoal-text/75 max-w-[520px] mx-auto leading-relaxed"
          >
            A compassionate, transparent 4-step approach — so you always know where you stand and what comes next.
          </motion.p>
        </div>

        {/* Steps with animated vertical connector */}
        <div className="relative">
          {/* Animated vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-mauve-rose/15 overflow-hidden rounded-full">
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="w-full h-full bg-gradient-to-b from-blush-pink via-mauve-rose to-plum-deep origin-top rounded-full"
            />
          </div>

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-8 top-8 bottom-8 w-[2px] bg-mauve-rose/20 overflow-hidden rounded-full">
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="w-full h-full bg-gradient-to-b from-blush-pink via-mauve-rose to-plum-deep origin-top rounded-full"
            />
          </div>

          {/* Mobile layout: vertical stack */}
          <div className="md:hidden flex flex-col gap-10 pl-16 sm:pl-20">
            {steps.map((step, index) => (
              <MobileStepItem key={step.number} step={step} index={index} />
            ))}
          </div>

          {/* Desktop: Zigzag layout */}
          <div className="hidden md:flex flex-col gap-14">
            {steps.map((step, index) => (
              <StepItem key={step.number} step={step} index={index} isEven={index % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

