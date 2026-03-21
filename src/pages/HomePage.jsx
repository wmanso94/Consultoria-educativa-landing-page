import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProblemsSection from '../components/ProblemsSection';
import CTASection from '../components/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';
import { Search, GraduationCap, Settings, Handshake, ArrowRight, CheckCircle } from 'lucide-react';

/* ─── Services Data ─── */
const services = [
    {
        icon: <Search className="h-6 w-6" />,
        color: "from-blue-600 to-blue-700",
        title: "Diagnóstico institucional",
        description: "Evaluamos el estado actual de la institución para detectar áreas de mejora en organización académica, operación, seguimiento y desempeño general.",
        includes: [
            "Revisión inicial de procesos clave",
            "Identificación de áreas críticas",
            "Diagnóstico de fortalezas y debilidades",
            "Recomendaciones iniciales de mejora",
        ]
    },
    {
        icon: <GraduationCap className="h-6 w-6" />,
        color: "from-accent-500 to-accent-600",
        title: "Capacitación docente y directiva",
        description: "Diseñamos procesos de formación orientados a fortalecer competencias pedagógicas, liderazgo académico y capacidad de gestión dentro de la institución.",
        includes: [
            "Talleres y sesiones de capacitación",
            "Formación para equipos docentes",
            "Acompañamiento a coordinadores y directivos",
            "Enfoque práctico y aplicable",
        ]
    },
    {
        icon: <Settings className="h-6 w-6" />,
        color: "from-emerald-600 to-emerald-700",
        title: "Optimización de procesos académicos",
        description: "Ayudamos a ordenar y mejorar procesos institucionales que impactan directamente la calidad educativa y la eficiencia operativa.",
        includes: [
            "Revisión de procesos académicos y administrativos",
            "Detección de cuellos de botella",
            "Propuestas de mejora y estandarización",
            "Enfoque en calidad y continuidad",
        ]
    },
    {
        icon: <Handshake className="h-6 w-6" />,
        color: "from-slate-700 to-slate-800",
        title: "Acompañamiento estratégico para instituciones",
        description: "Brindamos seguimiento a instituciones que necesitan apoyo continuo para implementar mejoras, consolidar procesos y fortalecer su dirección académica.",
        includes: [
            "Seguimiento periódico",
            "Revisión de avances",
            "Ajustes de estrategia",
            "Acompañamiento consultivo para directivos",
        ]
    },
];

/* ─── Services Section ─── */
function ServicesSection() {
    const sectionRef = useScrollReveal();

    return (
        <section id="servicios" className="py-28 md:py-32 bg-white" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-16">
                    <h2 className="reveal fade-up text-3xl md:text-4xl font-bold text-slate-900 font-display leading-tight">
                        Servicios de consultoría educativa
                    </h2>
                    <p className="reveal fade-up delay-100 text-lg text-slate-600 leading-relaxed mt-5">
                        Ofrecemos soluciones prácticas para instituciones que buscan ordenar su operación, fortalecer su modelo académico y elevar el desempeño de sus equipos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className={`reveal fade-up delay-${(i + 1) * 100} bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-500 group`}
                        >
                            <div className={`w-12 h-12 bg-gradient-to-br ${svc.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                {svc.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{svc.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm mb-6">{svc.description}</p>

                            <div className="space-y-2.5 mb-8">
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Incluye</p>
                                {svc.includes.map((item, j) => (
                                    <div key={j} className="flex items-start gap-2.5">
                                        <CheckCircle className="h-4 w-4 text-accent-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-slate-600">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/contacto"
                                className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold group/link text-sm"
                            >
                                Solicitar información
                                <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Trust Mini Section ─── */
function TrustSection() {
    const sectionRef = useScrollReveal();

    return (
        <section className="py-24 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" ref={sectionRef}>
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/6 rounded-full filter blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl">
                    <h2 className="reveal fade-up text-3xl md:text-4xl font-bold text-white font-display leading-tight">
                        Experiencia que aporta dirección, estructura y resultados
                    </h2>
                    <p className="reveal fade-up delay-100 text-lg text-slate-300 leading-relaxed mt-6">
                        La consultoría se basa en décadas de experiencia en liderazgo institucional, supervisión académica, formación docente y mejora continua. El objetivo no es solo detectar problemas, sino ayudar a resolverlos con orden, criterio y visión práctica.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ─── Home Page ─── */
export default function HomePage() {
    return (
        <>
            <Hero />
            <ProblemsSection />
            <ServicesSection />
            <TrustSection />
            <CTASection />
        </>
    );
}
