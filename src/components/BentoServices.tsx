"use client";

import { motion } from "framer-motion";
import {
  Zap,
  TrendingUp,
  Bot,
  MapPin,
  Star,
  PhoneCall,
  CheckCircle,
  Code2,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

export default function BentoServices() {
  return (
    <section id="servicios" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-semibold text-blue-800 tracking-wide uppercase font-mono">
              Servicios Especializados para PYMEs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Ingeniería web que convierte visitas en clientes reales
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Eliminamos las plantillas pesadas y las tácticas obsoletas. Construimos la ventaja competitiva técnica que tu negocio necesita para liderar su mercado local.
          </p>
        </div>

        {/* Grid Bento: 2 columnas balanceadas 50-50 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* TARJETA 1 (Blanca, 50%): Creación Web desde Cero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-9 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between overflow-hidden"
          >
            <div className="relative z-10">
              {/* Header de la tarjeta con Badge +185% Presupuestos */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
                  <Code2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Desarrollo Frontend a Medida</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#10B981] text-xs font-bold tracking-tight">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+185% Presupuestos</span>
                </div>
              </div>

              {/* Título de la tarjeta */}
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-3">
                Creación Web desde Cero
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Desarrollo artesanal con Next.js y React 19. Cero constructores lentos de WordPress, cero vulnerabilidades y cero código inflado. Una infraestructura limpia y duradera pensada para convertir cada clic en contacto directo.
              </p>

              {/* Medidor visual de carga 0.4s */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#10B981]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Benchmark de velocidad de carga real (LCP)
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    Móvil 4G
                  </span>
                </div>

                {/* Barra Tu Web (0.4s) */}
                <div className="mb-4">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      Tu nueva web a medida
                    </span>
                    <span className="font-extrabold text-[#10B981] font-mono text-sm">
                      0.4s · Instantáneo
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "12%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-[#10B981] rounded-full"
                    />
                  </div>
                </div>

                {/* Barra Web Típica Plantilla (4.2s) */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="font-medium text-slate-500 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-400" />
                      Media del sector (WordPress / Plantillas genéricas)
                    </span>
                    <span className="font-semibold text-slate-500 font-mono text-sm">
                      4.2s · 68% rebote
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-slate-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Puntos clave / Checklist técnico */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Next.js App Router puro</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>100/100 Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Conversión directa a llamadas</span>
              </div>
            </div>
          </motion.div>

          {/* TARJETA 2 (Oscura #0F172A, 50%): Posicionamiento SEO & GEO */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-[#0F172A] rounded-3xl border border-slate-800 p-8 sm:p-9 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Glow de fondo */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Badge +210% Llamadas */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono font-medium">
                  <Bot className="w-3.5 h-3.5 text-blue-400" />
                  <span>GEO & AI Ready</span>
                </div>

                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[#10B981] text-xs font-bold tracking-tight">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+210% Llamadas</span>
                </div>
              </div>

              {/* Título */}
              <h3 className="text-2xl font-extrabold tracking-tight text-white mb-2">
                Posicionamiento SEO & GEO
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Optimización para motores de IA (ChatGPT, Perplexity, Google AI Overviews) y Google Maps. Tu negocio recomendado en la primera respuesta.
              </p>

              {/* Simulación de respuesta de IA / ChatGPT */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-[9px]">
                    AI
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    ChatGPT / Perplexity Search
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-slate-400 block mb-1">
                    “¿Qué servicio local me recomiendas por calidad técnica y fiabilidad?”
                  </span>
                  “Basándome en 150+ valoraciones y datos verificados, la recomendación principal es <strong className="text-emerald-400 font-semibold underline decoration-emerald-500/50">Tu Negocio</strong>: máxima velocidad de respuesta y trato directo.”
                </p>
              </div>

              {/* Simulación Google Maps Top #1 */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white tracking-tight">
                          Tu PYME en Google Maps
                        </span>
                        <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                          TOP #1
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-amber-400">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="font-bold text-white ml-0.5">5.0</span>
                        <span className="text-slate-400">(98 reseñas)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    Abierto ahora · Recomendado
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <PhoneCall className="w-3 h-3 text-blue-400" />
                    Llamada directa activa
                  </span>
                </div>
              </div>
            </div>

            {/* Footer de Tarjeta Oscura */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px]">JSON-LD @graph Ontológico</span>
              <a
                href="#diagnostico"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Saber más</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
