import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo, socialLinks } from '../data/social';

const Home = () => {
    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center bg-gradient-to-br from-white to-blue-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">{personalInfo.role}</h2>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                                Creando experiencias <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">digitales únicas</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-lg">
                                {personalInfo.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                                    Ver Proyectos <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link to="/contact" className="px-8 py-3 bg-white text-gray-700 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all">
                                    Contactar
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center gap-6 text-gray-500">
                                {socialLinks.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <a 
                                            key={link.id} 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            aria-label={link.name}
                                            className="hover:text-blue-600 transition-colors"
                                        >
                                            <Icon className="w-6 h-6" />
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative hidden md:block"
                        >
                            {/* Abstract decorative shapes */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                            <div className="absolute top-0 right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                            <div className="relative z-10 bg-white/30 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-2xl">
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-200 rounded w-3/4 shine-effect"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2 shine-effect"></div>
                                    <div className="h-32 bg-blue-100 rounded-lg shine-effect"></div>
                                    <div className="flex gap-4">
                                        <div className="h-10 bg-blue-600 rounded w-1/3 shine-effect"></div>
                                        <div className="h-10 bg-gray-200 rounded w-1/3 shine-effect"></div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                                    <p className="font-bold text-gray-900">{personalInfo.experience}</p>
                                    <p className="text-sm text-gray-500">De experiencia</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Preview Section could go here */}
        </div>
    );
};

export default Home;
