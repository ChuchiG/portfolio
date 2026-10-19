"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-20 pb-10 md:pt-28 md:pb-14 relative bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabecera */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-semibold text-blue-800 tracking-wide uppercase font-mono">
              Resolución Técnica de Dudas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Todo lo que tu PYME necesita saber antes de empezar
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Claridad total. Sin tecnicismos vacíos ni falsas promesas comerciales: respuestas directas a las dudas más habituales.
          </p>
        </div>

        {/* Lista de Acordeones */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white/80 backdrop-blur-xl border border-white shadow-xl ring-1 ring-slate-900/5"
                    : "bg-white/70 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-slate-900 text-white rotate-180"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                        <p className="mb-3">{item.answer}</p>
                        {item.highlight && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#10B981] mt-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{item.highlight}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
