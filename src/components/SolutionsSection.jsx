import React from 'react';
import { Lightbulb, FileCheck, BrainCircuit } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Formación de Instructores (Train the Trainer)",
        description: "No basta con saber hacer el trabajo, hay que saber enseñarlo. Dotamos a sus expertos técnicos de herramientas andragógicas probadas para que transmitan sus conocimientos con claridad, estructura y efectividad, reduciendo la curva de aprendizaje de los nuevos operarios.",
        icon: <BrainCircuit className="h-6 w-6 text-white" />,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1696&q=80"
    },
    {
        id: 2,
        title: "Diagnóstico Psicopedagógico Organizacional",
        description: "Analizamos las brechas de aprendizaje en su organización desde una perspectiva clínica y laboral. Identificamos si el problema es de capacitación, de actitud o de proceso, evitando que gaste presupuesto en cursos que no resuelven la raíz del problema.",
        icon: <Lightbulb className="h-6 w-6 text-white" />,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80"
    },
    {
        id: 3,
        title: "Certificación y Constancias DC-3",
        description: "Emisión de constancias con plena validez oficial ante la STPS. Como Agente Capacitador Externo registrado, garantizamos que su empresa cumpla rigurosamente con la normativa legal, evitando multas y asegurando la calidad de la formación.",
        icon: <FileCheck className="h-6 w-6 text-white" />,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1711&q=80"
    }
];

export default function SolutionsSection() {
    return (
        <section id="servicios" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Nuestros Servicios</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-display">
                        Soluciones de Fondo, No Parches Temporales
                    </h2>
                </div>

                <div className="space-y-24">
                    {services.map((service, index) => (
                        <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video group">
                                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-lg shadow-lg">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {['Metodología Práctica', 'Enfoque en Resultados', 'Soporte Continuo'].map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700 font-medium">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
