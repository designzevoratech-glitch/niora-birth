"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Heart, ArrowRight } from "lucide-react";

export default function Scene3Guide() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const yText = useTransform(scrollYProgress, [0.15, 0.6], [50, 0]);
  const opacityText = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const yBadge = useTransform(scrollYProgress, [0.35, 0.75], [30, 0]);
  const opacityBadge = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[120vh] min-h-[860px] flex items-center overflow-hidden bg-[#F7F0E9]"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
      >
        <Image
          src="/scene3-bg.png"
          alt="Caring consultation environment at Niora Birth"
          fill
          className="object-cover object-right lg:object-[78%_center]"
          quality={95}
        />
        {/* Left fade for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F0E9]/98 via-[#F7F0E9]/80 to-transparent z-10" />
        {/* Top and bottom fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F0E9]/90 via-transparent to-[#F7F0E9]/90 z-10" />
      </motion.div>

      {/* Text content — safe left zone */}
      <div className="relative z-20 w-full max-w-[1380px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="w-full max-w-[540px] flex flex-col gap-7 pt-12"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-mauve-rose" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-mauve-rose">
              Our Care Philosophy
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-[38px] md:text-[52px] lg:text-[60px] text-plum-deep leading-[1.08] font-bold tracking-tight">
            Science meets{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              profound empathy.
            </span>
          </h2>

          {/* Body */}
          <p className="text-[17px] md:text-[18px] text-charcoal-text/75 font-light leading-[1.8] max-w-[460px]">
            We believe fertility guidance must be paired with genuine human connection. Our consultation team listens, explains treatment options simply, and connects you with qualified fertility specialists and accredited partner hospitals.
          </p>

          {/* Two trust points */}
          <div className="flex flex-col gap-4">
            {[
              { icon: ShieldCheck, text: "Confidential & transparent at every step" },
              { icon: Heart, text: "Emotional support woven into every consultation" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blush-pink to-mauve-rose/60 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-plum-deep" />
                  </div>
                  <span className="text-[15px] text-charcoal-text/80 font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA button — properly linked */}
          <div className="pt-3">
            <Link href="/about">
              <button className="group inline-flex items-center gap-2.5 h-[54px] px-[32px] rounded-full border-2 border-plum-deep/20 bg-white/55 backdrop-blur-md text-plum-deep text-[15px] font-semibold hover:bg-white hover:border-plum-deep/35 hover:-translate-y-[2px] transition-all duration-300 shadow-sm hover:shadow-md">
                Meet Our Care Team
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Floating care badge — bottom right of text block */}
        <motion.div
          style={{ y: yBadge, opacity: opacityBadge }}
          className="absolute bottom-[12%] right-[8%] md:right-[35%] glass rounded-2xl p-5 shadow-xl max-w-[220px]"
        >
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mauve-rose to-plum-deep flex items-center justify-center text-white mb-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="font-serif text-sm font-semibold text-plum-deep">Fully Confidential</p>
            <p className="text-xs text-charcoal-text/65 leading-relaxed">
              Your privacy is protected. All consultations are strictly confidential.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
