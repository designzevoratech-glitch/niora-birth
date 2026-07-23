import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "1-on-1 Fertility Consultation & Second Opinion Ernakulam | Niora Birth",
  description:
    "Book a personalized 1-on-1 fertility guidance consultation in Muvattupuzha & Ernakulam, Kerala. Get plain-language advice, diagnostic clarity, and partner doctor referrals.",
  alternates: {
    canonical: `${siteUrl}/services/consultations`,
  },
  openGraph: {
    title: "1-on-1 Fertility Consultation & Second Opinion Kerala | Niora Birth",
    description:
      "Personalized fertility advisory session with zero medical jargon. In-person in Muvattupuzha or virtual consultation.",
    url: `${siteUrl}/services/consultations`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "HealthCareService",
  name: "1-on-1 Fertility Consultation & Patient Guidance",
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Kerala",
  },
  serviceType: "Fertility Consultation",
  description:
    "30-45 minute personalized guidance session reviewing fertility concerns, AMH/semen reports, diagnostic next steps, and referral to trusted fertility specialists.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services Guidance",
      item: `${siteUrl}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "1-on-1 Consultation",
      item: `${siteUrl}/services/consultations`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I bring to my initial fertility consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Please bring any past medical history, AMH blood test reports, pelvic ultrasound scans, or semen analysis reports if available.",
      },
    },
    {
      "@type": "Question",
      name: "Is virtual fertility consultation available for patients outside Kerala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer direct video consultations for couples residing in Karnataka, Tamil Nadu, GCC countries, or elsewhere.",
      },
    },
  ],
};

export default function ConsultationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
