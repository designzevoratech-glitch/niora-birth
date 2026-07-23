import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IsThisForYou from "@/components/sections/IsThisForYou";
import Scene2Understanding from "@/components/sections/Scene2Understanding";
import Scene3Guide from "@/components/sections/Scene3Guide";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import TrustStrip from "@/components/sections/TrustStrip";
import Faq from "@/components/sections/Faq";
import CtaBanner from "@/components/sections/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "Fertility Consultation & Care Coordination Kerala | Niora Birth",
  description:
    "Empathetic fertility guidance and care coordination in Muvattupuzha & Ernakulam, Kerala. Understand IVF, IUI, ICSI, and fertility options with trusted specialists.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Fertility Consultation & Care Coordination Kerala | Niora Birth",
    description:
      "Understand your fertility options in plain language. Get expert 1-on-1 guidance and seamless referral to top fertility specialists and partner hospitals in Kerala.",
    url: siteUrl,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Niora Birth",
  description: "Fertility Consultation & Patient Guidance Platform in Kerala",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Niora Birth perform medical procedures or IVF treatments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Niora Birth is a fertility consultation, patient guidance, and care coordination platform. All medical evaluations, clinical diagnoses, IVF, IUI, ICSI, and surgeries are conducted by qualified fertility specialists at our partner hospitals.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Niora Birth located in Kerala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our physical consultation desk is located on MC Road, 379 Building Number, Second Floor, 4 Shop, Near Vishal Mart, Pezhakkappilly, Muvattupuzha, Ernakulam, Kerala 686673.",
      },
    },
    {
      "@type": "Question",
      name: "Can I receive fertility consultation if I live outside Ernakulam or Kerala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We provide direct 1-on-1 virtual video consultations for patients across Kerala, other Indian states, and international/NRI couples, guiding you step-by-step before visiting partner centers.",
      },
    },
    {
      "@type": "Question",
      name: "What happens during a Niora Birth fertility guidance session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During your consultation, our team reviews your concerns, explains medical terms in simple language, helps evaluate diagnostic steps, and connects you with top-rated specialists suited to your specific needs.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={websiteSchema} />
      <JsonLd data={homepageFaqSchema} />

      {/* 1. Hero — First impression: Who we are + what we do */}
      <Hero />

      {/* 2. Is This For You? — User sees themselves immediately */}
      <IsThisForYou />

      {/* 3. Understanding — Emotional connection */}
      <Scene2Understanding />

      {/* 4. Our Philosophy — Science + empathy */}
      <Scene3Guide />

      {/* 5. Why Choose Us — Stats + feature proof points */}
      <WhyChooseUs />

      {/* 6. Services — What we actually offer */}
      <ServicesOverview />

      {/* 7. How It Works — 4-step process */}
      <Process />

      {/* 8. Real Stories — Social proof */}
      <Testimonials />

      {/* 9. Trust Strip — Dark contrast marquee */}
      <TrustStrip />

      {/* 10. FAQ — Core questions answered */}
      <Faq />

      {/* 11. CTA Banner — Final conversion push */}
      <CtaBanner />
    </div>
  );
}
