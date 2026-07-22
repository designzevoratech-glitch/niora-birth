"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartHandshake } from "lucide-react";

const situations = [
  {
    emoji: "👶",
    title: "Trying to conceive for a while",
    description: "You've been trying for months or years without success and don't know where to start.",
    reassurance: "500+ couples guided with clarity",
  },
  {
    emoji: "🔬",
    title: "Exploring IVF or IUI",
    description: "Your doctor mentioned IVF or IUI and you want to understand your exact options and success chances.",
    reassurance: "Clear protocol & treatment breakdown",
  },
  {
    emoji: "💊",
    title: "Dealing with PCOS or hormonal issues",
    description: "You've been told PCOS, low AMH, or irregular ovulation is affecting your fertility.",
    reassurance: "Personalized hormonal care plans",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Facing unexplained infertility",
    description: "All your tests look normal but you still haven't been able to conceive. You feel anxious.",
    reassurance: "Advanced targeted diagnostic assessment",
  },
  {
    emoji: "🧑‍⚕️",
    title: "Wanting a second opinion",
    description: "You've seen other doctors but want honest, clear guidance before making a decision.",
    reassurance: "100% confidential 1-on-1 review",
  },
  {
    emoji: "❤️",
    title: "Just starting your journey",
    description: "You're newly married or planning a family and want to know your health status early.",
    reassurance: "Pre-conception wellness guidance",
  },
];

export default function IsThisForYou() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream-bg to-transparent pointer-events-none" />
      {/* Ambient orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-blush-pink/12 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-5"
          >
            <div className="h-[1px] w-10 bg-mauve-rose/50" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-mauve-rose">
              Who We Guide
            </span>
            <div className="h-[1px] w-10 bg-mauve-rose/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[32px] sm:text-[44px] lg:text-[54px] text-plum-deep font-bold tracking-tight leading-[1.1]"
          >
            Does any of this{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              sound like you?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3.5 sm:mt-4 text-[16px] sm:text-[18px] text-charcoal-text/80 max-w-[560px] mx-auto leading-relaxed font-normal"
          >
            If you recognize yourself in any of these situations — you are in the right place. We have guided hundreds of families through exactly this.
          </motion.p>
        </div>

        {/* Situation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 sm:mb-14">
          {situations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-cream-bg border-2 border-cream-bg hover:border-mauve-rose/40 hover:bg-white hover:shadow-xl transition-all duration-400 cursor-default"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-[32px] leading-none">{item.emoji}</div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-blush-pink/25 text-plum-deep group-hover:bg-mauve-rose group-hover:text-white transition-colors duration-300">
                    {item.reassurance}
                  </span>
                </div>
                
                <h3 className="font-serif text-[17px] sm:text-[18px] font-semibold text-plum-deep leading-snug group-hover:text-mauve-rose transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-charcoal-text/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-mauve-rose/10 flex items-center gap-2 text-[12.5px] font-semibold text-mauve-rose opacity-90 group-hover:opacity-100">
                <CheckCircle2 className="w-4 h-4 text-mauve-rose" />
                <span>We have specialized plans for this</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom reassurance banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-plum-deep to-[#5A2A5A] text-white shadow-xl"
        >
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blush-pink text-[11px] font-bold tracking-wider uppercase mb-2">
              <HeartHandshake className="w-3.5 h-3.5" />
              You Are Never Alone
            </div>
            <p className="font-display text-[22px] sm:text-[26px] font-bold leading-tight mb-2">
              If any of this sounds familiar — take a deep breath.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] text-white/80 leading-relaxed max-w-[540px] font-normal">
              Over <strong className="text-blush-pink font-bold">500 families</strong> sat in the same place of uncertainty before talking with us. A single confidential call is all it takes to find your path forward.
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link href="https://wa.me/917994892509?text=Hi%20Niora%20Birth%20Clinic,%20I'd%20like%20to%20talk%20to%20a%20specialist%20about%20my%20fertility%20situation." target="_blank">
              <button className="group h-[52px] w-full sm:w-auto px-8 rounded-full bg-gradient-to-r from-mauve-rose to-blush-pink text-plum-deep font-bold text-[15px] hover:shadow-[0_6px_28px_rgba(232,180,192,0.45)] hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-2.5 whitespace-nowrap">
                Talk to Us — Free WhatsApp Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

