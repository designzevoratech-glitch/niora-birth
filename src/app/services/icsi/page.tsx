"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Dna,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Target,
  Microscope,
  Zap,
} from "lucide-react";
import TrustStrip from "@/components/sections/TrustStrip";
import CtaBanner from "@/components/sections/CtaBanner";

const icsiSteps = [
  {
    step: "01",
    title: "Sperm Extraction & Advanced Selection",
    duration: "Day of Retrieval",
    description:
      "Sperm cells undergo high-magnification morphology screening to identify healthiest DNA structure, even in severe oligospermia.",
    highlight: "Uses specialized high-magnification optical lenses for precision selection.",
  },
  {
    step: "02",
    title: "Micro-Injection Precision",
    duration: "Day 1",
    description:
      "A single, optimal sperm is immobilized and micro-injected directly into the cytoplasm of a mature egg using ultrasonic micro-pipettes.",
    highlight: "Bypasses all natural outer egg membrane penetration barriers.",
  },
  {
    step: "03",
    title: "Fertilization Verification & Embryo Growth",
    duration: "Days 1 - 5",
    description:
      "Successful fertilization is verified 16-18 hours post-injection. Embryos are nurtured to blastocyst stage inside cleanroom incubators.",
    highlight: "Achieves up to 75-80% fertilization rate per mature egg.",
  },
];

const faqs = [
  {
    question: "How is ICSI different from standard IVF?",
    answer:
      "In standard IVF, thousands of sperm are placed near an egg in a dish, relying on natural sperm motility to fertilize it. In ICSI (Intracytoplasmic Sperm Injection), an embryologist selects a single, healthiest sperm cell under a high-power microscope and injects it directly into the egg cell. ICSI overcomes severe male motility and count barriers.",
  },
  {
    question: "Does ICSI increase the risk of birth defects?",
    answer:
      "Extensive medical research over 30 years shows that ICSI children have health outcomes identical to naturally conceived children. The primary factor remains underlying parental genetics, which our doctors review thoroughly beforehand.",
  },
  {
    question: "When is ICSI strongly recommended?",
    answer:
      "ICSI is strongly indicated for very low sperm count (oligospermia), poor motility (asthenozoospermia), abnormal sperm shape (teratozoospermia), previous IVF fertilization failure, or surgical sperm retrieval (TESA/PESA).",
  },
];

export default function IcsiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream-bg">
      {/* 1. Hero Section */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-cream-bg to-cream-bg -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mauve-rose/10 border border-mauve-rose/20 text-mauve-rose text-xs font-bold uppercase tracking-widest mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Male Factor Precision Technology
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum-deep font-bold leading-tight mb-6"
              >
                ICSI Treatment,<br />
                <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
                  Single-Sperm Accuracy.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-charcoal-text/80 leading-relaxed mb-8 max-w-2xl"
              >
                Learn how ICSI micro-injection helps address male factor fertility challenges. We provide compassionate initial guidance and connect you with qualified embryology specialists and accredited partner centers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
              >
                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Target className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Precision</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">1-to-1 Injection</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Microscope className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Magnification</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">4000x HD Optical</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Fertilization</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">75-80% High Yield</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="https://wa.me/917994892509?text=Hi%20Niora%20Birth,%20I'd%20like%20to%20know%20more%20about%20ICSI%20male%20fertility%20treatment."
                  target="_blank"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-mauve-rose to-plum-deep text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3"
                >
                  <span>Book Male Fertility Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative h-[420px] sm:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image
                  src="/service-icsi.png"
                  alt="ICSI Micro-injection Technology"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark text-white backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-mauve-rose/40 flex items-center justify-center">
                      <Dna className="w-5 h-5 text-blush-pink" />
                    </div>
                    <div>
                      <p className="text-xs text-blush-pink font-bold uppercase tracking-wider">Advanced Micro-Care</p>
                      <p className="text-sm font-semibold">Overcomes Severe Count & Motility</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Direct micro-injection removes natural fertilization barriers, allowing single healthy sperm cells to achieve success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Process Breakdown */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve-rose mb-3 block">
              Micro-Insemination Flow
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold mb-4">
              How ICSI Works inside our Lab
            </h2>
          </div>

          <div className="space-y-6">
            {icsiSteps.map((stepItem, idx) => (
              <div
                key={stepItem.step}
                className="p-6 sm:p-8 rounded-3xl bg-cream-bg/50 border border-cream-bg flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-mauve-rose/20 flex items-center justify-center shrink-0 font-serif text-2xl font-bold text-mauve-rose shadow-sm">
                  {stepItem.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-plum-deep font-bold">
                      {stepItem.title}
                    </h3>
                    <span className="text-xs font-bold text-mauve-rose uppercase tracking-wider bg-mauve-rose/10 px-3 py-1 rounded-full">
                      {stepItem.duration}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-charcoal-text/80 leading-relaxed mb-4">
                    {stepItem.description}
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-mauve-rose/15 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-success-sage shrink-0" />
                    <span className="text-xs font-medium text-charcoal-text/85">
                      {stepItem.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ */}
      <section className="py-20 px-6 bg-cream-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold">
              ICSI Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-cream-bg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-cream-bg/30 transition-colors"
                >
                  <span className="font-serif text-lg text-plum-deep font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-mauve-rose transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-charcoal-text/80 leading-relaxed border-t border-cream-bg/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />
      <CtaBanner />
    </div>
  );
}
