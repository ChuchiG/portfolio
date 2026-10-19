import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // Rastreadores de búsqueda activa y RAG asistida por IA
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "Claude-SearchBot",
          "Claude-User",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://jesusgajate.dev/sitemap.xml",
  };
}
