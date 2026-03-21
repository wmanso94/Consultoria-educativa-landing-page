import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function CTASection() {
    const sectionRef = useScrollReveal();

    return (
        <section id="contacto" className="py-20 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden" ref={sectionRef}>
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/8 rounded-full filter blur-[120px]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl">
                    <h2 className="reveal fade-up text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display leading-tight">
                        El primer paso es una conversación
                    </h2>
                    <p className="reveal fade-up delay-100 text-lg text-slate-300 mt-5 leading-relaxed">
                        Cuéntanos qué necesita tu institución. Sin compromiso, sin formularios largos.
                    </p>
                </div>

                <div className="reveal fade-up delay-200 flex flex-col sm:flex-row gap-3 mt-9">
                    <Link
                        to="/contacto"
                        className="inline-flex justify-center items-center px-7 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 hover:shadow-xl transition-all text-base hover:-translate-y-0.5 active:translate-y-0 group"
                    >
                        Solicitar diagnóstico inicial
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="https://wa.me/529987627240?text=Hola%2C%20me%20gustaría%20agendar%20una%20llamada%20para%20hablar%20sobre%20consultoría%20educativa."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center px-7 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all text-base backdrop-blur-sm group"
                    >
                        <Phone className="mr-2 h-5 w-5 text-accent-400 group-hover:scale-110 transition-transform" />
                        Agendar llamada
                    </a>
                    <a
                        href="https://wa.me/529987627240?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20sus%20servicios%20de%20consultoría%20educativa."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center px-7 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all text-base backdrop-blur-sm group"
                    >
                        <MessageCircle className="mr-2 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                        Escribir por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
