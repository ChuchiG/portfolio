import { Database, Layout, Wrench } from 'lucide-react';

export const categories = [
    {
        title: "Backend",
        icon: Database,
        skills: [
            { name: "Java", level: 4 },
            { name: "C#", level: 4 },
            { name: "SQL", level: 4 },
            { name: "SQLite", level: 3 },
            { name: "API REST", level: 5 }
        ]
    },
    {
        title: "Frontend",
        icon: Layout,
        skills: [
            { name: "HTML5", level: 5 },
            { name: "CSS3", level: 5 },
            { name: "JavaScript", level: 4 },
            { name: "React", level: 5 },
            { name: "React Native", level: 3 },
            { name: "NativeWind", level: 3 },
            { name: "Zustand", level: 3 },
            { name: "TypeScript", level: 3 }
        ]
    },
    {
        title: "Herramientas y Otros",
        icon: Wrench,
        skills: [
            { name: "Jira", level: 4 },
            { name: "GitHub", level: 4 },
            { name: "JSON", level: 5 },
            { name: "XML", level: 4 },
            { name: "Vercel", level: 4 },
            { name: "Excel", level: 3 },
            { name: "Expo", level: 4 }
        ]
    }
];
