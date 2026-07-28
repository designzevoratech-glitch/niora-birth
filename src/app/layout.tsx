import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";
import { LeadModalProvider } from "@/components/providers/LeadModalProvider";
import MobileActionBar from "@/components/lead/MobileActionBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const viewport: Viewport = {
  themeColor: "#4A2E35",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Niora Birth | Fertility Consultation & Guidance Platform Kerala",
    template: "%s | Niora Birth Kerala",
  },
  description:
    "Niora Birth provides expert fertility consultation, patient guidance, and care coordination in Kerala. Understand IVF, IUI, ICSI, and fertility options with trusted specialists at partner hospitals.",
  keywords: [
    "fertility consultation Kerala",
    "fertility guidance Ernakulam",
    "fertility advisor Muvattupuzha",
    "IVF consultation Kerala",
    "IUI guidance Kochi",
    "ICSI male fertility consultation",
    "second opinion fertility Kerala",
    "pregnancy guidance Kerala",
    "egg freezing consultation",
    "Niora Birth",
  ],
  authors: [{ name: "Niora Birth Care Coordination Team" }],
  creator: "Niora Birth",
  publisher: "Niora Birth",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Niora Birth | Fertility Consultation & Care Coordination Platform Kerala",
    description:
      "Understand fertility concerns, get expert 1-on-1 guidance, and connect with trusted fertility specialists and accredited partner hospitals across Kerala.",
    url: siteUrl,
    siteName: "Niora Birth",
    images: [
      {
        url: `${siteUrl}/hero-bg-v2.png`,
        width: 1200,
        height: 630,
        alt: "Niora Birth Fertility Consultation & Patient Guidance Platform Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niora Birth | Fertility Consultation & Guidance Platform Kerala",
    description:
      "Compassionate, plain-language fertility advice & care coordination connecting patients with top fertility specialists in Kerala.",
    images: [`${siteUrl}/hero-bg-v2.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: "Niora Birth",
  alternateName: "Niora Birth Fertility Guidance Platform",
  url: siteUrl,
  logo: `${siteUrl}/updated_logo_cropped.png`,
  image: `${siteUrl}/hero-bg-v2.png`,
  description:
    "Niora Birth is a dedicated fertility consultation, patient guidance, and care coordination platform based in Kerala, connecting couples with vetted fertility specialists and partner hospitals.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "MC Road, 379 Building Number, Second Floor, 4 Shop, Near Vishal Mart, Pezhakkappilly",
    addressLocality: "Muvattupuzha",
    addressRegion: "Kerala",
    postalCode: "686673",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.010903,
    longitude: 76.574677,
  },
  telephone: "+91-9745477622",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-7994892509",
      contactType: "customer service",
      availableLanguage: ["English", "Malayalam", "Hindi"],
    },
  ],
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Kerala",
    },
    {
      "@type": "City",
      name: "Ernakulam",
    },
    {
      "@type": "City",
      name: "Muvattupuzha",
    },
    {
      "@type": "City",
      name: "Kochi",
    },
  ],
  medicalSpecialty: ["Gynecology", "Obstetrics", "Reproductive Endocrinology"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Niora Birth",
  image: `${siteUrl}/updated_logo_cropped.png`,
  url: siteUrl,
  telephone: "+91-9745477622",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "MC Road, 379 Building Number, Second Floor, 4 Shop, Near Vishal Mart, Pezhakkappilly",
    addressLocality: "Muvattupuzha",
    addressRegion: "Kerala",
    postalCode: "686673",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.010903,
    longitude: 76.574677,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className="min-h-full flex flex-col selection:bg-blush-pink selection:text-plum-deep">
        <SmoothScroll>
          <LeadModalProvider>
            <Navbar />
            <main className="flex-1 pb-16 lg:pb-0">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <MobileActionBar />
          </LeadModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
