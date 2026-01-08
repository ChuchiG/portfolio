import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Wrench, Code } from 'lucide-react';

const TechnologiesPage = () => {
    const categories = [
        {
            title: "Backend",
            icon: Database,
            skills: [
                { name: "Java", level: 4 },
                { name: "C#", level: 3 },
                { name: "Kotlin", level: 2 },
                { name: "Python", level: 2 },
                { name: "SQL", level: 3 },
                { name: "SQLite", level: 3 },
                { name: "API REST", level: 4 }
            ]
        },
        {
            title: "Frontend",
            icon: Layout,
            skills: [
                { name: "HTML5", level: 5 },
                { name: "CSS3", level: 5 },
                { name: "JavaScript", level: 4 },
                { name: "Vue", level: 3 },
                { name: "React", level: 3 },
                { name: "React Native", level: 4 },
                { name: "NativeWind", level: 4 },
                { name: "Zustand", level: 4 },
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
                { name: "Excel", level: 3 },
                { name: "Expo", level: 4 }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    // Componente para renderizar las barras de nivel
    const SkillBars = ({ level }) => {
        // Determinamos el color: Azul si es 5, Verde si es menor a 5
        const activeColor = level === 5 ? 'bg-blue-600' : 'bg-green-500';

        return (
            <div className="flex space-x-[3px] ml-auto">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className={`h-6 w-2 transform -skew-x-12 transition-colors duration-300 ${index < level ? activeColor : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-8">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Tecnologías
                    </motion.h1>
                    <motion.p
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Mi stack tecnológico y herramientas de desarrollo
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const sortedSkills = [...category.skills].sort((a, b) => b.level - a.level);

                        return (
                            <motion.div
                                key={category.title}
                                variants={itemVariants}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div className="p-5">
                                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-xl mb-4 mx-auto text-blue-600">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{category.title}</h3>
                                    <ul className="space-y-2">
                                        {sortedSkills.map((skill) => (
                                            <li key={skill.name} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded-lg bg-gray-100">
                                                <div className="flex items-center mb-1 sm:mb-0">
                                                    <Code className="w-4 h-4 mr-2 text-gray-400" />
                                                    <span className="font-medium text-gray-700 text-sm">{skill.name}</span>
                                                </div>
                                                <SkillBars level={skill.level} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TechnologiesPage;
