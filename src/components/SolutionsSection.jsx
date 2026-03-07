import React from 'react';
import { Lightbulb, FileCheck, BrainCircuit, ArrowRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const services = [
    {
        id: 1,
        title: "Formación de Instructores (Train the Trainer)",
        description: "No basta con saber hacer el trabajo, hay que saber enseñarlo. Dotamos a sus expertos técnicos de herramientas andragógicas probadas para que transmitan sus conocimientos con claridad, estructura y efectividad, reduciendo la curva de aprendizaje de los nuevos operarios.",
        icon: <BrainCircuit className="h-6 w-6 text-white" />,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1696&q=80",
        bullets: [
            'Técnicas de enseñanza para adultos (Andragogía)',
            'Diseño de sesiones de 4 y 8 horas',
            'Evaluación de transferencia al puesto'
        ]
    },
    {
        id: 2,
        title: "Diagnóstico Psicopedagógico Organizacional",
        description: "Analizamos las brechas de aprendizaje en su organización desde una perspectiva clínica y laboral. Identificamos si el problema es de capacitación, de actitud o de proceso, evitando que gaste presupuesto en cursos que no resuelven la raíz del problema.",
        icon: <Lightbulb className="h-6 w-6 text-white" />,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80",
        bullets: [
            'Mapeo de brechas de competencias',
            'Entrevistas a mandos medios y operarios',
            'Plan de acción con métricas claras'
        ]
    },
    {
        id: 3,
        title: "Certificación y Constancias DC-3",
        description: "Emisión de constancias con plena validez oficial ante la STPS. Como Agente Capacitador Externo registrado, garantizamos que su empresa cumpla rigurosamente con la normativa legal, evitando multas y asegurando la calidad de la formación.",
        icon: <FileCheck className="h-6 w-6 text-white" />,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1711&q=80",
        bullets: [
            'Registro válido ante la STPS',
            'Emisión inmediata de constancias DC-3',
            'Soporte en auditorías laborales'
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
                                <a href="#contacto" className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold group/link mt-2">
                                    Solicitar información
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
