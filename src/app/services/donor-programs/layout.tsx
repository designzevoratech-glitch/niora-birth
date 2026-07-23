import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "Donor Program Guidance & Fertility Counseling Kerala | Niora Birth",
  description:
    "Ethical guidance on donor egg, donor sperm, and surrogacy options under Indian ART regulations. Confidential counseling and referral to licensed partner centers in Kerala.",
  alternates: {
    canonical: `${siteUrl}/services/donor-programs`,
  },
  openGraph: {
    title: "Donor Program Advisory & ART Regulation Guidance Kerala | Niora Birth",
    description:
      "Empathetic, confidential counseling on gamete donor options in full compliance with ART Act guidelines in Kerala.",
    url: `${siteUrl}/services/donor-programs`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "HealthCareService",
  name: "Donor Program & Gamete Options Guidance",
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Kerala",
  },
  serviceType: "Gamete Donor Guidance",
  description:
    "Confidential educational guidance and counseling regarding donor eggs, donor sperm, legal compliance under ART Act, and licensed partner center referrals.",
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
      name: "Donor Programs Guidance",
      item: `${siteUrl}/services/donor-programs`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are donor programs in Kerala regulated by law?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All donor egg and sperm programs in India are strictly regulated under the Assisted Reproductive Technology (ART) Regulation Act, ensuring complete anonymity, screening, and legal compliance.",
      },
    },
  ],
};

export default function DonorProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
