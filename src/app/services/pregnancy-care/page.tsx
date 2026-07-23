"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Baby,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Activity,
  Calendar,
  Stethoscope,
} from "lucide-react";
import TrustStrip from "@/components/sections/TrustStrip";
import CtaBanner from "@/components/sections/CtaBanner";

const trimesterMilestones = [
  {
    trimester: "1st Trimester",
    timeline: "Weeks 1 - 12",
    title: "Conception & Early Implantation Stability",
    description:
      "Vitals, early viability ultrasound scans, hormone dosage taper, and personalized nutritional guidance, especially after IVF conception.",
    highlights: ["Viability heartbeat scan at Week 6-7", "Progesterone level optimization", "Morning sickness relief care"],
  },
  {
    trimester: "2nd Trimester",
    timeline: "Weeks 13 - 27",
    title: "Anatomy & Fetal Growth Monitoring",
    description:
      "Comprehensive anomaly scans, fetal movement checks, gestational diabetes screening, and maternal physical wellness support.",
    highlights: ["Detailed Level-II Anomaly Scan", "Growth & amniotic fluid index checks", "Comfortable pelvic exercises"],
  },
  {
    trimester: "3rd Trimester",
    timeline: "Weeks 28 - 40",
    title: "Birth Planning & Delivery Readiness",
    description:
      "Weekly non-stress tests (NST), position monitoring, birthing plan alignment, labor preparation, and 24/7 obstetric emergency access.",
    highlights: ["Biophysical profile scans", "Normal delivery preparation guidance", "Emergency hospital transport protocol"],
  },
];

const faqs = [
  {
    question: "Do you specialize in post-IVF high-risk pregnancies?",
    answer:
      "Yes. Pregnancies achieved through IVF or in patients over 35 years often benefit from closer monitoring. Our obstetrics team provides customized scan schedules, luteal phase support management, and 24/7 care call access.",
  },
  {
    question: "Can I consult with your doctors for routine prenatal visits?",
    answer:
      "Absolustely. We welcome all expectant mothers across Kerala, whether you conceived naturally or through assisted treatments. We offer full antenatal care and birth planning.",
  },
  {
    question: "What support is available for out-of-town or NRI patients?",
    answer:
      "We offer hybrid care where routine blood tests and basic scans can be reviewed via video consultation, minimizing unnecessary travel until key trimester milestones.",
  },
];

export default function PregnancyCarePage() {
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
                Comprehensive Obstetric Guidance
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum-deep font-bold leading-tight mb-6"
              >
                Pregnancy Care,<br />
                <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
                  Every Trimester Supported.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-charcoal-text/80 leading-relaxed mb-8 max-w-2xl"
              >
                From positive test confirmation through delivery preparation. We provide warm guidance and connect you with experienced obstetric specialists at accredited partner hospitals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
              >
                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Baby className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Coverage</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">40 Weeks Care</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Specialty</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">High-Risk Care</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Activity className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Scans</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">HD Ultrasound</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="https://wa.me/917994892509?text=Hi%20Niora%20Birth,%20I'd%20like%20to%20book%20a%20pregnancy%20care%20consultation."
                  target="_blank"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-mauve-rose to-plum-deep text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3"
                >
                  <span>Book Pregnancy Consultation</span>
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
                  src="/service-pregnancy.png"
                  alt="Pregnancy Care at Niora Birth"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark text-white backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-mauve-rose/40 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-blush-pink" />
                    </div>
                    <div>
                      <p className="text-xs text-blush-pink font-bold uppercase tracking-wider">Compassionate Care</p>
                      <p className="text-sm font-semibold">Mother & Baby Wellness First</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Personalized attention, detailed fetal growth tracking, and reassuring environment for expectant parents.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trimester Journey Map */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve-rose mb-3 block">
              Trimester Roadmap
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold mb-4">
              Your 40-Week Journey Step-by-Step
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trimesterMilestones.map((tri, i) => (
              <div
                key={tri.trimester}
                className="p-8 rounded-[2rem] bg-cream-bg/60 border border-cream-bg shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-mauve-rose px-3 py-1 rounded-full bg-white border border-mauve-rose/20 inline-block mb-4">
                    {tri.timeline}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-plum-deep mb-2">{tri.trimester}</h3>
                  <p className="text-xs font-semibold text-mauve-rose uppercase tracking-wider mb-4">{tri.title}</p>
                  <p className="text-sm text-charcoal-text/80 leading-relaxed mb-6">{tri.description}</p>
                </div>

                <div className="pt-4 border-t border-cream-bg">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-plum-deep mb-3">Key Care Features:</h4>
                  <ul className="space-y-2">
                    {tri.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-charcoal-text/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success-sage shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
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
              Pregnancy Care FAQs
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
