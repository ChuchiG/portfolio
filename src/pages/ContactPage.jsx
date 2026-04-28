import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('loading');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hablemos</h1>
                            <p className="text-lg text-gray-600">
                                ¿Tienes una idea en mente? Estoy disponible para nuevos proyectos y colaboraciones.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-600">chuchigajate@hotmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Ubicación</h3>
                                    <p className="text-gray-600">Salamanca, España</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                                    <p className="text-gray-600">+34 691 058 309</p>
                                </div>
                            </div>

                            {/* Download CV */}
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Currículum Vitae</h3>
                                <p className="text-gray-600 mb-6">
                                    Descarga mi currículum para conocer en detalle mi formación y experiencia profesional.
                                </p>
                                <a
                                    href="/documents/cvJesusGajate.pdf"
                                    download="cv_JesusGajate.pdf"
                                    className="inline-flex items-center pl-5 pr-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition shadow-md group"
                                >
                                    <Download className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                                    Descargar CV
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                                    <input type="text" name="user_name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tu nombre" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" name="user_email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="tucorreo@ejemplo.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                                <input type="text" name="subject" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Desarrollo Web..." />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea name="message" rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Cuéntame sobre tu proyecto..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-full font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed' :
                                    status === 'success' ? 'bg-green-600 hover:bg-green-700' :
                                        status === 'error' ? 'bg-red-600 hover:bg-red-700' :
                                            'bg-blue-600 hover:bg-blue-700'
                                    } text-white`}
                            >
                                {status === 'loading' ? (
                                    <>Enviando... <Loader2 className="w-4 h-4 animate-spin" /></>
                                ) : status === 'success' ? (
                                    <>¡Mensaje Enviado!</>
                                ) : status === 'error' ? (
                                    <>Error al enviar</>
                                ) : (
                                    <>Enviar Mensaje <Send className="w-4 h-4" /></>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
