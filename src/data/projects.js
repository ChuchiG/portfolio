import projectLanding from '../assets/project-landing.png';
import zenithAppShot from '../assets/zenith-app-shot.jpg';
import olimpiadasMaristas from '../assets/olimpiadasMaristas.png';

export const projects = [
    {
        id: 1,
        title: "Landing page personalizada",
        description: "Página web personalizada para clientes con accesos directos y buscador integrado.",
        longDescription: "Una solución web moderna y altamente personalizable diseñada para mejorar la productividad del usuario. Esta landing page no solo actúa como un punto de entrada visualmente atractivo, sino que también integra herramientas esenciales como un buscador optimizado y accesos directos configurables. El diseño se centra en la experiencia de usuario, ofreciendo temas oscuros y claros, y una interfaz minimalista que reduce las distracciones.",
        tags: ["React", "Vite", "Tailwind"],
        secondaryTags: ["HTML5", "CSS3", "JavaScript", "Framer Motion"],
        image: projectLanding,
        githubUrl: "https://github.com/ChuchiG/LandingPage.git",
        videoUrl: "https://youtu.be/TJPqZZ03sLM"
    },
    {
        id: 2,
        title: "ZenithStudy",
        description: "App móvil de alto rendimiento que utiliza métodos como la técnica Feynman y el temporizador Yukan.",
        longDescription: "ZenithStudy es una solución integral diseñada para optimizar el rendimiento académico mediante técnicas de estudio avanzadas. Implementa el temporizador de enfoque 'Yukan', la técnica de explicación de 'Feynman' con grabadora integrada y gestión de tarjetas de estudio. Todo está respaldado por una arquitectura robusta con base de datos local (SQLite) para un rendimiento fluido y sin distraiciones.",
        tags: ["React Native", "Expo", "NativeWind"],
        secondaryTags: ["SQLite", "Zustand", "Expo Router", "TypeScript"],
        image: zenithAppShot,
        isMobile: true,
        githubUrl: "https://github.com/ChuchiG/ZenithStudy.git",
        videoUrl: "#"
    },
    {
        id: 3,
        title: "Olimpiadas Maristas 2026",
        description: "Web para las olimpiadas escolares Maristas del 2026, donde está toda la información del evento.",
        longDescription: "Progressive Web App (PWA) desarrollada para ofrecer acceso en tiempo real a horarios, resultados y medalleros de las Olimpiadas Maristas. Nace de la necesidad de mantener informados a participantes y familias de forma rápida y accesible. Durante los 3 días del evento, la plataforma fue un éxito rotundo según los datos de Google Analytics: registró picos de más de 1,500 usuarios activos simultáneos y superó los 5,000 visitantes únicos totales. Su diseño mobile-first y soporte offline garantizaron una experiencia ininterrumpida y fluida durante toda la competición.",
        tags: ["Next.js", "Tailwind CSS", "PWA"],
        secondaryTags: ["React", "TypeScript", "Google Apps Script"],
        image: olimpiadasMaristas,
        githubUrl: "private",
        liveUrl: "https://olimpiadasmaristas.com/"
    }
];
