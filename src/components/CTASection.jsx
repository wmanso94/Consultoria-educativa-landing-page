import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function CTASection() {
    const sectionRef = useScrollReveal();

    return (
        <section id="contacto" className="py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden" ref={sectionRef}>
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/8 rounded-full filter blur-[120px]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="reveal fade-up text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
                    Deje la Estrategia Educativa en Manos de un{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">Directivo con 40+ Años</span>
                </h2>
                <p className="reveal fade-up delay-100 text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Maestría en Ciencias de la Educación, jurado en congresos internacionales y experiencia dirigiendo instituciones. Resultados medibles desde la primera sesión.
                </p>

                <div className="reveal fade-up delay-200 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/contacto"
                        className="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 hover:shadow-xl transition-all text-lg hover:-translate-y-0.5 active:translate-y-0 group"
                    >
                        Solicitar Diagnóstico (15 min)
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="https://wa.me/529987627240?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20sus%20servicios%20de%20consultoría%20educativa."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all text-lg backdrop-blur-sm group"
                    >
                        <MessageCircle className="mr-2 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                        Contactar por WhatsApp
                    </a>
                </div>

                <p className="reveal fade-in delay-400 mt-10 text-sm text-slate-400">
                    ⏰ <span className="text-accent-400 font-medium">Disponibilidad limitada</span> para nuevos proyectos este trimestre.
                </p>
            </div>
        </section>
    );
}
