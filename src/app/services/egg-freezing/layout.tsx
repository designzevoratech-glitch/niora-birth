import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "Egg Freezing Consultation & Fertility Preservation Kerala | Niora Birth",
  description:
    "Understand egg and embryo freezing preservation options in Kerala. Niora Birth provides AMH baseline guidance, vitrification advice, and cryo-bank partner center connections.",
  alternates: {
    canonical: `${siteUrl}/services/egg-freezing`,
  },
  openGraph: {
    title: "Egg & Embryo Freezing Guidance Kerala | Niora Birth",
    description:
      "Empowering women to plan future family timelines. Plain-language guidance on ovarian reserve testing and liquid nitrogen cryopreservation.",
    url: `${siteUrl}/services/egg-freezing`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "HealthCareService",
  name: "Egg & Embryo Freezing Consultation Guidance",
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Kerala",
  },
  serviceType: "Fertility Preservation Guidance",
  description:
    "Guidance on vitrification egg freezing, AMH assessment, preservation timing, and referral to accredited cryo-bank partner hospitals.",
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
      name: "Egg Freezing Guidance",
      item: `${siteUrl}/services/egg-freezing`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long can frozen eggs be safely stored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using modern vitrification technology, eggs stored in liquid nitrogen at -196°C can remain preserved safely for 10 to 15+ years without loss of quality.",
      },
    },
  ],
};

export default function EggFreezingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
