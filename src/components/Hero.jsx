import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';

function StatCounter({ end, suffix = '', label }) {
    const { count, ref } = useCountUp(end, 2200);
    return (
        <div ref={ref} className="text-center sm:text-left">
            <p className="text-3xl md:text-4xl font-bold text-white font-display">
                {count}{suffix}
            </p>
            <p className="text-slate-400 text-sm mt-1">{label}</p>
        </div>
    );
}

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger hero animation on mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
                {/* Gradient orbs */}
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent-500/10 rounded-full filter blur-[120px]"></div>
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-500/8 rounded-full filter blur-[100px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800/50 rounded-full filter blur-[80px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className={`inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-1.5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <CheckCircle size={16} className="text-accent-400" />
                            <span className="text-accent-300 text-sm font-medium tracking-wide">Especialista en Andragogía Industrial</span>
                        </div>

                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] font-display transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            Transforme su{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">Conocimiento Técnico</span>{' '}
                            en Resultados Operativos
                        </h1>

                        <p className={`text-lg md:text-xl text-slate-300/90 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            Formación de Instructores Internos con la autoridad de 40 años de respaldo pedagógico y maestría en educación.
                        </p>

                        <div className={`flex flex-col sm:flex-row gap-4 pt-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            <a
                                href="#contacto"
                                className="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 hover:shadow-xl transition-all text-lg group hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Agende Diagnóstico (15 min)
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#trayectoria"
                                className="inline-flex justify-center items-center px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all text-lg backdrop-blur-sm"
                            >
                                Ver Trayectoria
                            </a>
                        </div>

                        <div className={`pt-8 border-t border-white/10 flex items-center gap-8 sm:gap-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            <StatCounter end={40} suffix="+" label="Años de Experiencia" />
                            <div className="text-center sm:text-left">
                                <p className="text-3xl md:text-4xl font-bold text-white font-display">DC-3</p>
                                <p className="text-slate-400 text-sm mt-1">Registro STPS</p>
                            </div>
                            <StatCounter end={100} suffix="%" label="Deducible" />
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="relative">
                            {/* Main card */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10 bg-slate-800">
                                <div className="aspect-[4/5] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent z-10"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                        alt="Consultoría Profesional en Educación Industrial"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Bottom info overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-400/30 flex items-center justify-center">
                                                <CheckCircle className="w-5 h-5 text-accent-400" />
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold text-sm">Agente Capacitador Externo</p>
                                                <p className="text-slate-400 text-xs">Registrado ante la STPS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-8 -right-8 w-full h-full border border-accent-500/20 rounded-2xl"></div>
                            <div className="absolute -z-20 top-16 -right-16 w-full h-full border border-accent-500/10 rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
