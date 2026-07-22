"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Beaker,
  Dna,
  Baby,
  Snowflake,
  HeartPulse,
  Stethoscope,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Plane,
} from "lucide-react";
import TrustStrip from "@/components/sections/TrustStrip";
import CtaBanner from "@/components/sections/CtaBanner";

const allServices = [
  {
    slug: "ivf-iui",
    category: "conception",
    title: "IVF & IUI Treatment Guidance",
    plainBadge: "Conception Assistance Options",
    tag: "Protocol Education",
    icon: Beaker,
    image: "/service-ivf.png",
    shortDesc: "Understand IVF and IUI assisted reproduction options. We explain treatment cycles simply and connect you with vetted fertility specialists.",
    keyPoints: ["Plain-language protocol explanation", "Specialist & partner center referral", "Initial cycle cost guidance"],
    href: "/services/ivf-iui",
  },
  {
    slug: "icsi",
    category: "male-factor",
    title: "ICSI (Micro-Injection) Guidance",
    plainBadge: "Male Factor Precision Options",
    tag: "Male Fertility Guidance",
    icon: Dna,
    image: "/service-icsi.png",
    shortDesc: "Learn how single-sperm injection helps address severe low count or motility. We guide you to specialized partner laboratories.",
    keyPoints: ["Male factor educational overview", "Referrals to experienced embryologists", "Clear diagnostic checklist"],
    href: "/services/icsi",
  },
  {
    slug: "pregnancy-care",
    category: "obstetrics",
    title: "Pregnancy & Antenatal Guidance",
    plainBadge: "Trimester Support Options",
    tag: "Maternity Guidance",
    icon: Baby,
    image: "/service-pregnancy.png",
    shortDesc: "Comprehensive advice from early confirmation through every trimester, connecting you with accredited obstetric partners.",
    keyPoints: ["Trimester milestone guidance", "High-risk pregnancy care coordination", "Obstetric specialist connections"],
    href: "/services/pregnancy-care",
  },
  {
    slug: "egg-freezing",
    category: "preservation",
    title: "Egg & Embryo Freezing Guidance",
    plainBadge: "Fertility Preservation Options",
    tag: "Future Planning Advice",
    icon: Snowflake,
    image: "/service-freezing.png",
    shortDesc: "Understand vitrification preservation options and ovarian reserve testing before connecting with accredited cryo-bank partner centers.",
    keyPoints: ["Preservation timing advice", "AMH baseline understanding", "Vetted cryo-bank partner referrals"],
    href: "/services/egg-freezing",
  },
  {
    slug: "donor-programs",
    category: "donor",
    title: "Donor Programs Guidance",
    plainBadge: "Gamete Options Education",
    tag: "Ethical & Legal Support",
    icon: HeartPulse,
    image: "/service-consultation.png",
    shortDesc: "Empathetic guidance on donor egg and sperm options in compliance with national ART regulations through licensed partner centers.",
    keyPoints: ["Confidential guidance", "ART regulation compliance advice", "Licensed donor bank referrals"],
    href: "/services/donor-programs",
  },
  {
    slug: "consultations",
    category: "general",
    title: "1-on-1 Fertility Guidance Consultation",
    plainBadge: "Initial Patient Advisory",
    tag: "Start Here — No Pressure",
    icon: Stethoscope,
    image: "/service-consultation.png",
    shortDesc: "Personalized guidance consultation to review your concerns, explain diagnostic steps, and outline your treatment path.",
    keyPoints: ["30-45 min personalized guidance", "Virtual or in-person guidance call", "Clear fertility roadmap"],
    href: "/services/consultations",
  },
];

const categoryFilters = [
  { id: "all", label: "All Guidance Topics" },
  { id: "conception", label: "Conception (IVF/IUI)" },
  { id: "male-factor", label: "Male Factor (ICSI)" },
  { id: "preservation", label: "Egg Freezing" },
  { id: "donor", label: "Donor Programs" },
  { id: "obstetrics", label: "Pregnancy Guidance" },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices =
    selectedCategory === "all"
      ? allServices
      : allServices.filter((s) => s.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream-bg">
      {/* 1. Hero */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mauve-rose/10 border border-mauve-rose/20 text-mauve-rose text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Fertility Treatment Guidance & Education Catalog
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum-deep font-bold mb-6 leading-tight"
          >
            Understand Your Options,<br />
            <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
              Choose With Confidence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-charcoal-text/80 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            We help you understand fertility options in plain language. Explore available guidance topics below; during your consultation, we discuss your goals and connect you with qualified fertility specialists and partner hospitals.
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto">
            {categoryFilters.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-plum-deep text-white shadow-md scale-105"
                    : "bg-cream-bg text-charcoal-text/75 hover:bg-mauve-rose/20 hover:text-plum-deep"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white rounded-[2.25rem] overflow-hidden border border-cream-bg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/85 via-plum-deep/30 to-transparent" />

                      {/* Pill Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="text-[10.5px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white">
                          {service.tag}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-blush-pink">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="text-xs font-bold uppercase tracking-wider text-mauve-rose mb-1">
                        {service.plainBadge}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-plum-deep mb-3 leading-snug group-hover:text-mauve-rose transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-charcoal-text/75 leading-relaxed mb-6">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.keyPoints.map((point, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-charcoal-text/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-success-sage shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="px-7 pb-7 pt-0">
                    <Link
                      href={service.href}
                      className="w-full py-3.5 rounded-2xl bg-cream-bg text-plum-deep font-semibold text-sm hover:bg-plum-deep hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Explore Guidance Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Traveling / Out-of-Station Patient Support Card */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-plum-deep via-plum-deep/95 to-plum-deep text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-blush-pink text-xs font-bold uppercase tracking-wider mb-4">
                <Plane className="w-4 h-4" />
                Interstate & NRI Patient Guidance
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                Planning Treatment Guidance from Outside Kerala?
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                We make your consultation journey smooth with remote video guidance, coordination of preliminary scans with your home doctor, and referral to trusted partner hospitals in Kerala.
              </p>
            </div>
            <Link
              href="https://wa.me/917994892509?text=Hi%20Niora%20Birth,%20I'm%20traveling%20from%20outside%20Kerala%20and%20need%20consultation%20guidance."
              target="_blank"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-mauve-rose to-blush-pink text-plum-deep font-bold text-sm hover:opacity-95 transition-opacity shrink-0 shadow-md flex items-center gap-2"
            >
              <span>Request Travel Guidance Plan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />
      <CtaBanner />
    </div>
  );
}
