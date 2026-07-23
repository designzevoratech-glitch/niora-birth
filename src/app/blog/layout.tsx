import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "Fertility Knowledge Hub & Expert Guidance Articles Kerala | Niora Birth",
  description:
    "Explore transparent fertility treatment guides, IVF cost breakdowns, ICSI science explanations, and out-of-station patient advice written by Niora Birth care specialists in Kerala.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Fertility Knowledge Hub & Articles | Niora Birth Kerala",
    description:
      "Plain-language medical guides, IVF treatment costs in Kerala, ICSI vs IUI comparisons, and egg freezing advice.",
    url: `${siteUrl}/blog`,
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
      name: "Knowledge Hub & Blog",
      item: `${siteUrl}/blog`,
    },
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
