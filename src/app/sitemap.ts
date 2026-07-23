import { MetadataRoute } from "next";
import { articles } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/consultations",
    "/services/ivf-iui",
    "/services/icsi",
    "/services/egg-freezing",
    "/services/donor-programs",
    "/services/pregnancy-care",
    "/contact",
    "/blog",
  ];

  const staticEntries = staticRoutes.map((route) => {
    let priority = 0.8;
    let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route === "/services/consultations" || route === "/contact") {
      priority = 0.9;
      changeFrequency = "daily";
    } else if (route.startsWith("/services")) {
      priority = 0.85;
      changeFrequency = "weekly";
    } else if (route === "/about" || route === "/blog") {
      priority = 0.8;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  const blogEntries = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
