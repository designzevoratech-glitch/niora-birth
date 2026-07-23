import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "ICSI Treatment Guidance & Male Fertility Counseling Kerala | Niora Birth",
  description:
    "Learn about ICSI (Intracytoplasmic Sperm Injection) micro-injection guidance for male factor infertility in Kerala. Expert advice on sperm count, motility, and partner lab referrals.",
  alternates: {
    canonical: `${siteUrl}/services/icsi`,
  },
  openGraph: {
    title: "ICSI Micro-Injection & Male Fertility Guidance Kerala | Niora Birth",
    description:
      "Plain-language explanation of ICSI technology for severe male factor infertility and connection to experienced embryology partner centers.",
    url: `${siteUrl}/services/icsi`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "HealthCareService",
  name: "ICSI & Male Factor Fertility Guidance",
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Kerala",
  },
  serviceType: "Male Fertility Guidance",
  description:
    "Consultation guidance on ICSI single-sperm micro-injection, testicular sperm extraction (TESA), semen parameter evaluation, and specialist embryology referrals.",
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
      name: "ICSI Guidance",
      item: `${siteUrl}/services/icsi`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is ICSI recommended over standard IVF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ICSI is indicated when there is severe low sperm count (oligospermia), poor motility (asthenozoospermia), high proportion of abnormal sperm forms, or previous IVF fertilization failure.",
      },
    },
  ],
};

export default function IcsiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
