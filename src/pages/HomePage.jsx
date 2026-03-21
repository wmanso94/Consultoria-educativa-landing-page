import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProblemsSection from '../components/ProblemsSection';
import CTASection from '../components/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';
import { Search, GraduationCap, Settings, Handshake, ArrowRight, CheckCircle, ClipboardList, MessageSquare, FileText, RefreshCw, Award, Building2, BookOpenCheck, BarChart3 } from 'lucide-react';

/* ─── Services Data ─── */
const services = [
    {
        icon: <Search className="h-6 w-6" />,
        color: "from-blue-600 to-blue-700",
        title: "Diagnóstico institucional",
        outcome: "Saber exactamente dónde intervenir antes de invertir tiempo o dinero.",
        description: "Revisamos la operación académica, los procesos y el desempeño general de tu institución para entregarte un mapa claro de prioridades.",
        includes: [
            "Revisión de procesos clave en operación y academia",
            "Identificación de fortalezas, debilidades y cuellos de botella",
            "Recomendaciones priorizadas con enfoque práctico",
        ]
    },
    {
        icon: <GraduationCap className="h-6 w-6" />,
        color: "from-accent-500 to-accent-600",
        title: "Capacitación docente y directiva",
        outcome: "Un equipo que enseña mejor, lidera mejor y aplica lo aprendido desde el día uno.",
        description: "Formación diseñada para las necesidades reales de tu equipo — no cursos genéricos, sino herramientas que se usan al día siguiente.",
        includes: [
            "Talleres prácticos para docentes y coordinadores",
            "Formación en liderazgo académico para directivos",
            "Acompañamiento individual y grupal post-capacitación",
        ]
    },
    {
        icon: <Settings className="h-6 w-6" />,
        color: "from-emerald-600 to-emerald-700",
        title: "Optimización de procesos académicos",
        outcome: "Procesos claros que sostienen la calidad sin depender de personas clave.",
        description: "Ayudamos a documentar, simplificar y estandarizar los procesos que impactan directamente la calidad educativa y la eficiencia operativa.",
        includes: [
            "Revisión de procesos académicos y administrativos",
            "Detección y eliminación de pasos innecesarios",
            "Propuestas de estandarización con enfoque realista",
        ]
    },
    {
        icon: <Handshake className="h-6 w-6" />,
        color: "from-slate-700 to-slate-800",
        title: "Acompañamiento estratégico",
        outcome: "Apoyo continuo hasta que los cambios se sostengan por sí mismos.",
        description: "No entregamos un informe y nos vamos. Nos quedamos para ayudar a implementar, medir avances y ajustar la estrategia sobre la marcha.",
        includes: [
            "Seguimiento periódico con revisión de avances",
            "Ajustes de estrategia basados en resultados",
            "Apoyo consultivo directo para el equipo directivo",
        ]
    },
];

/* ─── Process Steps ─── */
const processSteps = [
    {
        number: "01",
        icon: <ClipboardList className="h-5 w-5" />,
        title: "Conversación inicial",
        description: "Escuchamos tu situación y definimos si hay un encaje real. Sin compromiso.",
    },
    {
        number: "02",
        icon: <MessageSquare className="h-5 w-5" />,
        title: "Revisión de necesidades",
        description: "Profundizamos en los retos específicos, los recursos disponibles y los resultados que buscas.",
    },
    {
        number: "03",
        icon: <FileText className="h-5 w-5" />,
        title: "Propuesta a la medida",
        description: "Diseñamos un plan con alcance, tiempos y entregables claros. Sabes exactamente qué esperar.",
    },
    {
        number: "04",
        icon: <RefreshCw className="h-5 w-5" />,
        title: "Implementación y seguimiento",
        description: "Ejecutamos, medimos y ajustamos. El objetivo es que los cambios se sostengan sin depender de nosotros.",
    },
];

/* ─── Credencial Data ─── */
const credentials = [
    { value: "40+", label: "Años de experiencia en educación", icon: <Award className="h-5 w-5" /> },
    { value: "10+", label: "Instituciones supervisadas", icon: <Building2 className="h-5 w-5" /> },
    { value: "72", label: "Auditorías pedagógicas / año", icon: <BookOpenCheck className="h-5 w-5" /> },
    { value: "Mtro.", label: "Maestría en Ciencias de la Educación", icon: <GraduationCap className="h-5 w-5" /> },
];

/* ─── Services Section ─── */
function ServicesSection() {
    const sectionRef = useScrollReveal();

    return (
        <section id="servicios" className="py-20 md:py-24 bg-white" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-12">
                    <span className="reveal fade-up inline-block text-accent-600 font-semibold tracking-wider text-xs uppercase mb-3">Servicios</span>
                    <h2 className="reveal fade-up delay-100 text-3xl md:text-4xl font-bold text-slate-900 font-display leading-tight">
                        Lo que hacemos — y el resultado que obtienes
                    </h2>
                    <p className="reveal fade-up delay-200 text-base text-slate-500 leading-relaxed mt-4">
                        Cada servicio resuelve un problema concreto. No vendemos paquetes: diseñamos lo que tu institución necesita hoy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className={`reveal fade-up delay-${(i + 1) * 100} bg-slate-50 rounded-2xl p-7 md:p-8 border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-500 group`}
                        >
                            <div className={`w-11 h-11 bg-gradient-to-br ${svc.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                {svc.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-1.5">{svc.title}</h3>
                            <p className="text-accent-600 font-medium text-sm mb-3">{svc.outcome}</p>
                            <p className="text-slate-500 leading-relaxed text-sm mb-5">{svc.description}</p>

                            <div className="space-y-2 mb-6">
                                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Incluye</p>
                                {svc.includes.map((item, j) => (
                                    <div key={j} className="flex items-start gap-2">
                                        <CheckCircle className="h-3.5 w-3.5 text-accent-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-slate-600">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/contacto"
                                className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold group/link text-sm"
                            >
                                Solicitar diagnóstico inicial
                                <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Mid-page CTA */}
                <div className="reveal fade-up delay-500 mt-10 bg-slate-900 rounded-2xl p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                    <div>
                        <p className="text-white font-bold text-base">¿No sabes por dónde empezar?</p>
                        <p className="text-slate-400 text-sm mt-1">El diagnóstico inicial te da un mapa claro de prioridades.</p>
                    </div>
                    <Link
                        to="/contacto"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-accent-500/15 hover:shadow-accent-500/25 transition-all group hover:-translate-y-0.5 flex-shrink-0"
                    >
                        Solicitar diagnóstico inicial
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

/* ─── Credibility Section ─── */
function CredibilitySection() {
    const sectionRef = useScrollReveal();

    return (
        <section className="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" ref={sectionRef}>
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/6 rounded-full filter blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Stats bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                    {credentials.map((cred, i) => (
                        <div
                            key={i}
                            className={`reveal fade-up delay-${(i + 1) * 100} bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all`}
                        >
                            <div className="text-accent-400 flex justify-center mb-2">{cred.icon}</div>
                            <div className="text-2xl md:text-3xl font-bold text-white font-display">{cred.value}</div>
                            <div className="text-xs text-slate-400 mt-1">{cred.label}</div>
                        </div>
                    ))}
                </div>

                {/* Consultant profile */}
                <div className="reveal fade-up delay-500 grid md:grid-cols-[auto_1fr] gap-8 items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
                    {/* Photo */}
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-accent-500/30 mx-auto md:mx-0">
                        <img
                            src="/jose-ramon-manso.jpg"
                            alt="Mtro. José Ramón Manso Toledo"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    {/* Bio */}
                    <div>
                        <h3 className="text-xl font-bold text-white font-display">Mtro. José Ramón Manso Toledo</h3>
                        <p className="text-accent-400 text-sm font-medium mt-1">Director de Consultoría Educativa</p>
                        <p className="text-slate-300 leading-relaxed mt-4 text-sm max-w-2xl">
                            Más de 40 años dirigiendo instituciones educativas, supervisando academias, formando docentes y optimizando procesos académicos. Maestría en Ciencias de la Educación. Jurado en congresos pedagógicos internacionales. Ha liderado equipos de más de 60 colaboradores y gestionado la supervisión de más de 10 centros educativos simultáneamente.
                        </p>
                        <p className="text-slate-400 text-sm mt-3">
                            Esta consultoría no se basa en teoría — se basa en haberlo hecho.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Cómo Trabajamos ─── */
function ProcessSection() {
    const sectionRef = useScrollReveal();

    return (
        <section id="proceso" className="py-20 md:py-24 bg-white" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-12">
                    <span className="reveal fade-up inline-block text-accent-600 font-semibold tracking-wider text-xs uppercase mb-3">Proceso</span>
                    <h2 className="reveal fade-up delay-100 text-3xl md:text-4xl font-bold text-slate-900 font-display leading-tight">
                        Cómo trabajamos
                    </h2>
                    <p className="reveal fade-up delay-200 text-base text-slate-500 leading-relaxed mt-4">
                        Cuatro pasos. Sin procesos complicados ni compromisos a ciegas.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, i) => (
                        <div
                            key={i}
                            className={`reveal fade-up delay-${(i + 1) * 100} relative`}
                        >
                            {i < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-7 left-[calc(100%+0.25rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
                            )}

                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-accent-400 flex-shrink-0">
                                    {step.icon}
                                </div>
                                <span className="text-2xl font-bold text-slate-200 font-display">{step.number}</span>
                            </div>

                            <h3 className="text-base font-bold text-slate-800 mb-1.5">{step.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
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
            <CredibilitySection />
            <ProcessSection />
            <CTASection />
        </>
    );
}
