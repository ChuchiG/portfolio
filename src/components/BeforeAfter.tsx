"use client";

import { useState } from "react";
import {
  SlidersHorizontal,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Gauge,
  TrendingDown,
  TrendingUp,
  Search,
} from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="comparativa" className="py-20 md:py-28 relative bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4 shadow-sm">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase font-mono">
              Comparativa Técnica en Tiempo Real
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            El coste invisible de una web obsoleta
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Arrastra el deslizador para comparar el impacto real entre una plantilla genérica sobrecargada y un sistema de alta ingeniería construido para vender.
          </p>
        </div>

        {/* Contenedor del Slider Interactivo */}
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white">
          
          {/* Capa Base: LADO DERECHO -> "Sistema Optimizado" (Luminoso, Moderno, Verde Esmeralda) */}
          <div className="w-full p-6 sm:p-10 bg-white min-h-[440px] flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="text-lg font-extrabold text-slate-900 tracking-tight">
                  Sistema Optimizado (Next.js)
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                  Recomendado
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#10B981] font-bold text-xs font-mono">
                <Zap className="w-3.5 h-3.5" />
                <span>Carga: 0.4s LCP</span>
              </div>
            </div>

            {/* Métricas del Sistema Optimizado */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-800 mb-1">
                  <span>Velocidad Google</span>
                  <Gauge className="w-4 h-4 text-[#10B981]" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  100<span className="text-sm font-semibold text-[#10B981]">/100</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Carga imperceptible para el usuario
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-800 mb-1">
                  <span>Motores de IA</span>
                  <Search className="w-4 h-4 text-[#10B981]" />
                </div>
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  GEO Listo
                </div>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Indexación semántica por ChatGPT
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-800 mb-1">
                  <span>Conversión</span>
                  <TrendingUp className="w-4 h-4 text-[#10B981]" />
                </div>
                <div className="text-3xl font-extrabold text-[#10B981] tracking-tight">
                  +185%
                </div>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Retención máxima en móvil
                </p>
              </div>
            </div>

            {/* Footer de beneficios */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-100">
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Código limpio sin plugins
              </span>
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Seguridad de nivel bancario
              </span>
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Dominio de búsquedas locales
              </span>
            </div>
          </div>

          {/* Capa Superpuesta: LADO IZQUIERDO -> "Web Lenta (Plantilla)" (Tonos grises apagados, desaturados) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden bg-slate-200/95 border-r border-slate-300"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="w-[896px] p-6 sm:p-10 filter grayscale contrast-75 bg-slate-200/90 min-h-[440px] flex flex-col justify-between select-none">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-slate-500" />
                  <span className="text-lg font-extrabold text-slate-700 tracking-tight line-through">
                    Web Lenta (Plantilla WordPress)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-300 text-slate-700 text-xs font-bold">
                    Obsoleto
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-300 text-slate-700 font-bold text-xs font-mono">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Carga: 4.8s (Lenta)</span>
                </div>
              </div>

              {/* Métricas de la Web Lenta */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-slate-300/60 border border-slate-300">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Velocidad Google</span>
                    <Gauge className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-700 tracking-tight">
                    38<span className="text-sm font-semibold text-slate-500">/100</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    Penalizada en Core Web Vitals
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-300/60 border border-slate-300">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Motores de IA</span>
                    <Search className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="text-2xl font-extrabold text-slate-700 tracking-tight">
                    Invisible
                  </div>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    Sin datos estructurados JSON-LD
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-300/60 border border-slate-300">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Rebote de visitas</span>
                    <TrendingDown className="w-4 h-4 text-slate-600" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-700 tracking-tight">
                    74%
                  </div>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    Clientes que huyen antes de cargar
                  </p>
                </div>
              </div>

              {/* Footer de problemas */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-4 border-t border-slate-300">
                <span className="flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-slate-600" /> 38 plugins instalados y lentos
                </span>
                <span className="flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-slate-600" /> Caídas frecuentes y agujeros
                </span>
                <span className="flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-slate-600" /> Cero llamadas de clientes nuevos
                </span>
              </div>
            </div>
          </div>

          {/* Línea divisoria y tirador del slider */}
          <div
            className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center -translate-x-1/2"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-1 h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.3)] relative">
              {/* Botón táctil central */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-white shadow-xl flex items-center justify-center text-white cursor-ew-resize">
                <SlidersHorizontal className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Input Range Superpuesto Invisible para soporte táctil y de ratón nativo */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Arrastrar para comparar web lenta con sistema optimizado"
          />
        </div>

        {/* Indicador de ayuda */}
        <p className="text-center text-xs font-medium text-slate-500 mt-4 flex items-center justify-center gap-1.5">
          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
          <span>Arrastra el divisor central para comparar ambas versiones</span>
        </p>

      </div>
    </section>
  );
}
