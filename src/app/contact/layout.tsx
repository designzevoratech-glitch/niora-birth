import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "Contact Niora Birth | Fertility Advisor Muvattupuzha Ernakulam",
  description:
    "Contact Niora Birth for personalized fertility guidance and care coordination in Muvattupuzha, Ernakulam, Kerala. Office on MC Road, near Vishal Mart. Call 9745477622 or WhatsApp 7994892509.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Niora Birth | Fertility Consultation Desk Muvattupuzha Kerala",
    description:
      "Schedule your in-person or virtual fertility consultation. Serving patients across Kerala and out-of-station couples.",
    url: `${siteUrl}/contact`,
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@id": `${siteUrl}/#organization`,
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
      name: "Contact Us",
      item: `${siteUrl}/contact`,
    },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
