import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Award, GraduationCap, Users } from 'lucide-react';

const badges = [
    { icon: <Award className="h-4 w-4" />, label: '+40 años de trayectoria' },
    { icon: <GraduationCap className="h-4 w-4" />, label: 'Liderazgo y supervisión educativa' },
    { icon: <Users className="h-4 w-4" />, label: 'Formación docente y directiva' },
];

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden min-h-[92vh] flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent-500/10 rounded-full filter blur-[120px]"></div>
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-500/8 rounded-full filter blur-[100px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800/50 rounded-full filter blur-[80px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 md:py-32">
                <div className="max-w-3xl">

                    {/* Title */}
                    <h1 className={`text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.12] font-display transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        Consultoría educativa para fortalecer la{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">calidad académica</span>{' '}
                        y la gestión institucional
                    </h1>

                    {/* Subtitle */}
                    <p className={`text-lg md:text-xl text-slate-300/90 max-w-2xl leading-relaxed mt-8 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        Ayudamos a colegios e instituciones educativas a optimizar sus procesos académicos, capacitar a sus equipos docentes y directivos, y mejorar su organización para lograr resultados sostenibles.
                    </p>

                    {/* CTAs */}
                    <div className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        <Link
                            to="/contacto"
                            className="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 hover:shadow-xl transition-all text-lg group hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Solicitar diagnóstico inicial
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="https://wa.me/529987627240?text=Hola%2C%20me%20gustaría%20agendar%20una%20llamada%20para%20hablar%20sobre%20consultoría%20educativa."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all text-lg backdrop-blur-sm group"
                        >
                            <Phone className="mr-2 h-5 w-5 text-accent-400 group-hover:scale-110 transition-transform" />
                            Agendar una llamada
                        </a>
                    </div>

                    {/* Support text */}
                    <p className={`text-sm text-slate-400 mt-8 max-w-xl leading-relaxed transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        Más de 40 años de experiencia en liderazgo educativo, supervisión académica, formación docente y mejora continua.
                    </p>

                    {/* Badges */}
                    <div className={`flex flex-wrap gap-3 mt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        {badges.map((badge, i) => (
                            <div
                                key={i}
                                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm"
                            >
                                <span className="text-accent-400">{badge.icon}</span>
                                <span className="text-white/80 text-sm font-medium">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
