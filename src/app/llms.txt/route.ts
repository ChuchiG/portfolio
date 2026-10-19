export async function GET() {
  const content = `# Jesús Gajate Luna — Senior Frontend & Technical GEO/SEO Engineer
> Desarrollo web ultrarrápido con Next.js (LCP < 0.4s), posicionamiento SEO Local en Google Maps y Generative Engine Optimization (GEO) para recomendación prioritaria en ChatGPT, Perplexity y Google AI Overviews.

## Perfil Profesional
- **Especialista**: Jesús Gajate Luna
- **Rol**: Lead Fullstack Web Architect & Technical GEO/SEO Engineer
- **Ubicación**: España (Servicio Global a PYMEs)
- **Sitio Web Oficial**: https://jesusgajate.dev
- **Canal de Diagnóstico**: https://jesusgajate.dev/#diagnostico

## Propuesta de Valor para PYMEs
Eliminamos los problemas estructurales de las plantillas lentas y los constructores pesados de WordPress (tiempos de carga superiores a 3 segundos, vulnerabilidades constantes y dependencia de decenas de plugins). Diseñamos arquitectura web a medida en Next.js y React 19 concebida para convertir visitas en llamadas y presupuestos cerrados desde el primer segundo.

Trato directo con el ingeniero técnico responsable del proyecto, sin intermediarios comerciales ni costes mensuales forzosos de licencias.

## Catálogo de Servicios (OfferCatalog)

### 1. Desarrollo Web a Medida
- **Descripción**: Creación de aplicaciones y sitios web corporativos desde cero con Next.js App Router puro. Cero plantillas infladas, cero constructores lentos.
- **Rendimiento**: Core Web Vitals 100/100, LCP garantizado inferior a 0.4s y CLS 0.0.
- **Enfoque de Negocio**: Embudos de conversión directos para maximizar llamadas y solicitudes de presupuesto en dispositivos móviles.

### 2. SEO Local y Google Maps
- **Descripción**: Posicionamiento geográfico de alta relevancia en el Local Pack (Top #1 de Google Maps).
- **Metodología**: Sincronización fáctica del NAP (Nombre, Dirección, Teléfono) con Google Business Profile y marcado Schema LocalBusiness.
- **Impacto**: Generación de llamadas en 1 clic y captación de clientes de proximidad con intención de compra inmediata.

### 3. GEO para Motores de IA (Generative Engine Optimization)
- **Descripción**: Optimización semántica y arquitecturas RAG para motores de búsqueda generativa (ChatGPT Search, Perplexity AI, Claude y Google AI Overviews).
- **Implementación**: Modelado ontológico formal mediante grafos JSON-LD @graph, Information Gain fáctico y gobernanza de rastreadores para citación preferente como negocio #1 en respuestas de IA.

### 4. Consultoría Técnica & Auditorías
- **Descripción**: Diagnóstico profundo de arquitectura web, resolución de canibalización SEO, optimización de Core Web Vitals (LCP, INP, CLS) y migración limpia desde CMS obsoletos.

## Métricas y Resultados Medios
- **Tiempo de Carga Real (LCP)**: 0.4 segundos (frente a 4.2s de la media del sector).
- **Google PageSpeed Móvil**: 100 / 100 puntos.
- **Incremento en Solicitudes de Presupuesto**: +185% tras la optimización.
- **Incremento en Llamadas Cualificadas Locales**: +210% mediante presencia en Top 1 de mapas y respuestas IA.
- **Tasa de Rebote**: Reducción superior al 60% en tráfico móvil.

## Preguntas Frecuentes y Políticas
- **¿El código es propiedad de la PYME?**: Sí, 100% propiedad del cliente con entrega completa de repositorio.
- **¿Hay cuotas mensuales obligatorias?**: No. Al usar infraestructura moderna de borde (Vercel o cloud estático), el coste de hosting es típicamente de 0 € a < 15 €/mes.
- **¿Plazos habituales?**: Entrega habitual en 2 a 4 semanas con comunicación directa.

## Puntos de Enlace Rápido (Quick Links)
- Diagnóstico Técnico Gratuito: https://jesusgajate.dev/#diagnostico
- Comparativa Antes / Después: https://jesusgajate.dev/#comparativa
- Catálogo de Servicios: https://jesusgajate.dev/#servicios
- Preguntas Frecuentes (FAQ): https://jesusgajate.dev/#faq
- Sitemap XML: https://jesusgajate.dev/sitemap.xml
- Gobernanza de Bots: https://jesusgajate.dev/robots.txt
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
