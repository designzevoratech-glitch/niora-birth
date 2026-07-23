import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "Fertility Care Services & Treatment Guidance Kerala | Niora Birth",
  description:
    "Explore Niora Birth's fertility consultation services in Kerala: IVF & IUI guidance, ICSI male fertility guidance, egg freezing preservation, donor program counseling, and pregnancy care coordination.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Fertility Care Guidance & Treatment Overview Kerala | Niora Birth",
    description:
      "Understand your options clearly. 1-on-1 consultations and coordination with partner specialists in Kerala.",
    url: `${siteUrl}/services`,
  },
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
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
