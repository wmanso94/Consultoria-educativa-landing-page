import React from 'react';
import { Award, Globe, GraduationCap, Briefcase, Quote, Users, BookOpen, Search, Monitor } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const testimonials = [
    {
        quote: "Después de la capacitación, nuestros instructores internos redujeron el tiempo de onboarding un 40%. El cambio fue inmediato y medible.",
        author: "Ing. Laura Méndez",
        role: "Gerente de RH — Manufactura",
        rating: 5
    },
    {
        quote: "Por fin encontramos a un consultor que entiende tanto la academia como la realidad del piso de producción. Las constancias DC-3 se emitieron sin ningún problema.",
        author: "Lic. Roberto Guzmán",
        role: "Director de Operaciones — Automotriz",
        rating: 5
    }
];

const timeline = [
    {
        period: '2024–2025',
        title: 'Metodólogo Inspector Municipal (Áreas Técnicas e Informática)',
        org: 'Dirección General Municipal de Educación, Camajuaní, Villa Clara, Cuba',
        description: 'Supervisión a gran escala de 10 centros educativos. Diseñó programas de mejora que elevaron la organización docente en 60% y la adquisición de conocimientos en 70%. Ejecución de 72 auditorías pedagógicas anuales.'
    },
    {
        period: '2016–2024',
        title: 'Jefe de Departamento de Servicios Técnico-Docentes',
        org: 'Dirección General Municipal de Educación, Camajuaní, Villa Clara, Cuba',
        description: 'Planificación y seguimiento técnico-docente a nivel municipal. Coordinó evaluación institucional y superación profesional para claustros directivos. Mentoría enfocada en estandarización de procesos y excelencia académica.'
    },
    {
        period: '2018–2019',
        title: 'Director General — Secundaria "Clemente Cárdenas"',
        org: 'Camajuaní, Villa Clara, Cuba (asignación temporal)',
        description: 'Dirección académica y administrativa del centro. Gestión integral de presupuesto, cumplimiento curricular y calidad docente.'
    },
    {
        period: '2015–2016',
        title: 'Director General — Secundaria "José Martí"',
        org: 'Camajuaní, Villa Clara, Cuba',
        description: 'Liderazgo de la operación del centro asegurando cumplimiento curricular. Administración de presupuesto y recursos críticos.'
    },
    {
        period: '2011–2015',
        title: 'Metodólogo Inspector Municipal (Áreas Técnicas e Informática)',
        org: 'Dirección General Municipal de Educación, Camajuaní, Villa Clara, Cuba',
        description: 'Inspección y acompañamiento metodológico de 10 centros educativos, garantizando estándares de calidad en Informática y Dibujo Técnico.'
    },
    {
        period: '2009–2011',
        title: 'Jefe de Carrera — Ciencias Exactas',
        org: 'Sede Universitaria Municipal, Camajuaní',
        description: 'Gestión universitaria y docencia en Educación de la Personalidad.'
    },
    {
        period: '1984–2009',
        title: 'Formación de Maestros',
        org: 'Sistema Educativo, Villa Clara, Cuba',
        description: 'Consolidación de 25 años de carrera enfocada en pedagogía laboral y técnica, formando activamente a futuros docentes.'
    }
];

export default function AuthoritySection() {
    const sectionRef = useScrollReveal();

    return (
        <section id="trayectoria" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden" ref={sectionRef}>
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/3 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-1/2 -left-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="reveal fade-up inline-block text-accent-400 font-semibold tracking-[0.2em] uppercase text-sm mb-3">Trayectoria</span>
                    <h2 className="reveal fade-up delay-100 text-3xl md:text-4xl font-bold font-display">
                        4 Décadas Formando Talento y Construyendo Futuro
                    </h2>
                    <p className="reveal fade-up delay-200 text-slate-400 mt-4 max-w-3xl mx-auto leading-relaxed">
                        Directivo y estratega educativo con trayectoria desde Cuba hasta Aguascalientes, México. Experto en diseño de programas de mejora continua que han incrementado la eficiencia académica hasta en un 70%.
                    </p>
                </div>

                {/* Credentials Grid */}
                <div className="reveal fade-up delay-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent-500/30 transition-colors group">
                        <GraduationCap className="h-8 w-8 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white mb-1">Maestría en Ciencias de la Educación</h4>
                        <p className="text-slate-400 text-sm">Universidad de Ciencias Pedagógicas Félix Varela (2009). Licenciatura en Educación (1984).</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent-500/30 transition-colors group">
                        <Award className="h-8 w-8 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white mb-1">Jurado Internacional</h4>
                        <p className="text-slate-400 text-sm">Evaluador de ponencias en Congreso Internacional "Pedagogía" (ediciones 2005, 2013 y 2015).</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent-500/30 transition-colors group">
                        <Search className="h-8 w-8 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white mb-1">Investigador y Ponente</h4>
                        <p className="text-slate-400 text-sm">Ponente en "Pedagogía 2011" y IX Fórum de Ciencia y Técnica (2015) sobre innovación educativa.</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent-500/30 transition-colors group">
                        <Monitor className="h-8 w-8 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white mb-1">Gestión Digital</h4>
                        <p className="text-slate-400 text-sm">Google Workspace, Microsoft Teams, Zoom, plataformas LMS (Moodle, Canvas) para e-learning.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left column: Timeline */}
                    <div className="space-y-2">
                        <h3 className="reveal fade-up text-xl font-bold font-display text-white mb-6">Experiencia Profesional</h3>
                        <div className="space-y-0 relative">
                            {/* Timeline line */}
                            <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-white/10"></div>

                            {timeline.map((item, index) => (
                                <div key={index} className={`reveal fade-up delay-${(index + 1) * 100} relative pl-8 pb-8 last:pb-0`}>
                                    {/* Dot */}
                                    <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-accent-500 bg-slate-900 z-10"></div>
                                    <span className="text-accent-400 text-xs font-semibold tracking-wider uppercase">{item.period}</span>
                                    <h4 className="text-white font-bold mt-1">{item.title}</h4>
                                    <p className="text-slate-500 text-xs font-medium mt-0.5">{item.org}</p>
                                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column: Quote + Testimonials */}
                    <div className="space-y-6">
                        {/* Competencies */}
                        <div className="reveal fade-up bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mb-2">
                            <h4 className="text-lg font-bold text-white mb-4 font-display">Competencias Directivas</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-slate-300 text-sm">Gestión Estratégica y Control Técnico-Docente</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-slate-300 text-sm">Liderazgo de hasta 60 colaboradores</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-slate-300 text-sm">Optimización Operativa y Presupuestal</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-slate-300 text-sm">Formación, Mentoría y Evaluación Docente</span>
                                </div>
                            </div>
                        </div>

                        {/* Personal Quote Card */}
                        <div className="reveal scale-in bg-gradient-to-br from-white to-slate-50 text-slate-900 p-8 rounded-2xl shadow-2xl shadow-black/20 relative">
                            <Quote className="h-10 w-10 text-accent-200 absolute -top-2 -left-2" />
                            <p className="text-xl font-medium italic text-slate-700 mb-6 relative z-10 leading-relaxed font-display">
                                Mi trayectoria une el liderazgo institucional con la pedagogía de campo. No busco solo capacitar — busco transformar la cultura docente y operativa de su organización.
                            </p>
                            <div className="flex items-center">
                                <div className="w-14 h-14 rounded-full mr-4 overflow-hidden border-2 border-accent-400 shadow-lg shadow-accent-500/20">
                                    <img src="/jose-ramon-manso.jpg" alt="Mtro. José Ramón Manso Toledo" className="w-full h-full object-cover object-top" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Mtro. José Ramón Manso Toledo</p>
                                    <p className="text-sm text-slate-500">Categoría Docente Principal Asistente</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={`reveal fade-up delay-${(index + 3) * 100} bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10`}>
                                <div className="flex gap-1 mb-3">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-accent-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
