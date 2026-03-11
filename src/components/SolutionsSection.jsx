import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, FileCheck, BrainCircuit, ArrowRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const services = [
    {
        id: 1,
        title: "Formación y Mentoría de Cuadros Docentes",
        description: "Con más de 40 años formando maestros y directivos, dotamos a sus equipos de herramientas pedagógicas probadas. Desde la Maestría en Ciencias de la Educación hasta la experiencia en planta, diseñamos programas que transforman expertos técnicos en instructores efectivos.",
        icon: <BrainCircuit className="h-6 w-6 text-white" />,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1696&q=80",
        bullets: [
            'Metodología probada en 40+ años de formación docente',
            'Diseño de programas con rigor universitario',
            'Evaluación del desempeño y transferencia al puesto'
        ]
    },
    {
        id: 2,
        title: "Diagnóstico e Inspección Metodológica",
        description: "Con experiencia liderando 72 auditorías pedagógicas anuales y supervisando 10 centros educativos, realizamos un diagnóstico integral que identifica las verdaderas brechas de aprendizaje — sean de capacitación, actitud o proceso — antes de invertir un solo peso.",
        icon: <Lightbulb className="h-6 w-6 text-white" />,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80",
        bullets: [
            'Metodología de inspección probada en 10+ centros educativos',
            '72 auditorías pedagógicas anuales de referencia',
            'Plan de mejora con indicadores medibles (hasta 70% de mejora)'
        ]
    },
    {
        id: 3,
        title: "Gestión Estratégica y Mejora Continua",
        description: "Desde la dirección de instituciones educativas hasta la optimización de procesos académicos, diseñamos e implementamos programas de mejora continua que elevan la organización docente y la calidad operativa de forma sostenible.",
        icon: <FileCheck className="h-6 w-6 text-white" />,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1711&q=80",
        bullets: [
            'Estandarización de procesos curriculares',
            'Gestión de presupuestos y recursos operativos',
            'Evaluación institucional y superación profesional'
        ]
    }
];

export default function SolutionsSection() {
    const sectionRef = useScrollReveal();

    return (
        <section id="servicios" className="py-24 bg-white" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="reveal fade-up inline-block text-accent-600 font-semibold tracking-wider text-sm uppercase mb-3">Nuestros Servicios</span>
                    <h2 className="reveal fade-up delay-100 text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-display">
                        Soluciones de Fondo, No Parches Temporales
                    </h2>
                </div>

                <div className="space-y-32">
                    {services.map((service, index) => (
                        <div key={service.id} ref={useScrollReveal()} className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Image Side */}
                            <div className={`reveal ${index % 2 === 0 ? 'slide-left' : 'slide-right'} w-full lg:w-1/2`}>
                                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 aspect-video group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 group-hover:from-slate-900/20 transition-all duration-500"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4 bg-gradient-to-br from-accent-500 to-accent-600 p-3 rounded-xl shadow-lg shadow-accent-500/20 z-20">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className={`reveal ${index % 2 === 0 ? 'slide-right' : 'slide-left'} w-full lg:w-1/2 space-y-6`}>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-display leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.bullets.map((item, i) => (
                                        <li key={i} className="flex items-start text-slate-700 font-medium">
                                            <div className="w-5 h-5 bg-accent-100 rounded-full mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contacto" className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold group/link mt-2">
                                    Solicitar información
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
