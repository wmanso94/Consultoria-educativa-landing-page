import React from 'react';
import { ClipboardCheck, PhoneCall, Target } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const steps = [
    {
        step: '01',
        icon: <PhoneCall className="h-6 w-6 text-white" />,
        title: 'Diagnóstico Gratuito',
        description: 'Conversación de 15 minutos para entender sus retos de capacitación y determinar si podemos ayudarle.',
    },
    {
        step: '02',
        icon: <ClipboardCheck className="h-6 w-6 text-white" />,
        title: 'Propuesta a la Medida',
        description: 'Diseñamos un programa personalizado con objetivos claros, calendario y presupuesto definido.',
    },
    {
        step: '03',
        icon: <Target className="h-6 w-6 text-white" />,
        title: 'Ejecución con Resultados',
        description: 'Implementamos la formación, emitimos constancias DC-3 y medimos el impacto real en su operación.',
    },
];

export default function ProcessSection() {
    const sectionRef = useScrollReveal();

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" ref={sectionRef}>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="reveal fade-up inline-block text-accent-600 font-semibold tracking-wider text-sm uppercase mb-3">Cómo Trabajamos</span>
                    <h2 className="reveal fade-up delay-100 text-3xl md:text-4xl font-bold text-slate-900 font-display">
                        3 Pasos Simples para Transformar su Capacitación
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-accent-200 via-accent-400 to-accent-200 z-0"></div>

                    {steps.map((item, index) => (
                        <div key={index} className={`reveal fade-up delay-${(index + 1) * 100} relative text-center group`}>
                            <div className="relative z-10 mx-auto w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-500/20 mb-6 group-hover:scale-110 group-hover:shadow-accent-500/30 transition-all">
                                {item.icon}
                            </div>
                            <span className="text-accent-500/20 font-bold text-5xl font-display absolute -top-2 left-1/2 -translate-x-1/2 z-0 select-none">{item.step}</span>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm max-w-xs mx-auto">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
