import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { FAQ_ITEMS } from "@/data/faq";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jesusgajate.dev"),
  title: "Jesús Gajate | Webs ultrarrápidas que posicionan en Google y en la IA",
  description:
    "Desarrollo de aplicaciones web de alto impacto con Next.js, Core Web Vitals 100/100 (LCP < 0.4s) y arquitectura ontológica GEO para motores de búsqueda generativa (Perplexity, ChatGPT, Google AI Overviews).",
  keywords: [
    "Jesús Gajate",
    "Desarrollo Web a Medida",
    "SEO Local",
    "GEO motores IA",
    "Generative Engine Optimization",
    "Next.js App Router",
    "Core Web Vitals",
    "LCP < 0.4s",
    "Consultoría Técnica PYMEs",
    "JSON-LD @graph",
  ],
  authors: [{ name: "Jesús Gajate Luna", url: "https://jesusgajate.dev" }],
  creator: "Jesús Gajate Luna",
  publisher: "Jesús Gajate Luna",
  alternates: {
    canonical: "https://jesusgajate.dev",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://jesusgajate.dev",
    siteName: "Jesús Gajate - Tech Architecture & GEO",
    title: "Jesús Gajate | Webs ultrarrápidas que posicionan en Google y en la IA",
    description:
      "Webs a medida para PYMEs que cargan en menos de 0.4s y dominan la recomendación en ChatGPT, Perplexity y Google Maps.",
    images: [
      {
        url: "/hero-developer.jpg",
        width: 1200,
        height: 1500,
        alt: "Jesús Gajate - Senior Frontend & Technical GEO Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesús Gajate | Webs ultrarrápidas que posicionan en Google y en la IA",
    description:
      "Webs que cargan en menos de 0.4s y dominan la recuperación de respuestas en motores de IA y búsqueda tradicional.",
    images: ["/hero-developer.jpg"],
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
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Modelado Ontológico Unificado bajo @graph (Directivas GEO & RAG y SEO Técnico)
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://jesusgajate.dev/#website",
        "url": "https://jesusgajate.dev",
        "name": "Jesús Gajate Portfolio & Technical Lab",
        "description": "Portafolio y servicios de arquitectura web fullstack, SEO técnico y optimización para motores generativos (GEO).",
        "publisher": {
          "@id": "https://jesusgajate.dev/#person",
        },
        "inLanguage": "es-ES",
      },
      {
        "@type": "Person",
        "@id": "https://jesusgajate.dev/#person",
        "name": "Jesús Gajate Luna",
        "jobTitle": "Senior Frontend & UX Engineer · Technical GEO/SEO Architect",
        "url": "https://jesusgajate.dev",
        "image": "https://jesusgajate.dev/hero-developer.jpg",
        "sameAs": [
          "https://github.com/ChuchiG",
          "https://linkedin.com/in/jesusgajate",
        ],
        "knowsAbout": [
          "Next.js App Router",
          "Generative Engine Optimization (GEO)",
          "Retrieval-Augmented Generation (RAG)",
          "Core Web Vitals Optimization",
          "Ontological JSON-LD Graphs",
          "React 19 & TypeScript",
          "Fullstack Engineering",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://jesusgajate.dev/#service",
        "name": "Jesús Gajate · Consultoría y Desarrollo Web a Medida & GEO",
        "provider": {
          "@id": "https://jesusgajate.dev/#person",
        },
        "url": "https://jesusgajate.dev",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "España y Global",
        },
        "serviceType": [
          "Desarrollo Web a Medida",
          "SEO Local",
          "GEO para motores de IA",
          "Consultoría Técnica",
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "@id": "https://jesusgajate.dev/#offers",
          "name": "Catálogo de Servicios Técnicos para PYMEs",
          "itemListElement": [
            {
              "@type": "Offer",
              "@id": "https://jesusgajate.dev/#offer-web",
              "itemOffered": {
                "@type": "Service",
                "name": "Desarrollo Web a Medida",
                "description": "Aplicaciones y webs corporativas en Next.js y React 19, con Core Web Vitals 100/100 y LCP inferior a 0.4s para máxima conversión.",
              },
            },
            {
              "@type": "Offer",
              "@id": "https://jesusgajate.dev/#offer-seolocal",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Local",
                "description": "Posicionamiento en Google Maps, optimización de ficha de empresa y captación de llamadas directas en el área geográfica de influencia.",
              },
            },
            {
              "@type": "Offer",
              "@id": "https://jesusgajate.dev/#offer-geo",
              "itemOffered": {
                "@type": "Service",
                "name": "GEO para motores de IA",
                "description": "Generative Engine Optimization para indexación semántica fáctica y recomendación preferente en ChatGPT, Perplexity y Google AI Overviews.",
              },
            },
            {
              "@type": "Offer",
              "@id": "https://jesusgajate.dev/#offer-consulting",
              "itemOffered": {
                "@type": "Service",
                "name": "Consultoría Técnica",
                "description": "Auditorías de arquitectura web, erradicación de código inflado, diagnóstico de Core Web Vitals y migración desde plantillas lentas.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://jesusgajate.dev/#faq",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
      },
      {
        "@type": "WebPage",
        "@id": "https://jesusgajate.dev/#webpage",
        "url": "https://jesusgajate.dev",
        "name": "Jesús Gajate | Webs ultrarrápidas que posicionan en Google y en la IA",
        "isPartOf": {
          "@id": "https://jesusgajate.dev/#website",
        },
        "about": {
          "@id": "https://jesusgajate.dev/#person",
        },
        "description": "Sistemas web concebidos para cargar en menos de 0.4s y ser recuperados prioritariamente por motores de búsqueda generativa.",
        "inLanguage": "es-ES",
      },
    ],
  };

  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0F172A] selection:text-[#F8FAFC] flex flex-col">
        {children}
      </body>
    </html>
  );
}
