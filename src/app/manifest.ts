import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Niora Birth | Fertility Consultation & Guidance Platform",
    short_name: "Niora Birth",
    description:
      "Premier Fertility Consultation, Patient Guidance & Care Coordination Platform in Kerala. Expert advice on IVF, IUI, ICSI, and fertility care.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#4A2E35",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
