import React from 'react';
import { AlertTriangle, Users, BarChart3, Settings2 } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const problems = [
    {
        icon: <Settings2 className="h-6 w-6 text-amber-600" />,
        title: "Operación desorganizada",
        description: "Procesos sin documentar, responsables poco claros y decisiones que dependen de la urgencia, no de un plan.",
    },
    {
        icon: <Users className="h-6 w-6 text-amber-600" />,
        title: "Equipos sin acompañamiento",
        description: "Docentes que necesitan herramientas, coordinadores sin estructura y directivos resolviendo todo solos.",
    },
    {
        icon: <BarChart3 className="h-6 w-6 text-amber-600" />,
        title: "Trabajo sin indicadores",
        description: "Se trabaja mucho, pero no hay forma de medir si funciona. Sin datos, no hay mejora — solo repetición.",
    },
    {
        icon: <AlertTriangle className="h-6 w-6 text-amber-600" />,
        title: "Calidad académica estancada",
        description: "Procedimientos mal definidos que terminan afectando lo más importante: lo que pasa en el aula.",
    }
];

export default function ProblemsSection() {
    const sectionRef = useScrollReveal();

    return (
        <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden" ref={sectionRef}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full filter blur-[120px] opacity-60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-2xl mb-12">
                    <span className="reveal fade-up inline-block text-amber-600 font-semibold tracking-wider text-xs uppercase mb-3">¿Te suena familiar?</span>
                    <h2 className="reveal fade-up delay-100 text-3xl md:text-4xl font-bold text-slate-900 font-display leading-tight">
                        Problemas que vemos en la mayoría de instituciones que nos contactan
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {problems.map((item, index) => (
                        <div
                            key={index}
                            className={`reveal fade-up delay-${(index + 1) * 100} bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-500 border border-slate-100 group hover:-translate-y-1`}
                        >
                            <div className="mb-4 p-2.5 bg-amber-50 rounded-xl inline-block group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
