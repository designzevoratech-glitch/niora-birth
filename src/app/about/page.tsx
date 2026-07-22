"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Building,
  CheckCircle2,
  ArrowRight,
  Clock,
  Stethoscope,
} from "lucide-react";
import TrustStrip from "@/components/sections/TrustStrip";
import CtaBanner from "@/components/sections/CtaBanner";

const pillars = [
  {
    icon: ShieldCheck,
    title: "100% Medical Ethics",
    description:
      "We recommend initial guidance options based strictly on clinical needs. Zero commercial pressure or redundant testing.",
  },
  {
    icon: Heart,
    title: "Empathic Guidance First",
    description:
      "Fertility is an emotional journey. We provide continuous patient support, plain-language education, and transparent advice.",
  },
  {
    icon: Stethoscope,
    title: "Vetted Specialist Network",
    description:
      "We connect you with qualified fertility specialists and accredited partner hospitals for clinical diagnostic evaluations and treatment procedures.",
  },
  {
    icon: Users,
    title: "Accessible to All Families",
    description:
      "Clear, transparent advice with no hidden surprises, making expert fertility consultation accessible to families across South India.",
  },
];

const milestones = [
  {
    year: "2008",
    title: "Foundation of Guidance",
    description: "Established with a core mission to bring ethical, transparent fertility guidance and patient support to families.",
  },
  {
    year: "2012",
    title: "Specialist Partner Network",
    description: "Expanded our partner hospital network and advisory relationships to offer comprehensive fertility assistance.",
  },
  {
    year: "2017",
    title: "Advanced Guidance & Education",
    description: "Incorporated plain-language diagnostic education for advanced options like ICSI and fertility preservation.",
  },
  {
    year: "2022",
    title: "Flagship Consultation Center",
    description: "Opened our modern consultation facility in Muvattupuzha to support local and out-of-station patients.",
  },
  {
    year: "Present",
    title: "Thousands of Families Guided",
    description: "Continuing to support couples across Kerala, Tamil Nadu, Karnataka, and NRI families worldwide.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream-bg">
      {/* 1. Hero Section */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mauve-rose/10 border border-mauve-rose/20 text-mauve-rose text-xs font-bold uppercase tracking-widest mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Fertility Consultation & Patient Guidance
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum-deep font-bold leading-tight mb-6"
              >
                Guiding Your Path to Family,<br />
                <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
                  With Honesty & Clarity.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-charcoal-text/80 leading-relaxed mb-8 max-w-2xl"
              >
                At Niora Birth, we help individuals and couples understand fertility challenges, explain treatment options in simple terms, and connect you with qualified fertility specialists and partner hospitals. Medical evaluations and procedures are confirmed by medical specialists at partner centers.
              </motion.p>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                <div className="bg-cream-bg p-4 rounded-2xl border border-mauve-rose/15">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-plum-deep">15+</p>
                  <p className="text-xs text-charcoal-text/70 font-medium">Years Guidance</p>
                </div>
                <div className="bg-cream-bg p-4 rounded-2xl border border-mauve-rose/15">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-mauve-rose">500+</p>
                  <p className="text-xs text-charcoal-text/70 font-medium">Families Guided</p>
                </div>
                <div className="bg-cream-bg p-4 rounded-2xl border border-mauve-rose/15">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-plum-deep">Partner</p>
                  <p className="text-xs text-charcoal-text/70 font-medium">Hospital Network</p>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative h-[420px] sm:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image
                  src="/service-consultation.png"
                  alt="Fertility Consultation at Niora Birth"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark text-white backdrop-blur-md">
                  <p className="text-xs text-blush-pink font-bold uppercase tracking-wider mb-1">Our Core Commitment</p>
                  <p className="text-sm font-semibold mb-1">Patient-Centered Guidance & Support</p>
                  <p className="text-xs text-white/80 leading-relaxed">
                    No medical jargon, no pressure. Clear information and compassionate assistance every step of the way.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 Guiding Pillars */}
      <section className="py-20 px-6 bg-cream-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve-rose mb-3 block">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold mb-4">
              What Defines the Niora Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-white border border-cream-bg shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-mauve-rose/10 text-mauve-rose flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-plum-deep mb-3">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-charcoal-text/75 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Milestone Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve-rose mb-3 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold mb-4">
              15+ Years of Guidance Milestones
            </h2>
          </div>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className="p-6 sm:p-8 rounded-3xl bg-cream-bg/50 border border-cream-bg flex flex-col sm:flex-row gap-6 items-start hover:bg-cream-bg/80 transition-colors"
              >
                <div className="w-20 h-14 rounded-2xl bg-plum-deep text-white flex items-center justify-center shrink-0 font-serif text-xl font-bold">
                  {m.year}
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-plum-deep font-bold mb-2">{m.title}</h3>
                  <p className="text-sm text-charcoal-text/80 leading-relaxed">{m.description}</p>
                </div>
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
