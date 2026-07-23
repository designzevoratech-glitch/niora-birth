import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "About Us | Trusted Fertility Guidance & Care Coordinator Kerala",
  description:
    "Learn about Niora Birth's 15+ years of compassionate patient guidance and care coordination in Kerala. We connect couples with ethical fertility specialists and partner hospitals.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Niora Birth | Ethical Fertility Guidance Platform Kerala",
    description:
      "Helping individuals and couples understand fertility concerns in plain language and connecting them with qualified specialists.",
    url: `${siteUrl}/about`,
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
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
      name: "About Us",
      item: `${siteUrl}/about`,
    },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
