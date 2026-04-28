import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Play, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import LinkButton from '../components/LinkButton';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Proyecto no encontrado</h2>
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Volver a Proyectos
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Row */}
                <div className="relative flex items-center justify-center mb-8">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => navigate('/projects')}
                        className="absolute left-0 flex items-center text-gray-600 hover:text-blue-600 transition group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Volver a Proyectos
                    </motion.button>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
                    >
                        {project.title}
                    </motion.h1>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-[400px] relative overflow-hidden bg-gray-900"
                    >
                        {project.isMobile ? (
                            <>
                                <div
                                    className="absolute inset-0 bg-cover bg-center blur-xl opacity-40 scale-110"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative w-full h-full object-contain object-center z-10"
                                />
                            </>
                        ) : (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-center"
                            />
                        )}
                    </motion.div>

                    <div className="p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre el Proyecto</h2>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        {project.longDescription}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tecnologías</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Principales</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        {project.secondaryTags && (
                                            <div>
                                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Otras herramientas</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.secondaryTags.map(tag => (
                                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sidebar / Actions */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-6"
                            >
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Enlaces</h3>
                                    <div className="space-y-4">
                                        <LinkButton 
                                            href={project.githubUrl}
                                            disabled={!project.githubUrl || project.githubUrl === "private"}
                                            icon={Github}
                                            text={(!project.githubUrl || project.githubUrl === "private") ? "Repositorio Privado" : "Ver Código en GitHub"}
                                            variant="primary"
                                        />
                                        
                                        {project.liveUrl && (
                                            <LinkButton 
                                                href={project.liveUrl}
                                                icon={ExternalLink}
                                                text="Visitar Sitio Web"
                                                variant="blue"
                                            />
                                        )}
                                        
                                        {project.videoUrl && project.videoUrl !== "#" && (
                                            <LinkButton 
                                                href={project.videoUrl}
                                                icon={Play}
                                                text="Ver Demo en Video"
                                                variant="red"
                                            />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
