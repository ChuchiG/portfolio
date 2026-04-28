import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Mis Proyectos</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Una selección de mis trabajos más recientes. Cada proyecto representa un desafío único y una solución innovadora.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
