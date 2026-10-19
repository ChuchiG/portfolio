"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-[148px] pb-12 md:pt-[158px] md:pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Grid de 12 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Columna Izquierda (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* H1 Principal con tokens estrictos */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-3.5">
              Webs ultrarrápidas que posicionan en{" "}
              <span className="text-slate-900 relative inline-block">
                Google
              </span>{" "}
              y en la{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-indigo-600 bg-clip-text text-transparent">
                IA
              </span>
            </h1>

            {/* Subtítulo Persuasivo para PYMEs */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mb-5">
              El 82% de las PYMEs pierden clientes por webs que tardan más de 3 segundos en abrir o no existen para ChatGPT y Perplexity. Creamos software web a medida con Next.js que carga al instante y domina las búsquedas de tu sector local.
            </p>

            {/* Acciones: Botón Azul Real (#2563EB) y Botón Secundario */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-5 sm:mb-6">
              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/25 rounded-full px-6 py-3.5 text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Solicitar diagnóstico técnico gratuito</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#comparativa"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 rounded-full px-5 py-3.5 text-sm transition-all duration-200 shadow-sm text-center"
              >
                <Gauge className="w-4 h-4 text-[#10B981]" />
                <span>Ver test 0.4s en vivo</span>
              </a>
            </div>

            {/* Métricas de Éxito / Social Proof Técnico */}
            <div className="grid grid-cols-3 gap-6 pt-5 border-t border-slate-200/80 w-full max-w-lg">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    0.4s
                  </span>
                  <span className="text-xs font-bold text-[#10B981]">LCP</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Carga instantánea
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    100
                  </span>
                  <span className="text-xs font-bold text-[#10B981]">/100</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Core Web Vitals
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    GEO
                  </span>
                  <span className="text-xs font-bold text-[#2563EB]">AI</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Datos semánticos RAG
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha (5 cols): Retrato vertical + 2 badges en glasmorfismo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Contenedor del retrato con aspecto 4/5 y bordes redondeados 3xl */}
            <div className="relative w-full max-w-[340px] lg:max-w-[365px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900">
              
              {/* Imagen fotográfica optimizada */}
              <Image
                src="/hero-developer.jpg"
                alt="Jesús Gajate - Senior Frontend & Technical Consultant"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center filter saturate-[1.03] contrast-[1.02]"
              />

              {/* Degradado sutil para asegurar contraste en bordes */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* INSIGNIA FLOTANTE 1 (Arriba Derecha): '100/100 Speed' con icono verde esmeralda */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-2xl p-3 sm:p-3.5 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#10B981] shadow-inner">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-extrabold text-slate-900 tracking-tight leading-none">
                      100/100
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      SPEED
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-600 mt-1">
                    Google PageSpeed móvil
                  </p>
                </div>
              </motion.div>

              {/* INSIGNIA FLOTANTE 2 (Abajo): 'Disponible · Trato directo' con punto verde pulsante */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-5 left-4 right-4 z-20 bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-2xl p-3.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-slate-900 tracking-tight">
                      Disponible · Trato directo
                    </span>
                    <span className="text-[11px] text-slate-600 font-medium">
                      Sin intermediarios ni agencias lentas
                    </span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
