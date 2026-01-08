import projectLanding from '../assets/project-landing.png';
import zenithAppShot from '../assets/zenith-app-shot.jpg';

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
        videoUrl: "#" // Placeholder
    },
    {
        id: 3,
        title: "App para jugar a impostor",
        description: "Aplicación para jugar en equipo al juego de impostor viral de tiktok.",
        longDescription: "Una divertida herramienta digital para facilitar partidas del popular juego de deducción social. Gestiona roles, temporizadores y tareas de manera automática, permitiendo a los jugadores centrarse en la interacción y el debate.",
        tags: ["React", "DnD", "Node.js"],
        secondaryTags: ["Socket.io", "Express"],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        githubUrl: "#",
        videoUrl: "#"
    }
];
