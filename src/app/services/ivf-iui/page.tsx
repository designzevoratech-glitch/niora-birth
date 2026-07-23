"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Beaker,
  CheckCircle2,
  Clock,
  Heart,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Stethoscope,
  Activity,
  Award,
} from "lucide-react";
import TrustStrip from "@/components/sections/TrustStrip";
import CtaBanner from "@/components/sections/CtaBanner";

const ivfSteps = [
  {
    step: "01",
    title: "Ovarian Stimulation Protocol",
    duration: "Days 1 - 12",
    description:
      "Gentle hormonal stimulation protocols are monitored under specialist ultrasound guidance to encourage egg maturation.",
    highlight: "Customized medication dosage evaluated strictly by clinical specialists.",
  },
  {
    step: "02",
    title: "Egg Retrieval & Sperm Collection",
    duration: "Day 14",
    description:
      "Outpatient retrieval procedure performed by experienced specialists under ultrasound guidance at partner hospitals.",
    highlight: "Outpatient procedure with quick, comfortable recovery.",
  },
  {
    step: "03",
    title: "Fertilization in Partner Cleanroom Labs",
    duration: "Days 14 - 15",
    description:
      "Fertilization occurs inside accredited embryology cleanroom laboratories at partner centers under 24/7 incubator monitoring.",
    highlight: "Embryology specialists monitor cellular division.",
  },
  {
    step: "04",
    title: "Blastocyst Culture & Grading",
    duration: "Days 15 - 19",
    description:
      "Embryos are nurtured to Day 5 (Blastocyst stage), where cell structure is graded by embryology teams for implantation potential.",
    highlight: "Top-graded embryos selected for transfer by specialists.",
  },
  {
    step: "05",
    title: "Embryo Transfer & Post-Transfer Support",
    duration: "Day 19 / 20",
    description:
      "Selected embryo transfer performed gently by fertility specialists at partner centers, followed by ongoing guidance from our care team.",
    highlight: "Outpatient visit with continuous post-transfer guidance support.",
  },
];

const iuiSteps = [
  {
    step: "01",
    title: "Cycle Tracking & Ovulation Boost",
    duration: "Days 1 - 10",
    description:
      "Ultrasound scans monitor follicle growth, ensuring precise timing for ovulation.",
    highlight: "Minimal medication required, natural cycle alignment.",
  },
  {
    step: "02",
    title: "Sperm Washing & Enhancement",
    duration: "Day of Ovulation",
    description:
      "Sperm sample is processed in the lab to concentrate the healthiest, most motile sperm cells.",
    highlight: "Removes non-viable cells and enhances motility up to 3x.",
  },
  {
    step: "03",
    title: "In-Clinic Insemination",
    duration: "10 Minutes",
    description:
      "Prepared sperm is gently introduced directly into the uterus, reducing distance to the egg.",
    highlight: "Completely painless procedure, no recovery time needed.",
  },
];

const faqs = [
  {
    question: "What is the difference between IVF and IUI?",
    answer:
      "IUI (Intrauterine Insemination) places washed, healthy sperm directly into the uterus around ovulation time, letting fertilization happen naturally inside the body. IVF (In Vitro Fertilization) fertilizes eggs with sperm inside our advanced laboratory, nurturing embryos before placing them in the uterus. IVF has significantly higher success rates for complex fertility factors.",
  },
  {
    question: "Is IVF or IUI painful?",
    answer:
      "Both procedures are designed with maximum patient comfort. IUI feels identical to a standard routine Pap smear. For IVF, egg retrieval is performed under mild sedation so you feel no pain at all during the procedure.",
  },
  {
    question: "How do I know whether IVF or IUI is right for me?",
    answer:
      "Our senior fertility team assesses tubal status, ovarian reserve (AMH), sperm parameters, and age. We recommend IUI first if fallopian tubes are open and sperm count is normal. If there are blocked tubes, severe sperm factors, or previous failed cycles, IVF is recommended.",
  },
  {
    question: "How long should we stay in Kerala if traveling from out of town?",
    answer:
      "For IVF, you need to be available for 14-18 days during stimulation and transfer, or you can complete initial medication monitoring in your home town and visit our Muvattupuzha clinic for key milestones.",
  },
];

export default function IvfIuiPage() {
  const [activeTab, setActiveTab] = useState<"ivf" | "iui">("ivf");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream-bg">
      {/* 1. Hero Banner */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-cream-bg to-cream-bg -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mauve-rose/10 border border-mauve-rose/20 text-mauve-rose text-xs font-bold uppercase tracking-widest mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Conception Assistance Protocols
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum-deep font-bold leading-tight mb-6"
              >
                IVF & IUI Care,<br />
                <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
                  Designed for High Success.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-charcoal-text/80 leading-relaxed mb-8 max-w-2xl"
              >
                Clear, transparent, and evidence-backed educational guidance on assisted reproduction. We help you understand protocol options before connecting you with experienced fertility specialists and accredited partner centers.
              </motion.p>

              {/* Quick Facts Grid */}
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
                  <p className="text-sm font-semibold text-plum-deep">14 - 20 Days Cycle</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Care Protocol</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">Individualized Dosage</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-cream-bg shadow-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-mauve-rose mb-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Comfort</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-deep">Painless & Sedated</p>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="https://wa.me/917994892509?text=Hi%20Niora%20Birth,%20I'd%20like%20to%20consult%20regarding%20IVF%20/%20IUI%20treatment."
                  target="_blank"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-mauve-rose to-plum-deep text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3"
                >
                  <span>Book IVF Assessment Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#treatment-stepper"
                  className="px-8 py-4 rounded-full bg-white border border-plum-deep/15 text-plum-deep font-semibold text-sm hover:bg-white/80 transition-all flex items-center gap-2"
                >
                  <span>Explore Procedure Steps</span>
                </a>
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
                  src="/service-ivf.png"
                  alt="IVF & IUI Fertility Treatment"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark text-white backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-mauve-rose/40 flex items-center justify-center">
                      <Award className="w-5 h-5 text-blush-pink" />
                    </div>
                    <div>
                      <p className="text-xs text-blush-pink font-bold uppercase tracking-wider">Cleanroom Precision</p>
                      <p className="text-sm font-semibold">ISO-Certified Embryology Lab</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Every step is monitored under strict temperature, air-purity, and light controls to ensure maximum embryo viability.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Candidate Scenario Matrix ("Is This Right For You?") */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve-rose mb-3 block">
              Treatment Eligibility
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold mb-4">
              Who Benefits Most from IVF vs IUI?
            </h2>
            <p className="text-charcoal-text/75 text-base">
              We guide you toward the least invasive, most effective path based on your specific health diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IUI Card */}
            <div className="p-8 rounded-[2rem] bg-cream-bg/60 border border-mauve-rose/20 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-mauve-rose px-3.5 py-1.5 rounded-full bg-white border border-mauve-rose/20">
                      First-Line Option
                    </span>
                    <h3 className="font-serif text-2xl text-plum-deep font-bold mt-3">IUI (Insemination)</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-mauve-rose shadow-sm">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-sm text-charcoal-text/80 leading-relaxed mb-6">
                  Recommended for early-stage fertility support where fallopian tubes are open and sperm parameters are within healthy range.
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-plum-deep mb-3">Best Suited For:</h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "Unexplained infertility of under 2 years",
                    "Cervical factor or mild ovulation irregularities",
                    "Both fallopian tubes completely open and healthy",
                    "Mild male factor or donor sperm insemination",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-charcoal-text/80">
                      <CheckCircle2 className="w-4 h-4 text-success-sage shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="https://wa.me/917994892509?text=Hi,%20I'd%20like%20to%20know%20if%20IUI%20is%20suitable%20for%20my%20condition."
                target="_blank"
                className="w-full py-3.5 rounded-xl bg-white border border-plum-deep/20 text-plum-deep font-semibold text-sm hover:bg-plum-deep hover:text-white transition-colors text-center block"
              >
                Discuss IUI Suitability →
              </Link>
            </div>

            {/* IVF Card */}
            <div className="p-8 rounded-[2rem] bg-plum-deep text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-mauve-rose/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blush-pink px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20">
                      Highest Success Path
                    </span>
                    <h3 className="font-serif text-2xl text-white font-bold mt-3">IVF (In Vitro Fertilization)</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-blush-pink backdrop-blur-md">
                    <Beaker className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  The gold-standard assisted reproductive technology giving highest control over fertilization, embryo quality, and genetic health.
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-blush-pink mb-3">Best Suited For:</h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "Blocked or damaged fallopian tubes",
                    "Advanced maternal age (35+ years)",
                    "Endometriosis or PCOS resistant to basic treatment",
                    "Previous failed IUI attempts or unexplained long-term infertility",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-blush-pink shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="https://wa.me/917994892509?text=Hi,%20I'd%20like%20to%20discuss%20an%20IVF%20treatment%20plan."
                target="_blank"
                className="relative z-10 w-full py-3.5 rounded-xl bg-gradient-to-r from-mauve-rose to-blush-pink text-plum-deep font-bold text-sm hover:opacity-95 transition-opacity text-center block shadow-md"
              >
                Discuss IVF Treatment Plan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Step-by-Step Procedure Timeline */}
      <section id="treatment-stepper" className="py-20 px-6 bg-cream-bg">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve-rose mb-3 block">
              Step-by-Step Procedure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold mb-4">
              What Happens During Treatment?
            </h2>
            <p className="text-charcoal-text/75 text-base mb-8">
              We remove the mystery and fear by breaking down every single phase of your journey into simple, transparent steps.
            </p>

            {/* Toggle Switch */}
            <div className="inline-flex p-1.5 rounded-full bg-white border border-cream-bg shadow-sm">
              <button
                onClick={() => setActiveTab("ivf")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === "ivf"
                    ? "bg-plum-deep text-white shadow-md"
                    : "text-charcoal-text/70 hover:text-plum-deep"
                }`}
              >
                IVF Protocol Steps (5 Steps)
              </button>
              <button
                onClick={() => setActiveTab("iui")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === "iui"
                    ? "bg-plum-deep text-white shadow-md"
                    : "text-charcoal-text/70 hover:text-plum-deep"
                }`}
              >
                IUI Protocol Steps (3 Steps)
              </button>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-6">
            {(activeTab === "ivf" ? ivfSteps : iuiSteps).map((stepItem, idx) => (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-cream-bg shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-cream-bg border border-mauve-rose/20 flex items-center justify-center shrink-0 font-serif text-2xl font-bold text-mauve-rose">
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

                  <div className="p-3.5 rounded-xl bg-cream-bg/70 border border-mauve-rose/15 flex items-center gap-3">
                    <Activity className="w-4 h-4 text-mauve-rose shrink-0" />
                    <span className="text-xs font-medium text-charcoal-text/85">
                      {stepItem.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Clinical Precision & Comfort Highlights */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-cream-bg/50 border border-cream-bg">
              <div className="w-12 h-12 rounded-2xl bg-mauve-rose/10 text-mauve-rose flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum-deep mb-3">Painless & Safe Care</h3>
              <p className="text-sm text-charcoal-text/75 leading-relaxed">
                Egg retrievals are conducted under mild sedation with certified anesthesia support. Patients report minimal discomfort and return home the same afternoon.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-cream-bg/50 border border-cream-bg">
              <div className="w-12 h-12 rounded-2xl bg-mauve-rose/10 text-mauve-rose flex items-center justify-center mb-6">
                <Beaker className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum-deep mb-3">Accredited Partner Labs</h3>
              <p className="text-sm text-charcoal-text/75 leading-relaxed">
                Partner fertility centers utilize ISO cleanroom incubators with HEPA air filtration for embryo culture under expert embryologist monitoring.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-cream-bg/50 border border-cream-bg">
              <div className="w-12 h-12 rounded-2xl bg-mauve-rose/10 text-mauve-rose flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum-deep mb-3">Continuous Emotional Care</h3>
              <p className="text-sm text-charcoal-text/75 leading-relaxed">
                Fertility treatment involves hope and patience. You have a direct nurse-coordinator assigned to handle your medication schedule and questions daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-20 px-6 bg-cream-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve-rose mb-3 block">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum-deep font-bold">
              Frequently Asked Questions on IVF & IUI
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-cream-bg overflow-hidden transition-all shadow-sm"
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
