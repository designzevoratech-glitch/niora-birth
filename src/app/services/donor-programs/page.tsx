"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  HeartPulse,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Lock,
  UserCheck,
  Award,
} from "lucide-react";
import TrustStrip from "@/components/sections/TrustStrip";
import CtaBanner from "@/components/sections/CtaBanner";

const donorPillars = [
  {
    icon: Lock,
    title: "100% Confidentiality & Ethics",
    description:
      "Strict compliance with national fertility guidelines, protecting patient privacy with encrypted identity safeguard protocols.",
  },
  {
    icon: UserCheck,
    title: "Rigorous Screening Standards",
    description:
      "Every egg and sperm donor undergoes mandatory infectious disease screening, genetic testing, medical history audits, and psychological evaluation.",
  },
  {
    icon: Award,
    title: "Physical & Ethnic Matching",
    description:
      "We match donor profiles according to physical characteristics, educational background, blood group compatibility, and personal preferences.",
  },
];

const faqs = [
  {
    question: "Is using a donor program legally and ethically protected in India?",
    answer:
      "Yes. Niora Birth Clinic operates in 100% strict compliance with national ART guidelines. All donor protocols follow legally mandated consent structures and donor anonymity standards.",
  },
  {
    question: "When is a donor egg or donor sperm program advised?",
    answer:
      "Donor programs are recommended when maternal ovarian reserve is severely low/depleted, in premature ovarian insufficiency, advanced age, severe male azoospermia, or after repeated unsuccessful cycles using self-gametes.",
  },
  {
    question: "How are donors screened?",
    answer:
      "Donors are young, healthy individuals aged 21-30 who complete comprehensive physical, genetic (karyotyping), viral serology (HIV, Hepatitis B/C), and psychological assessments before approval.",
  },
];

export default function DonorProgramsPage() {
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
                Ethical & Confidential Gamete Care
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum-deep font-bold leading-tight mb-6"
              >
                Donor Programs,<br />
                <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
                  Build Your Family with Peace of Mind.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-charcoal-text/80 leading-relaxed mb-8 max-w-2xl"
              >
                Comprehensive, empathetic guidance on donor egg and donor sperm options. We explain ethical ART guidelines and connect you with licensed donor bank partner programs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
              >
                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Lock className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Privacy</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">100% Anonymous</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Screening</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">Full Genetic & Viral</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <UserCheck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Match Rate</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">Customized Profiles</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="https://wa.me/917994892509?text=Hi%20Niora%20Clinic,%20I'd%20like%20to%20confidentially%20inquire%20about%20donor%20programs."
                  target="_blank"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-mauve-rose to-plum-deep text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3"
                >
                  <span>Confidential Donor Guidance</span>
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
                  src="/service-consultation.png"
                  alt="Confidential Donor Consultation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark text-white backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-mauve-rose/40 flex items-center justify-center">
                      <HeartPulse className="w-5 h-5 text-blush-pink" />
                    </div>
                    <div>
                      <p className="text-xs text-blush-pink font-bold uppercase tracking-wider">Compassionate Care</p>
                      <p className="text-sm font-semibold">Protected & Guided Family Building</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Our team walks with you at every step with sensitivity, medical rigour, and complete peace of mind.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pillars Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold mb-4">
              Our 3 Donor Care Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donorPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-8 rounded-[2rem] bg-cream-bg/50 border border-cream-bg shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-mauve-rose/10 text-mauve-rose flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-plum-deep mb-3">{p.title}</h3>
                  <p className="text-sm text-charcoal-text/80 leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FAQ */}
      <section className="py-20 px-6 bg-cream-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold">
              Donor Program FAQs
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
