import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jesusgajate.dev",
      lastModified: new Date("2026-10-16"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
