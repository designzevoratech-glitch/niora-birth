"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { Heart, Quote } from "lucide-react";

export default function Scene2Understanding() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Left text animations
  const opacity1 = useTransform(scrollYProgress, [0.15, 0.40], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0.15, 0.40], [30, 0]);
  const blurVal1 = useTransform(scrollYProgress, [0.15, 0.40], [12, 0]);
  const filter1 = useMotionTemplate`blur(${blurVal1}px)`;

  const opacity2 = useTransform(scrollYProgress, [0.30, 0.55], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.30, 0.55], [30, 0]);
  const blurVal2 = useTransform(scrollYProgress, [0.30, 0.55], [12, 0]);
  const filter2 = useMotionTemplate`blur(${blurVal2}px)`;

  const lineWidth = useTransform(scrollYProgress, [0.38, 0.62], ["0%", "100%"]);

  // Right image parallax
  const yImage = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacityImage = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  // Ambient orbs
  const orb1X = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const orb2X = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[110vh] bg-[#F9F2EC] overflow-hidden flex items-center"
    >
      {/* Ambient orbs */}
      <motion.div
        style={{ x: orb1X }}
        className="absolute top-[-5%] left-[-8%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] bg-[#EDD9C8]/50 blur-[160px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ x: orb2X }}
        className="absolute bottom-0 right-[-8%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] bg-blush-pink/15 blur-[180px] rounded-full pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center py-16 sm:py-24 lg:py-32">

        {/* LEFT: Animated text */}
        <div className="flex flex-col gap-6 sm:gap-9 lg:pr-8">
          {/* Eyebrow */}
          <motion.div
            style={{ opacity: opacity1 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-10 sm:w-12 bg-gradient-to-r from-mauve-rose to-transparent" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-mauve-rose">
              Understanding Your Journey
            </span>
          </motion.div>

          {/* Primary statement */}
          <motion.h2
            style={{ opacity: opacity1, y: y1, filter: filter1 }}
            className="font-display text-[30px] sm:text-[44px] md:text-[52px] lg:text-[62px] text-plum-deep leading-[1.1] font-bold tracking-tight"
          >
            Every journey to{" "}
            <br className="hidden sm:block" />
            parenthood{" "}
            <span
              className="italic font-semibold"
              style={{
                background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              is unique.
            </span>
          </motion.h2>

          {/* Animated divider */}
          <div className="overflow-hidden h-[1.5px] rounded-full">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-mauve-rose to-blush-pink"
            />
          </div>

          {/* Secondary statement */}
          <motion.p
            style={{ opacity: opacity2, y: y2, filter: filter2 }}
            className="font-serif text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-mauve-rose leading-[1.22] font-normal italic tracking-tight"
          >
            You don&apos;t have to walk it alone.
          </motion.p>

          {/* Supporting body */}
          <motion.p
            style={{ opacity: opacity2, y: y2 }}
            className="text-[15.5px] sm:text-[17px] text-charcoal-text/80 font-normal leading-[1.8] max-w-[460px]"
          >
            From your very first question to your most hopeful milestone — we are beside you, every step of the way, with expertise and genuine care.
          </motion.p>

          {/* Small trust indicators */}
          <motion.div
            style={{ opacity: opacity2 }}
            className="flex items-center gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mauve-rose to-plum-deep flex items-center justify-center">
                <Heart className="w-3.5 h-3.5 text-white" fill="white" />
              </div>
              <span className="text-sm font-bold text-plum-deep">500+ Families</span>
            </div>
            <div className="h-4 w-[1px] bg-charcoal-text/20" />
            <span className="text-xs sm:text-sm text-charcoal-text/75 font-medium">Guided with care</span>
          </motion.div>
        </div>

        {/* RIGHT: Image with overlays */}
        <motion.div
          style={{ y: yImage, opacity: opacityImage }}
          className="relative flex justify-center lg:justify-end items-center mt-4 lg:mt-0"
        >
          {/* Decorative rings behind image */}
          <div className="absolute -top-6 -right-6 w-52 h-52 rounded-full border border-mauve-rose/20 pointer-events-none hidden sm:block" />
          <div className="absolute -bottom-4 -left-4 w-36 h-36 rounded-full border-2 border-dashed border-blush-pink/30 pointer-events-none hidden sm:block" />

          {/* Main image */}
          <div className="relative w-full max-w-[360px] sm:max-w-[440px] h-[380px] sm:h-[500px] lg:h-[580px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_70px_rgba(61,31,61,0.18)]">
            <Image
              src="/scene4-bg.png"
              alt="A hopeful journey to parenthood"
              fill
              className="object-cover object-center"
              quality={90}
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/50 via-plum-deep/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-mauve-rose/15" />
          </div>

          {/* Floating quote card */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-2 sm:-left-6 md:-left-10 bottom-[8%] sm:bottom-[14%] glass rounded-2xl p-4 sm:p-5 shadow-xl max-w-[190px] sm:max-w-[220px]"
          >
            <Quote className="w-4 h-4 text-mauve-rose mb-1.5 opacity-70" />
            <p className="font-serif text-[12.5px] sm:text-[13.5px] text-plum-deep leading-relaxed italic">
              &ldquo;Science, warmth, and support — every step.&rdquo;
            </p>
          </motion.div>

          {/* Top floating stat badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-2 sm:-right-4 md:-right-8 top-[8%] sm:top-[12%] glass rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-lg"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-mauve-rose to-plum-deep flex items-center justify-center text-white flex-shrink-0">
                <Heart className="w-3.5 h-3.5" fill="currentColor" />
              </div>
              <div>
                <div className="font-display text-[15px] sm:text-[16px] font-bold text-plum-deep leading-none">17+</div>
                <div className="text-[10px] sm:text-[10.5px] text-charcoal-text/75 font-semibold">Years of Care</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
