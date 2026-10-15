"use client";

import { motion } from "framer-motion";
import { CalendarHeart, ShieldCheck, MapPin, HeartHandshake, Star } from "lucide-react";

const badges = [
  { icon: CalendarHeart, title: "Since 2008", text: "Over 17 years of trusted fertility care" },
  { icon: MapPin, title: "3 States Reached", text: "Kerala · Tamil Nadu · Bangalore" },
  { icon: ShieldCheck, title: "Fully Confidential", text: "100% privacy guaranteed, always" },
  { icon: HeartHandshake, title: "Personalized Guidance", text: "Tailored to every unique journey" },
  { icon: Star, title: "500+ Families", text: "Real families, real stories of hope" },
];

// Duplicate for seamless infinite loop
const allBadges = [...badges, ...badges];

export default function TrustStrip() {
  return (
    <section className="bg-plum-deep py-20 md:py-28 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-mauve-rose/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blush-pink/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl mb-14">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-[1px] w-10 bg-mauve-rose/60" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-mauve-rose">
              Our Promise to You
            </span>
            <div className="h-[1px] w-10 bg-mauve-rose/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[32px] md:text-[46px] lg:text-[52px] text-white font-bold tracking-tight leading-[1.1] max-w-[600px] mx-auto"
          >
            Trusted by families{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              across South India.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[16px] text-white/80 max-w-[500px] mx-auto leading-relaxed font-normal"
          >
            Every commitment we make is backed by 17+ years of care, clinical integrity, and thousands of moments of genuine human connection.
          </motion.p>
        </div>
      </div>

      {/* Infinite marquee (with pause-on-hover) */}
      <div className="relative overflow-hidden group/marquee">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-plum-deep to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-plum-deep to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee group-hover/marquee:[animation-play-state:paused] flex gap-5 w-max">
          {allBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center gap-4 glass-dark rounded-2xl px-6 py-5 min-w-[270px] flex-shrink-0 cursor-default border border-white/12 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-mauve-rose to-plum-deep flex items-center justify-center text-white flex-shrink-0 shadow-sm border border-white/20">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-[15.5px] font-semibold text-white leading-tight mb-1">
                    {badge.title}
                  </div>
                  <div className="text-[13px] text-white/80 leading-snug font-normal">{badge.text}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom stat row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative z-10 container mx-auto px-6 max-w-5xl mt-14"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "500+", label: "Families Guided" },
            { value: "17+", label: "Years Experience" },
            { value: "3", label: "States Reached" },
            { value: "100%", label: "Confidentiality" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.4 }}
              className="text-center py-5 px-4 rounded-2xl border border-white/15 bg-white/5 hover:border-mauve-rose/40 hover:bg-white/10 transition-all duration-300"
            >
              <div
                className="font-display text-[34px] md:text-[40px] font-bold leading-none mb-2"
                style={{
                  background: "linear-gradient(135deg, #E8B4C0, #C17A8A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-[12.5px] text-white/80 font-semibold tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

