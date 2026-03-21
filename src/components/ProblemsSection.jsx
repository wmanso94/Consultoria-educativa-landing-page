import React from 'react';
import { AlertTriangle, Users, BarChart3, Settings2 } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const problems = [
    {
        icon: <Settings2 className="h-7 w-7 text-amber-600" />,
        title: "Desorganización académica y operativa",
        description: "Procesos poco claros, falta de seguimiento y una operación que depende demasiado de improvisación.",
    },
    {
        icon: <Users className="h-7 w-7 text-amber-600" />,
        title: "Necesidad de fortalecer al equipo docente y directivo",
        description: "Capacitación insuficiente, liderazgo desigual y falta de acompañamiento efectivo.",
    },
    {
        icon: <BarChart3 className="h-7 w-7 text-amber-600" />,
        title: "Falta de evaluación y mejora continua",
        description: "Instituciones que trabajan mucho, pero sin indicadores claros ni mecanismos sólidos de seguimiento.",
    },
    {
        icon: <AlertTriangle className="h-7 w-7 text-amber-600" />,
        title: "Procesos que frenan la calidad educativa",
        description: "Cuando los procedimientos no están bien definidos, la calidad académica termina pagando la factura.",
    }
];

export default function ProblemsSection() {
    const sectionRef = useScrollReveal();

    return (
        <section className="py-28 md:py-32 bg-slate-50 relative overflow-hidden" ref={sectionRef}>
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full filter blur-[120px] opacity-60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-2xl mb-16">
                    <h2 className="reveal fade-up text-3xl md:text-4xl font-bold text-slate-900 font-display leading-tight">
                        ¿Qué problemas ayudamos a resolver?
                    </h2>
                    <p className="reveal fade-up delay-100 text-lg text-slate-600 leading-relaxed mt-5">
                        Muchas instituciones educativas enfrentan retos que afectan su operación, desempeño académico y capacidad de mejora. Nuestra consultoría ayuda a identificar esas áreas críticas y convertirlas en un plan de acción claro.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((item, index) => (
                        <div
                            key={index}
                            className={`reveal fade-up delay-${(index + 1) * 100} bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 border border-slate-100 group hover:-translate-y-1`}
                        >
                            <div className="mb-5 p-3 bg-amber-50 rounded-xl inline-block group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug">{item.title}</h3>
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
