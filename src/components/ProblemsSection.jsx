import React from 'react';
import { AlertTriangle, Users, BookX, ClipboardList } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const problems = [
    {
        icon: <Users className="h-7 w-7 text-red-500" />,
        title: "Rotación de Personal",
        description: "Los empleados se van porque no reciben un onboarding efectivo ni desarrollo real, aumentando costos operativos.",
        stat: "↑ 35%",
        statLabel: "costo por vacante"
    },
    {
        icon: <BookX className="h-7 w-7 text-red-500" />,
        title: "Capacitaciones 'De Papel'",
        description: "Cursos que cumplen el requisito administrativo, pero no cambian el comportamiento ni la seguridad en planta.",
        stat: "0%",
        statLabel: "impacto real"
    },
    {
        icon: <AlertTriangle className="h-7 w-7 text-red-500" />,
        title: "Instructores Improvisados",
        description: "Expertos técnicos que saben mucho, pero no saben transmitirlo, generando confusión, errores y retrabajos.",
        stat: "3x",
        statLabel: "más errores"
    },
    {
        icon: <ClipboardList className="h-7 w-7 text-red-500" />,
        title: "Cumplimiento Normativo",
        description: "Estrés constante por faltantes en constancias DC-3 ante auditorías de la STPS y riesgo de multas.",
        stat: "$500K+",
        statLabel: "multas posibles"
    }
];

export default function ProblemsSection() {
    const sectionRef = useScrollReveal();

    return (
        <section id="soluciones" className="py-24 bg-slate-50 relative overflow-hidden" ref={sectionRef}>
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full filter blur-[120px] opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="reveal fade-up inline-block text-red-500 font-semibold tracking-wider text-sm uppercase mb-3">El Problema</span>
                    <h2 className="reveal fade-up delay-100 text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
                        ¿Su Plan de Capacitación Realmente Impacta en la Productividad?
                    </h2>
                    <p className="reveal fade-up delay-200 text-lg text-slate-600 leading-relaxed">
                        Muchos gerentes de RH enfrentan estos dolores ocultos que frenan el crecimiento de la planta.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((item, index) => (
                        <div
                            key={index}
                            className={`reveal fade-up delay-${(index + 1) * 100} bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500 border border-slate-100 group hover:-translate-y-1`}
                        >
                            <div className="mb-5 p-3 bg-red-50 rounded-xl inline-block group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm mb-4">
                                {item.description}
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <span className="text-red-500 font-bold text-lg">{item.stat}</span>
                                <span className="text-slate-400 text-xs ml-2">{item.statLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
