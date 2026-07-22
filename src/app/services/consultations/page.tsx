"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Video,
  MapPin,
  CalendarCheck,
  FileText,
} from "lucide-react";
import TrustStrip from "@/components/sections/TrustStrip";
import CtaBanner from "@/components/sections/CtaBanner";

const consultationOptions = [
  {
    icon: MapPin,
    title: "In-Clinic 1-on-1 Assessment",
    location: "Muvattupuzha, Kerala",
    description:
      "Visit our clinic for an in-person diagnostic review, ultrasound evaluation, and personal discussion with our fertility specialists.",
    bestFor: "Patients in Kerala or nearby districts who prefer direct physical examination.",
  },
  {
    icon: Video,
    title: "Online / Video Consultation",
    location: "Worldwide / Out-of-station Patients",
    description:
      "A 30-minute virtual consultation to review past medical history, test reports, and map out treatment timelines before traveling.",
    bestFor: "NRI couples, out-of-state patients from Bangalore/Tamil Nadu, or busy professionals.",
  },
];

const checklistItems = [
  "Past fertility testing reports (AMH, semen analysis, pelvic ultrasound scans)",
  "Hormonal blood work (FSH, LH, TSH, Prolactin) if conducted within the last 6 months",
  "List of previous treatments or surgical procedures (laparoscopy/hysteroscopy)",
  "Any ongoing medications or health conditions you are currently managing",
];

const faqs = [
  {
    question: "What happens during the first fertility consultation?",
    answer:
      "Our doctor reviews your medical history, discusses how long you've been trying to conceive, evaluates any past reports, and explains your recommended next steps in simple, transparent terms without pressure.",
  },
  {
    question: "Do both partners need to attend the consultation?",
    answer:
      "We strongly encourage both partners to join, as fertility is a shared journey and both male and female factors are evaluated together. However, if one partner is unable to attend initially, you can still proceed.",
  },
  {
    question: "How do I schedule an online video consultation?",
    answer:
      "You can click the WhatsApp booking button on this page or call our team directly. We will schedule a convenient time slot and send you a secure video meeting link.",
  },
];

export default function ConsultationsPage() {
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
                Personalized Specialist Guidance
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum-deep font-bold leading-tight mb-6"
              >
                1-on-1 Consultations,<br />
                <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
                  Your Journey Starts Here.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-charcoal-text/80 leading-relaxed mb-8 max-w-2xl"
              >
                No rush, no jargon, no unnecessary procedures. Get clear, honest, doctor-led answers about your body and your options.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
              >
                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Duration</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">30 - 45 Minutes</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Video className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Modes</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">In-Clinic or Video</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Promise</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">Zero Pressure</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="https://wa.me/917994892509?text=Hi%20Niora%20Clinic,%20I'd%20like%20to%20book%20a%201-on-1%20fertility%20consultation."
                  target="_blank"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-mauve-rose to-plum-deep text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3"
                >
                  <span>Book Consultation via WhatsApp</span>
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
                  alt="Doctor Consultation at Niora Birth Clinic"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark text-white backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-mauve-rose/40 flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-blush-pink" />
                    </div>
                    <div>
                      <p className="text-xs text-blush-pink font-bold uppercase tracking-wider">Expert Dialogue</p>
                      <p className="text-sm font-semibold">Empathetic & Transparent Listening</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    We listen to your story carefully, review your diagnostic profile, and craft a personalized fertility roadmap.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Consultation Modes */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve-rose mb-3 block">
              Flexible Options
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold mb-4">
              Choose How You Wish to Connect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {consultationOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-[2rem] bg-cream-bg/60 border border-mauve-rose/20 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white text-mauve-rose flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-mauve-rose px-3 py-1 rounded-full bg-white border border-mauve-rose/20 inline-block mb-3">
                      {opt.location}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-plum-deep mb-3">{opt.title}</h3>
                    <p className="text-sm text-charcoal-text/80 leading-relaxed mb-6">{opt.description}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-cream-bg">
                    <p className="text-xs font-bold uppercase tracking-wider text-plum-deep mb-1">Ideal For:</p>
                    <p className="text-xs text-charcoal-text/75">{opt.bestFor}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Checklist */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-plum-deep text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blush-pink" />
              <h3 className="font-serif text-2xl font-bold">What to Bring / Prepare for Your First Visit</h3>
            </div>
            <p className="text-sm text-white/80 mb-6">
              To make your consultation as productive as possible, having the following items ready is helpful (though not mandatory):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/10 border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-blush-pink shrink-0 mt-0.5" />
                  <span className="text-xs text-white/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ */}
      <section className="py-20 px-6 bg-cream-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold">
              Consultation FAQs
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
