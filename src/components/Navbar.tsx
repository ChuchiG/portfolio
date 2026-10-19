"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, ArrowUpRight, Zap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#servicios" },
    { name: "Comparativa", href: "#comparativa" },
    { name: "FAQ", href: "#faq" },
    { name: "Diagnóstico", href: "#diagnostico" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border border-white shadow-xl py-2.5 px-4 sm:px-6"
            : "bg-white/80 backdrop-blur-xl border border-white shadow-xl py-3 px-5 sm:px-7"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Identidad / Logotipo */}
          <a
            href="#hero"
            className="group flex items-center transition-opacity hover:opacity-90"
            aria-label="Jesús Gajate - Inicio"
          >
            <Image
              src="/logo.svg"
              alt="Jesús Gajate .dev - Web & GEO Partner"
              width={220}
              height={54}
              className="h-11 sm:h-[50px] w-auto object-contain"
              priority
              unoptimized
            />
          </a>

          {/* Enlaces Desktop */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-white rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Acción Principal */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#diagnostico"
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-200 transition-transform group-hover:rotate-12" />
              <span>Auditar mi Web</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Botón Móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menú Móvil Desplegable */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden pt-3 pb-2 border-t border-slate-200/70 mt-2.5"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#diagnostico"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold shadow-md shadow-blue-500/20"
                >
                  <Zap className="w-3.5 h-3.5 text-blue-200" />
                  <span>Solicitar Auditoría Rápida</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
