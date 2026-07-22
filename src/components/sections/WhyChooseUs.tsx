"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HeartPulse, ShieldCheck, Stethoscope, Users } from "lucide-react";

// ─── Animated Counter Hook ───────────────────────────────────────────────────
function useCounter(end: number, duration: number = 2.2) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = Date.now();
    const durationMs = duration * 1000;

    const frame = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [isInView, end, duration]);

  return { ref, value };
}

// ─── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({
  end,
  suffix,
  label,
  description,
  delay,
}: {
  end: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
}) {
  const { ref, value } = useCounter(end);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-1 px-6 py-6 rounded-2xl bg-white border border-cream-bg hover:border-blush-pink/60 hover:shadow-lg transition-all duration-400 group"
    >
      <div className="font-display text-[48px] md:text-[56px] font-bold leading-none tracking-tight text-plum-deep group-hover:text-mauve-rose transition-colors duration-300">
        {value}
        <span
          className="italic"
          style={{
            background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {suffix}
        </span>
      </div>
      <div className="font-semibold text-[15px] text-plum-deep/80 mt-1">{label}</div>
      <div className="text-sm text-charcoal-text/55 leading-relaxed">{description}</div>
    </motion.div>
  );
}

// ─── Feature Card ────────────────────────────────────────────────────────────
const features = [
  {
    icon: Stethoscope,
    title: "Expert Guidance",
    description: "Over a decade of experience helping couples understand fertility challenges and navigate treatment options with clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Advice",
    description: "No misleading claims, no confusing jargon. Complete honesty and patient advocacy at every step.",
  },
  {
    icon: HeartPulse,
    title: "Accredited Partners",
    description: "Connecting you with vetted fertility specialists and accredited partner centers for clinical evaluations and procedures.",
  },
  {
    icon: Users,
    title: "Personalized Support",
    description: "You are never just a number. Every consultation is uniquely tailored to your specific diagnosis and goals.",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex gap-5 p-6 rounded-2xl bg-white border border-cream-bg hover:border-mauve-rose/30 hover:shadow-lg transition-all duration-400 overflow-hidden"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-mauve-rose to-blush-pink rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blush-pink/40 to-mauve-rose/20 flex items-center justify-center text-mauve-rose flex-shrink-0 group-hover:from-mauve-rose group-hover:to-plum-deep group-hover:text-white transition-all duration-400">
        <Icon className="w-5.5 h-5.5" style={{ width: 22, height: 22 }} />
      </div>
      <div>
        <h3 className="font-serif text-[17px] font-semibold text-plum-deep mb-2">{feature.title}</h3>
        <p className="text-[14px] text-charcoal-text/65 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
const stats = [
  { end: 500, suffix: "+", label: "Families Guided", description: "Families who found their path to parenthood with us" },
  { end: 15, suffix: "+", label: "Years of Excellence", description: "Dedicated years of trusted fertility care in Kerala" },
  { end: 98, suffix: "%", label: "Satisfaction Rate", description: "Patients who rate their experience as excellent" },
  { end: 3, suffix: "", label: "States Served", description: "Kerala, Tamil Nadu & Bangalore — reaching families everywhere" },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-cream-bg relative overflow-hidden section-glow">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blush-pink/12 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mauve-rose/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-[1px] w-10 bg-mauve-rose/50" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-mauve-rose">
              Why Families Choose Us
            </span>
            <div className="h-[1px] w-10 bg-mauve-rose/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[36px] md:text-[50px] lg:text-[58px] text-plum-deep font-bold tracking-tight leading-[1.08] max-w-[680px]"
          >
            Built around{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              your journey,
            </span>{" "}
            not ours.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-[17px] text-charcoal-text/65 max-w-[560px] leading-relaxed"
          >
            We built Niora around one belief — that clinical excellence and human warmth are not opposites. They are inseparable.
          </motion.p>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
