import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "IVF & IUI Treatment Guidance & Consultation Kerala | Niora Birth",
  description:
    "Understand IVF and IUI fertility treatment processes in Kerala. Niora Birth provides plain-language protocol guidance, cost breakdowns, and specialist referrals.",
  alternates: {
    canonical: `${siteUrl}/services/ivf-iui`,
  },
  openGraph: {
    title: "IVF & IUI Guidance & Advisory Kerala | Niora Birth",
    description:
      "Clear guidance on ovulation induction, IUI cycles, IVF cleanroom protocols, and connecting with top fertility specialists at partner hospitals in Kerala.",
    url: `${siteUrl}/services/ivf-iui`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "HealthCareService",
  name: "IVF & IUI Treatment Guidance & Patient Counseling",
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Kerala",
  },
  serviceType: "Assisted Reproduction Guidance",
  description:
    "Educational advisory and care coordination explaining IUI (intrauterine insemination) and IVF (in vitro fertilization) treatment cycles.",
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
      name: "IVF & IUI Guidance",
      item: `${siteUrl}/services/ivf-iui`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between IUI and IVF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IUI (Intrauterine Insemination) is a lower-intervention procedure where washed sperm is placed into the uterus during ovulation. IVF (In Vitro Fertilization) involves retrieving eggs and fertilizing them with sperm in a laboratory cleanroom before transferring an embryo.",
      },
    },
    {
      "@type": "Question",
      name: "Does Niora Birth perform IVF procedures directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Niora Birth provides pre-treatment consultation, protocol explanation, and patient care coordination. Ovarian stimulation, egg retrieval, fertilization, and embryo transfer are performed by qualified specialists at licensed partner hospitals.",
      },
    },
  ],
};

export default function IvfIuiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
