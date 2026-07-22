"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 md:py-36 bg-plum-deep relative overflow-hidden">
      {/* Large ambient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-mauve-rose/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blush-pink/15 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blush-pink/30"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{ y: [0, -40, 0], opacity: [0.1, 0.5, 0.1] }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <div className="h-[1px] w-10 bg-mauve-rose/60" />
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-mauve-rose">
            Your Journey Starts Here
          </span>
          <div className="h-[1px] w-10 bg-mauve-rose/60" />
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[38px] md:text-[56px] lg:text-[68px] font-bold tracking-tight leading-[1.05] text-white mb-6 max-w-[800px] mx-auto"
        >
          Ready to take the{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #E8B4C0, #C17A8A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            first step?
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[17px] md:text-[19px] text-white/60 max-w-[580px] mx-auto leading-relaxed mb-12"
        >
          Whether you&apos;re exploring options or ready to begin — our team is here to guide you with clear, compassionate, and honest advice.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <Link href="/contact">
            <button className="group h-[56px] px-[40px] rounded-full bg-gradient-to-r from-mauve-rose to-blush-pink text-plum-deep text-[15px] font-bold shadow-[0_4px_30px_rgba(232,180,192,0.4)] hover:shadow-[0_8px_40px_rgba(232,180,192,0.6)] hover:-translate-y-[3px] transition-all duration-300 flex items-center gap-2.5 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Book Fertility Guidance Call</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>

          <Link href="https://wa.me/917994892509?text=Hi,%20I'd%20like%20to%20know%20more%20about%20fertility%20guidance%20consultations" target="_blank">
            <button className="group h-[56px] px-[40px] rounded-full border-2 border-white/25 text-white text-[15px] font-semibold hover:bg-white/10 hover:border-white/50 hover:-translate-y-[2px] transition-all duration-300 flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4" />
              Message on WhatsApp
            </button>
          </Link>
        </motion.div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40"
        >
          <div className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-success-sage" />
            <span>Confidential initial consultation</span>
          </div>
          <div className="hidden sm:block w-[1px] h-4 bg-white/20" />
          <div className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-success-sage" />
            <span>100% confidential</span>
          </div>
          <div className="hidden sm:block w-[1px] h-4 bg-white/20" />
          <a href="tel:+917994892509" className="flex items-center gap-2 text-sm hover:text-white/70 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 79948 92509</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
