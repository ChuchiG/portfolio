"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Loader2,
  Zap,
  Globe,
  Mail,
  AlertCircle,
} from "lucide-react";
import { submitDiagnosticRequest } from "@/app/actions/contact";

export default function DiagnosticCTA() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web a Medida",
  ]);
  const [contactValue, setContactValue] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [fieldErrors, setFieldErrors] = useState<{
    services?: string;
    contact?: string;
    websiteUrl?: string;
  }>({});
  const [generalError, setGeneralError] = useState<string>("");

  const serviceOptions = [
    { id: "Web a Medida", label: "Web a Medida", desc: "Next.js ultrarrápida (0.4s)" },
    { id: "SEO Local / IA", label: "SEO Local / IA", desc: "Perplexity & Google Maps Top 1" },
    { id: "Consultoría Técnica", label: "Consultoría Técnica", desc: "Auditoría Core Web Vitals" },
  ];

  const toggleService = (id: string) => {
    setFieldErrors((prev) => ({ ...prev, services: undefined }));
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setGeneralError("");

    if (!contactValue.trim()) {
      setFieldErrors({ contact: "Por favor, introduce tu email o teléfono de contacto." });
      return;
    }

    setStatus("loading");

    try {
      const response = await submitDiagnosticRequest({
        services: selectedServices,
        contact: contactValue,
        websiteUrl: websiteUrl || undefined,
      });

      if (response.success) {
        setStatus("success");
      } else {
        setStatus("idle");
        if (response.errors) {
          setFieldErrors(response.errors);
        }
        if (response.message) {
          setGeneralError(response.message);
        }
      }
    } catch {
      setStatus("idle");
      setGeneralError("Ocurrió un error inesperado al procesar la solicitud. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <section id="diagnostico" className="pt-10 pb-[25px] md:pt-14 md:pb-[57px] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 mb-4 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
            <span className="text-xs font-semibold text-emerald-800 tracking-wide uppercase font-mono">
              Consola de Diagnóstico & Propuesta
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Descubre el potencial de tu negocio en 24 horas
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Sin rodeos comerciales ni comerciales intermedios. Analizamos tu velocidad, tu presencia en motores de IA y te entregamos un plan de acción a medida.
          </p>
        </div>

        {/* Tarjeta de Cristal con Glasmorfismo Táctil Estricto */}
        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-10 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#10B981] mb-5 shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-2">
                  ¡Diagnóstico solicitado correctamente!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
                  Hemos registrado tus servicios seleccionados (<strong>{selectedServices.join(", ")}</strong>). Revisaremos tus datos y te contactaremos en menos de 24 horas laborables con un informe técnico preliminary sin compromiso.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setContactValue("");
                    setWebsiteUrl("");
                    setSelectedServices(["Web a Medida"]);
                  }}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Configurar otra consulta
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                {generalError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{generalError}</span>
                  </div>
                )}

                {/* Paso 1: Píldoras interactivas */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                      1. Selecciona lo que tu PYME necesita optimizar:
                    </label>
                    {fieldErrors.services && (
                      <span className="text-xs font-semibold text-red-600">
                        {fieldErrors.services}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {serviceOptions.map((opt) => {
                      const isActive = selectedServices.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => toggleService(opt.id)}
                          className={`p-4 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer ${
                            isActive
                              ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-blue-500/30"
                              : "bg-white/90 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-extrabold tracking-tight">
                              {opt.label}
                            </span>
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center ${
                                isActive ? "bg-[#10B981] text-white" : "border border-slate-300"
                              }`}
                            >
                              {isActive && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                          <span
                            className={`text-xs ${
                              isActive ? "text-slate-300" : "text-slate-500"
                            }`}
                          >
                            {opt.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Paso 2: Datos de Contacto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700 mb-2"
                    >
                      2. Tu Email o Teléfono / WhatsApp:
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="contact"
                        type="text"
                        required
                        value={contactValue}
                        onChange={(e) => {
                          setContactValue(e.target.value);
                          if (fieldErrors.contact) {
                            setFieldErrors((prev) => ({ ...prev, contact: undefined }));
                          }
                        }}
                        placeholder="ejemplo@tunegocio.es o 600 000 000"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-slate-900 text-sm font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all shadow-sm ${
                          fieldErrors.contact ? "border-red-400 ring-1 ring-red-400" : "border-slate-200"
                        }`}
                      />
                    </div>
                    {fieldErrors.contact && (
                      <p className="text-[11px] font-semibold text-red-600 mt-1.5">
                        {fieldErrors.contact}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700 mb-2"
                    >
                      3. Web actual de tu negocio (opcional):
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Globe className="w-4 h-4" />
                      </div>
                      <input
                        id="website"
                        type="text"
                        value={websiteUrl}
                        onChange={(e) => {
                          setWebsiteUrl(e.target.value);
                          if (fieldErrors.websiteUrl) {
                            setFieldErrors((prev) => ({ ...prev, websiteUrl: undefined }));
                          }
                        }}
                        placeholder="www.tunegocio.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-slate-900 text-sm font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all shadow-sm ${
                          fieldErrors.websiteUrl ? "border-red-400 ring-1 ring-red-400" : "border-slate-200"
                        }`}
                      />
                    </div>
                    {fieldErrors.websiteUrl && (
                      <p className="text-[11px] font-semibold text-red-600 mt-1.5">
                        {fieldErrors.websiteUrl}
                      </p>
                    )}
                  </div>
                </div>

                {/* Paso 3: Botón de Envío Azul Real (#2563EB) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 px-6 rounded-full bg-[#2563EB] hover:bg-blue-700 active:scale-[0.99] text-white font-extrabold text-base tracking-tight shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Auditando arquitectura previa...</span>
                      </>
                    ) : (
                      <>
                        <span>Solicitar Diagnóstico Técnico Gratuito</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                {/* Micro-Social Proof y Garantías */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                    Respuesta garantizada en &lt; 24h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    Trato directo con el Ingeniero
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#2563EB]" />
                    Sin permanencia ni costes ocultos
                  </span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

        </div>

        {/* Footer simple integrado */}
        <div className="text-center mt-12 text-xs text-slate-500 font-medium">
          <p>© 2026 Jesús Gajate Luna · Senior Frontend & UX Engineer · Next.js & GEO Architecture</p>
        </div>

      </div>
    </section>
  );
}
