import React from 'react';
import { AlertTriangle, Users, BookX, ClipboardList } from 'lucide-react';

const problems = [
    {
        icon: <Users className="h-8 w-8 text-red-600" />,
        title: "Rotación de Personal",
        description: "Los empleados se van porque no reciben un onboarding efectivo ni desarrollo real, aumentando costos operativos."
    },
    {
        icon: <BookX className="h-8 w-8 text-red-600" />,
        title: "Capacitaciones 'De Papel'",
        description: "Cursos que cumplen el requisito administrativo, pero no cambian el comportamiento ni la seguridad en la línea de producción."
    },
    {
        icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
        title: "Instructores Improvisados",
        description: "Expertos técnicos que saben mucho, pero no saben transmitirlo, generando confusión, errores y retrabajos."
    },
    {
        icon: <ClipboardList className="h-8 w-8 text-red-600" />,
        title: "Cumplimiento Normativo",
        description: "Estrés constante por faltantes en constancias DC-3 ante auditorías de la STPS y riesgo de multas."
    }
];

export default function ProblemsSection() {
    return (
        <section id="soluciones" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                        ¿Su Plan de Capacitación Realmente Impacta en la Productividad?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Muchos gerentes de RH enfrentan estos dolores ocultos que frenan el crecimiento de la planta.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                            <div className="mb-6 p-4 bg-red-50 rounded-full inline-block group-hover:bg-red-100 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
