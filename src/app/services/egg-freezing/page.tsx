"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Snowflake,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Shield,
  Award,
  Thermometer,
} from "lucide-react";
import TrustStrip from "@/components/sections/TrustStrip";
import CtaBanner from "@/components/sections/CtaBanner";

const freezingSteps = [
  {
    step: "01",
    title: "Ovarian Reserve Assessment & Planning",
    duration: "Day 1 Visit",
    description:
      "Comprehensive evaluation of AMH (Anti-Müllerian Hormone) and antral follicle count to determine your egg quality baseline.",
    highlight: "Helps predict egg yield and customizes medication dosage.",
  },
  {
    step: "02",
    title: "Gentle Hormone Stimulation",
    duration: "10 - 12 Days",
    description:
      "Self-administered micro-injections stimulate ovaries to mature a healthy cohort of eggs in a single cycle.",
    highlight: "Frequent painless scans ensure egg safety and growth.",
  },
  {
    step: "03",
    title: "Comfortable Retrieval Procedure",
    duration: "15 Minutes",
    description:
      "A simple outpatient procedure under light sedation. Eggs are retrieved painlessly and transferred to embryology lab.",
    highlight: "No abdominal incisions, return to normal activities next day.",
  },
  {
    step: "04",
    title: "Vitrification Ultra-Fast Freezing",
    duration: "Same Day",
    description:
      "Mature eggs undergo flash-freezing at -196°C using vitrification technology to prevent ice crystal formation and preserve cellular integrity.",
    highlight: "Over 95% post-thaw survival rate when you decide to conceive.",
  },
];

const faqs = [
  {
    question: "What is the best age to freeze eggs?",
    answer:
      "Statistically, egg quality and quantity are highest in your 20s and early-to-mid 30s. However, women up to age 38 frequently achieve successful freezing cycles. A preliminary AMH test will give you exact clarity.",
  },
  {
    question: "How long can frozen eggs remain safely stored?",
    answer:
      "Cryopreserved eggs can remain safely stored in liquid nitrogen tanks for 10+ years with zero loss of quality or biological degradation.",
  },
  {
    question: "Is the egg retrieval process painful?",
    answer:
      "Retrieval is performed under short-acting intravenous sedation, meaning you feel no pain during the procedure. Mild cramping afterward is comparable to period discomfort and resolves quickly.",
  },
];

export default function EggFreezingPage() {
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
                Fertility Preservation & Future Planning
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum-deep font-bold leading-tight mb-6"
              >
                Egg & Embryo Freezing,<br />
                <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
                  Preserve Your Options.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-charcoal-text/80 leading-relaxed mb-8 max-w-2xl"
              >
                Take control of your biological timeline. Understand egg and embryo vitrification preservation options before connecting with accredited cryo-bank partner centers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
              >
                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Thermometer className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Method</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">Flash Vitrification</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Survival Rate</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">&gt; 95% Post-Thaw</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Storage</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">24/7 Monitored Tanks</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="https://wa.me/917994892509?text=Hi%20Niora%20Birth,%20I'd%20like%20to%20know%20more%20about%20egg%20freezing%20and%20costs."
                  target="_blank"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-mauve-rose to-plum-deep text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3"
                >
                  <span>Book Preservation Call</span>
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
                  src="/service-freezing.png"
                  alt="Egg and Embryo Freezing"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark text-white backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-mauve-rose/40 flex items-center justify-center">
                      <Snowflake className="w-5 h-5 text-blush-pink" />
                    </div>
                    <div>
                      <p className="text-xs text-blush-pink font-bold uppercase tracking-wider">Vitrification Security</p>
                      <p className="text-sm font-semibold">Zero Quality Loss Cryo-Storage</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Ultra-rapid freezing locks egg cellular structure at peak youth, giving you complete freedom for future family planning.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Process Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve-rose mb-3 block">
              Cycle Steps
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold mb-4">
              How Egg Freezing Works
            </h2>
          </div>

          <div className="space-y-6">
            {freezingSteps.map((stepItem) => (
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
              Egg Freezing FAQs
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
