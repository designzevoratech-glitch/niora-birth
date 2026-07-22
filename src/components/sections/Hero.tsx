"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Heart, Star, Users, ArrowRight, X, MessageCircle, Phone, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const floatingCards = [
  {
    icon: Heart,
    value: "500+",
    label: "Families Guided",
    color: "from-mauve-rose to-plum-deep",
    position: "left-0 lg:-left-10 top-[18%]",
    delay: 1.2,
  },
  {
    icon: Star,
    value: "15+",
    label: "Years of Care",
    color: "from-blush-pink to-mauve-rose",
    position: "-right-2 lg:-right-6 top-[42%]",
    delay: 1.4,
  },
  {
    icon: Users,
    value: "3 States",
    label: "Patients Served",
    color: "from-success-sage to-plum-deep",
    position: "left-0 lg:-left-8 bottom-[14%]",
    delay: 1.6,
  },
];

const situationOptions = [
  {
    title: "Trying to conceive for 6+ months",
    subtitle: "Looking for clear assessment & initial guidance",
    tag: "First Consultation",
  },
  {
    title: "Exploring IVF, IUI or ICSI",
    subtitle: "Need expert medical advice on success rates & options",
    tag: "Specialist Advice",
  },
  {
    title: "PCOS, Low AMH or Hormonal Issues",
    subtitle: "Seeking tailored hormonal & fertility treatment plans",
    tag: "Personalized Care",
  },
  {
    title: "Seeking a 2nd Opinion",
    subtitle: "Already tried treatments and want transparent guidance",
    tag: "Second Opinion",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacityAll = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const headlineWords = ["Your", "Path", "to"];
  const subHeadlineWords = ["Guided", "With", "Care."];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-cream-bg flex items-center"
    >
      {/* Ambient background orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-blush-pink/25 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-mauve-rose/12 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating particles (right half only) */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden hidden md:block">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blush-pink/50"
            style={{
              width: Math.random() * 3 + 1.5 + "px",
              height: Math.random() * 3 + 1.5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{ y: [0, -35, 0], opacity: [0, 0.7, 0] }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE HERO VIEW (< lg) — Apple/Stripe-Inspired Mobile First
         ───────────────────────────────────────────────────────────── */}
      <div className="block lg:hidden relative z-10 w-full px-5 pt-28 pb-12 flex flex-col items-start">
        {/* 1. Trust badge / Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-3.5"
        >
          <span className="flex h-2 w-2 rounded-full bg-mauve-rose relative flex-shrink-0">
            <span className="animate-ping h-2 w-2 rounded-full bg-mauve-rose opacity-75 absolute" />
          </span>
          <span className="text-[11px] font-bold text-mauve-rose tracking-[0.14em] uppercase">
            Fertility Consultation & Patient Guidance Platform
          </span>
        </motion.div>

        {/* 2. Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold tracking-tight text-plum-deep text-[30px] min-[380px]:text-[34px] sm:text-[44px] leading-[1.12] mb-3.5 text-left w-full"
        >
          Your Path to{" "}
          <span
            className="italic font-serif leading-snug"
            style={{
              background: "linear-gradient(135deg, #C17A8A 0%, #E8B4C0 40%, #C17A8A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Parenthood,
          </span>{" "}
          Guided With Care.
        </motion.h1>

        {/* 3. Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[14.5px] sm:text-[16px] text-charcoal-text/85 font-normal leading-[1.65] mb-5 text-left w-full"
        >
          Navigating fertility options can feel overwhelming. We provide personalized 1-on-1 consultation, plain-language guidance, and seamless connection to qualified fertility specialists and partner hospitals.
        </motion.p>

        {/* 4. Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full flex flex-col gap-2.5 mb-6"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="w-[92%] sm:w-auto mx-auto sm:mx-0 h-[52px] px-6 rounded-full bg-gradient-to-r from-mauve-rose to-plum-deep text-white text-[14.5px] font-semibold shadow-[0_6px_25px_rgba(193,122,138,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 tracking-[0.01em]"
          >
            <Sparkles className="w-4 h-4 text-blush-pink" />
            <span>Book Fertility Guidance Call</span>
          </button>
          
          <Link href="/services" className="w-full text-center">
            <button className="w-[92%] sm:w-auto mx-auto sm:mx-0 h-[44px] px-6 rounded-full border border-plum-deep/20 bg-white/80 text-plum-deep text-[13.5px] font-semibold hover:bg-white transition-all shadow-sm">
              Explore Treatments
            </button>
          </Link>
        </motion.div>

        {/* 5. Hero Image (Centered horizontally, 95% width, premium styling) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-[95%] max-w-[440px] mx-auto h-[260px] min-[380px]:h-[300px] sm:h-[380px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(61,31,61,0.2)] border border-white/80 mb-5"
        >
          <Image
            src="/hero-bg-v2.png"
            alt="Compassionate fertility care at Niora Birth Clinic"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/65 via-plum-deep/15 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="glass rounded-xl px-3.5 py-2.5">
              <p className="font-serif text-[11.5px] text-plum-deep italic leading-tight">
                &ldquo;Where every journey is honoured with care, science, and compassion.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* 6. Statistics Cards (3-column grid below image) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-[95%] max-w-[440px] mx-auto grid grid-cols-3 gap-2.5"
        >
          {floatingCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="glass rounded-2xl p-3 text-center border border-white/80 shadow-sm flex flex-col items-center justify-center">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-mauve-rose/20 to-plum-deep/20 flex items-center justify-center text-plum-deep mb-1">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="font-display text-[15px] font-bold text-plum-deep leading-none">{card.value}</div>
                <div className="text-[10px] text-charcoal-text/75 font-semibold mt-1 leading-tight">{card.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          DESKTOP HERO VIEW (lg:grid) — Preserved 100% Exactly
         ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:grid relative z-10 w-full max-w-[1380px] mx-auto px-12 lg:px-20 grid-cols-[1fr_1fr] gap-0 items-center min-h-screen pt-32 pb-24">

        {/* LEFT: Editorial Text */}
        <motion.div
          style={{ y: yLeft, opacity: opacityAll }}
          className="flex flex-col justify-center pr-12"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="inline-flex items-center gap-2.5 mb-8 self-start"
          >
            <span className="flex h-2 w-2 rounded-full bg-mauve-rose relative">
              <span className="animate-ping h-2 w-2 rounded-full bg-mauve-rose opacity-75 absolute" />
            </span>
            <span className="relative text-xs font-semibold text-mauve-rose tracking-[0.2em] uppercase">
              Fertility Consultation & Patient Guidance Platform
            </span>
          </motion.div>

          {/* Headline — word by word reveal */}
          <h1 className="font-display font-bold tracking-tight leading-[1.05] text-plum-deep mb-8 text-[72px] xl:text-[80px]">
            {/* Line 1 */}
            <motion.span
              className="block"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
                  {word}
                </motion.span>
              ))}
            </motion.span>

            {/* Line 2 — gradient italic */}
            <motion.span
              className="block italic"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "linear-gradient(135deg, #C17A8A 0%, #E8B4C0 40%, #C17A8A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Parenthood,
            </motion.span>

            {/* Line 3 */}
            <motion.span
              className="block"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {subHeadlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-[0.25em]"
                  custom={i + 4}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="text-[18px] text-charcoal-text/85 font-normal leading-[1.8] max-w-[490px] mb-10"
          >
            Navigating fertility options can feel overwhelming. We provide personalized 1-on-1 consultation, plain-language guidance, and seamless connection to qualified fertility specialists and partner hospitals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center gap-3.5 mb-10"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="h-[54px] px-[36px] rounded-full bg-gradient-to-r from-mauve-rose to-plum-deep text-white text-[15px] font-semibold shadow-[0_4px_22px_rgba(193,122,138,0.38)] hover:shadow-[0_8px_36px_rgba(193,122,138,0.55)] hover:-translate-y-[2px] active:translate-y-0 transition-all duration-300 relative overflow-hidden group tracking-[0.02em] flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-4 h-4 text-blush-pink" />
              <span>Book Fertility Guidance Call</span>
            </button>
            <Link href="/services">
              <button className="h-[54px] px-[36px] rounded-full border-2 border-plum-deep/18 bg-white/75 backdrop-blur-sm text-plum-deep text-[15px] font-semibold hover:bg-white hover:border-plum-deep/30 hover:-translate-y-[2px] transition-all duration-300 shadow-sm">
                Explore Treatment Guidance
              </button>
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-2.5">
              {["from-mauve-rose to-plum-deep", "from-blush-pink to-mauve-rose", "from-plum-deep/80 to-mauve-rose", "from-blush-pink/80 to-plum-deep/60"].map((g, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br ${g} shadow-sm`}
                />
              ))}
            </div>
            <p className="text-sm text-charcoal-text/75 font-medium">
              <span className="text-plum-deep font-bold">500+ families</span> have begun their journey here
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image + Floating Stat Cards */}
        <motion.div
          style={{ y: yRight, opacity: opacityAll }}
          className="relative flex justify-end items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative rings */}
          <div className="absolute -bottom-4 -right-4 w-64 h-64 rounded-full border border-mauve-rose/15 pointer-events-none" />
          <div className="absolute -top-8 -left-8 w-44 h-44 rounded-full border-2 border-dashed border-blush-pink/25 pointer-events-none" />

          {/* Main image */}
          <div className="relative w-full max-w-[490px] h-[620px] rounded-[2.75rem] overflow-hidden shadow-[0_24px_80px_rgba(61,31,61,0.22)]">
            <Image
              src="/hero-bg-v2.png"
              alt="Compassionate fertility care at Niora Birth Clinic"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Warm gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/55 via-plum-deep/15 to-transparent" />
            {/* Bottom text on image */}
            <div className="absolute bottom-7 left-7 right-7">
              <div className="glass rounded-2xl px-5 py-4">
                <p className="font-serif text-[13.5px] text-plum-deep italic leading-relaxed">
                  &ldquo;Where every journey is honoured with care, science, and compassion.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Floating Stat Cards (Desktop) */}
          {floatingCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute ${card.position} glass rounded-2xl px-4 py-3.5 shadow-[0_8px_30px_rgba(61,31,61,0.12)] z-10`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                    <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <div className="font-display text-[18px] font-bold text-plum-deep leading-none mb-0.5">
                      {card.value}
                    </div>
                    <div className="text-[11.5px] text-charcoal-text/75 font-semibold whitespace-nowrap">
                      {card.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>



      {/* Interactive 30-Second Guided Path Finder Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-plum-deep/40 backdrop-blur-md z-50 pointer-events-auto"
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-[540px] bg-white rounded-[2rem] p-6 sm:p-8 shadow-[0_25px_70px_rgba(61,31,61,0.25)] border border-cream-bg z-50 pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-pink/25 text-plum-deep text-[11px] font-bold tracking-wider uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-mauve-rose" />
                    30-Second Guided Finder
                  </div>
                  <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-plum-deep leading-snug">
                    Where are you on your journey?
                  </h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full text-charcoal-text/40 hover:bg-cream-bg hover:text-plum-deep transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-[14px] text-charcoal-text/70 mb-6 leading-relaxed">
                Select the option that best describes your situation for instant personalized care options:
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {situationOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedOption(i)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 flex items-start justify-between gap-3 ${
                      selectedOption === i
                        ? "border-mauve-rose bg-cream-bg/60 shadow-sm"
                        : "border-cream-bg hover:border-mauve-rose/40 hover:bg-cream-bg/30"
                    }`}
                  >
                    <div>
                      <div className="font-serif text-[15px] font-semibold text-plum-deep mb-1">
                        {opt.title}
                      </div>
                      <div className="text-[12.5px] text-charcoal-text/65 leading-snug">
                        {opt.subtitle}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-mauve-rose/15 text-mauve-rose whitespace-nowrap flex-shrink-0">
                      {opt.tag}
                    </span>
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={
                    selectedOption !== null
                      ? `https://wa.me/917994892509?text=Hi%20Niora%20Birth%20Clinic,%20I'm%20interested%20in%20a%20consultation%20regarding:%20${encodeURIComponent(
                          situationOptions[selectedOption].title
                        )}`
                      : "https://wa.me/917994892509?text=Hi%20Niora%20Birth%20Clinic,%20I'd%20like%20to%20book%20a%20free%20fertility%20consultation."
                  }
                  target="_blank"
                  className="flex-1"
                >
                  <button className="w-full h-[50px] rounded-full bg-gradient-to-r from-mauve-rose to-plum-deep text-white font-semibold text-[14.5px] flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all">
                    <MessageCircle className="w-4 h-4" />
                    Book Free Call on WhatsApp
                  </button>
                </Link>
                <a href="tel:+917994892509" className="sm:flex-none">
                  <button className="w-full sm:w-auto h-[50px] px-5 rounded-full border-2 border-plum-deep/18 text-plum-deep font-semibold text-[14.5px] flex items-center justify-center gap-2 hover:bg-cream-bg transition-colors">
                    <Phone className="w-4 h-4" />
                    Call Direct
                  </button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 hidden sm:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-plum-deep/40 font-bold">Scroll</span>
        <motion.div
          className="w-[1px] h-9 rounded-full bg-gradient-to-b from-transparent via-mauve-rose/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

