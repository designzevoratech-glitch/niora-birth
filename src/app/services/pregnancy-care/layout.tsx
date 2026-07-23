import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "Early Pregnancy Guidance & Post-Conception Care Kerala | Niora Birth",
  description:
    "Comprehensive pregnancy guidance from early beta-hCG confirmation through all trimesters in Kerala. Connection with accredited obstetric specialists and maternity partner hospitals.",
  alternates: {
    canonical: `${siteUrl}/services/pregnancy-care`,
  },
  openGraph: {
    title: "Pregnancy & Antenatal Guidance Kerala | Niora Birth",
    description:
      "Empathetic trimester support, high-risk pregnancy monitoring advice, and obstetrician referrals across Kerala.",
    url: `${siteUrl}/services/pregnancy-care`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "HealthCareService",
  name: "Pregnancy & Antenatal Guidance",
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Kerala",
  },
  serviceType: "Maternity Guidance",
  description:
    "Guidance and coordination for post-conception care, early pregnancy confirmation, ultrasound schedule advice, and obstetric specialist referrals.",
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
      name: "Pregnancy Care Guidance",
      item: `${siteUrl}/services/pregnancy-care`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I start antenatal guidance after positive IVF test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend scheduling a post-conception guidance call immediately following your positive beta-hCG blood confirmation for early luteal phase support advice and early scan scheduling.",
      },
    },
  ],
};

export default function PregnancyCareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
