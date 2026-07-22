"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Baby, Beaker, Dna, Snowflake, Stethoscope } from "lucide-react";

const services = [
  {
    title: "IVF & IUI",
    plainBadge: "Conception Assistance",
    description: "Advanced fertility treatments designed to give you the highest chance of success, guided by experienced specialists.",
    icon: Beaker,
    href: "/services/ivf-iui",
    image: "/service-ivf.png",
    tag: "Highest Success Path",
  },
  {
    title: "ICSI",
    plainBadge: "Male Fertility Precision",
    description: "Specialized micro-injection technique for addressing male factor infertility with maximum accuracy and care.",
    icon: Dna,
    href: "/services/icsi",
    image: "/service-icsi.png",
    tag: "Advanced Micro-Care",
  },
  {
    title: "Pregnancy Care",
    plainBadge: "Trimester Guidance",
    description: "Comprehensive medical & emotional care from conception through every trimester, ensuring comfort and confidence.",
    icon: Baby,
    href: "/services/pregnancy-care",
    image: "/service-pregnancy.png",
    tag: "Full Journey Support",
  },
  {
    title: "Egg Freezing",
    plainBadge: "Fertility Preservation",
    description: "Preserve your healthy eggs and future family choices with state-of-the-art cryopreservation technology.",
    icon: Snowflake,
    href: "/services/egg-freezing",
    image: "/service-freezing.png",
    tag: "Future Planning",
  },
  {
    title: "Consultations",
    plainBadge: "1-on-1 Specialist Assessment",
    description: "Personalized guidance and clear, honest diagnosis for both male and female fertility concerns.",
    icon: Stethoscope,
    href: "/services/consultations",
    image: "/service-consultation.png",
    tag: "Start Here — Free Call",
  },
];

export default function ServicesOverview() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-62%"]);

  return (
    <section ref={targetRef} className="relative bg-white">
      {/* Desktop / Large Screens: Sticky 260vh Horizontal Scroll */}
      <div className="hidden md:block relative h-[260vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Section Header */}
          <div className="container mx-auto px-6 max-w-7xl mb-10 flex-shrink-0">
            <div className="flex flex-row justify-between items-end gap-4 pt-16">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="h-[1px] w-10 bg-mauve-rose" />
                  <span className="text-xs font-semibold tracking-[0.22em] uppercase text-mauve-rose">
                    Our Specialized Treatments
                  </span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-[44px] lg:text-[54px] text-plum-deep font-bold tracking-tight leading-[1.08]"
                >
                  Every path to{" "}
                  <span
                    className="italic"
                    style={{
                      background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    life,
                  </span>{" "}
                  covered.
                </motion.h2>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-mauve-rose hover:text-plum-deep transition-colors group"
                >
                  View all treatments
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <p className="text-sm text-charcoal-text/60 font-medium">← Scroll down to explore options</p>
              </div>
            </div>
          </div>

          {/* Desktop Horizontal Track */}
          <motion.div
            style={{ x }}
            className="flex gap-6 pl-[5%] md:pl-[8%] pb-12 flex-shrink-0"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="w-[360px] lg:w-[390px] h-[510px] rounded-[2.25rem] overflow-hidden flex flex-col relative flex-shrink-0 group cursor-pointer shadow-lg"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-deep via-plum-deep/65 to-plum-deep/20 group-hover:from-plum-deep group-hover:via-plum-deep/75 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col text-white">
                    {/* Tag pill */}
                    <div className="self-start">
                      <span className="text-[11px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white shadow-sm">
                        {service.tag}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mt-auto mb-4 shadow-sm">
                      <Icon className="w-6 h-6 text-blush-pink" />
                    </div>

                    {/* Title + Subtitle + description */}
                    <div className="transform transition-transform duration-400 group-hover:-translate-y-1.5">
                      <div className="text-[12px] font-bold uppercase tracking-wider text-blush-pink mb-1">
                        {service.plainBadge}
                      </div>
                      <h3 className="font-display text-[26px] font-bold mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-[14px] text-white/85 leading-relaxed mb-5 max-w-[310px]">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-[14px] font-semibold text-blush-pink hover:text-white transition-colors group/arrow"
                      >
                        Learn more about {service.title}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/arrow:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Top index badge */}
                  <div className="absolute top-6 right-6 font-display text-[12px] font-bold text-white/50 tracking-widest bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    0{index + 1} / 0{services.length}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Mobile & Small Screens (< 768px): Vertical Touch-Friendly Stack */}
      <div className="md:hidden py-16 px-5 container mx-auto">
        {/* Mobile Header */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="h-[1px] w-8 bg-mauve-rose" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-mauve-rose">
              Our Specialized Treatments
            </span>
            <div className="h-[1px] w-8 bg-mauve-rose" />
          </div>
          <h2 className="font-display text-[32px] text-plum-deep font-bold tracking-tight leading-[1.1] mb-3">
            Every path to{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C17A8A, #E8B4C0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              life,
            </span>{" "}
            covered.
          </h2>
          <p className="text-[14.5px] text-charcoal-text/75 leading-relaxed max-w-[340px] mx-auto">
            Clear, transparent, and compassionate fertility options tailored to your body.
          </p>
        </div>

        {/* Mobile Cards List */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="w-full h-[440px] rounded-[2rem] overflow-hidden flex flex-col relative shadow-md"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-deep via-plum-deep/65 to-plum-deep/20" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6 h-full flex flex-col text-white">
                  <div className="flex justify-between items-center mb-auto">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                      {service.tag}
                    </span>
                    <span className="font-display text-[11px] font-bold text-white/60 tracking-wider">
                      0{index + 1} / 0{services.length}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blush-pink" />
                  </div>

                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-blush-pink mb-1">
                      {service.plainBadge}
                    </div>
                    <h3 className="font-display text-[24px] font-bold mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[13.5px] text-white/85 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-blush-pink"
                    >
                      Explore treatment details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link href="/services">
            <button className="h-[48px] px-6 rounded-full border-2 border-plum-deep/20 text-plum-deep font-semibold text-[14px]">
              View All Treatments & Protocols →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

