import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoServices from "@/components/BentoServices";
import BeforeAfter from "@/components/BeforeAfter";
import FAQSection from "@/components/FAQSection";
import DiagnosticCTA from "@/components/DiagnosticCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC] bg-grid-subtle relative selection:bg-[#0F172A] selection:text-white">
      {/* Navegación flotante fija superior */}
      <Navbar />

      {/* Hero Section: 12 columnas con retrato 4:5 y badges de cristal */}
      <HeroSection />

      {/* Bento Grid: Tarjeta blanca 2 cols (0.4s) + Tarjeta oscura 1 col (GEO & Maps) */}
      <BentoServices />

      {/* Comparativa Interactiva con Slider arrastrable */}
      <BeforeAfter />

      {/* Preguntas Frecuentes & Objeciones de PYMEs (Sincronizado con Schema FAQPage RAG) */}
      <FAQSection />

      {/* Consola Final de Diagnóstico & Selector de Píldoras Conectada a Server Action */}
      <DiagnosticCTA />
    </main>
  );
}
