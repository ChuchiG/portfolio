export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "pyme-vs-wordpress",
    question: "¿Por qué una web en Next.js a medida es más rentable para mi PYME que una plantilla en WordPress?",
    answer: "Las plantillas en WordPress acumulan plugins pesados, vulnerabilidades constantes y tiempos de carga superiores a 3 segundos, provocando que más del 70% de las visitas móviles abandonen la página sin contactar. Una arquitectura a medida en Next.js elimina código superfluo, entrega un LCP inferior a 0.4s y maximiza la conversión de presupuestos sin cuotas de licencias caídas ni mantenimiento forzoso.",
    highlight: "LCP < 0.4s y 0 plugins lentos",
  },
  {
    id: "que-es-geo-ia",
    question: "¿Qué es el posicionamiento GEO y cómo consigue que ChatGPT y Perplexity recomienden mi negocio?",
    answer: "Generative Engine Optimization (GEO) es la evolución del SEO clásico para motores de búsqueda generativa (Google AI Overviews, Perplexity y ChatGPT Search). Modelamos la ontología de tu web mediante grafos JSON-LD @graph y datos fácticos verificables para que, cuando un usuario pregunte a un asistente de IA por servicios en tu zona geográfica, el modelo cite tu empresa como la opción recomendada #1.",
    highlight: "Citación prioritaria en motores de IA",
  },
  {
    id: "plazos-y-garantia-velocidad",
    question: "¿Cuánto tiempo requiere el desarrollo y qué garantía de velocidad real (LCP < 0.4s) ofrecéis?",
    answer: "Un proyecto web completo para PYME se entrega habitualmente entre 2 y 4 semanas con comunicación directa de ingeniería. La velocidad de 0.4s se garantiza mediante prerrenderizado estático (SSG), compresión moderna de activos, optimización de fuentes sin recálculos de layout (CLS 0.0) y exclusión de scripts bloqueantes en el navegador del cliente.",
    highlight: "Entrega en 2-4 semanas con 100/100 Core Web Vitals",
  },
  {
    id: "mantenimiento-y-propiedad",
    question: "¿Tendré que pagar cuotas obligatorias de mantenimiento o depender de agencias para siempre?",
    answer: "No. El código fuente y el proyecto son 100% de tu propiedad. Al desplegarse sobre infraestructuras cloud modernas de borde como Vercel o servidores estáticos, el coste de infraestructura suele ser gratuito o inferior a 15 €/mes, sin necesidad de pagar renovaciones obligatorias de plugins ni soporte mensual forzoso.",
    highlight: "Propiedad 100% tuya y sin costes ocultos",
  },
  {
    id: "seo-local-google-maps",
    question: "¿Cómo se conecta el SEO Local con Google Maps y la generación de llamadas directas?",
    answer: "Sincronizamos la arquitectura semántica local de tu web (Nombre, Dirección y Teléfono exactos) con tu perfil de Google Business Profile y marcado Schema LocalBusiness. Esto catapulta tu negocio al Top #1 de Google Maps (Local Pack) facilitando que los clientes te llamen en 1 clic desde el móvil.",
    highlight: "Top #1 en Google Maps y llamadas en 1 clic",
  },
];
