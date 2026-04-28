import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
            <div className="relative h-48 overflow-hidden bg-gray-100">
                {project.isMobile ? (
                    <>
                        <div
                            className="absolute inset-0 bg-cover bg-center blur-md opacity-50 scale-110"
                            style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="relative w-full h-full object-contain z-10 transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </>
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <Link
                        to={`/project/${project.id}`}
                        className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all"
                    >
                        Ver Detalles
                    </Link>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
