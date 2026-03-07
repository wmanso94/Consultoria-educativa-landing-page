import React from 'react';
import { Award, Globe, GraduationCap, Briefcase, Quote } from 'lucide-react';
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
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left column: Bio + credentials */}
                    <div className="space-y-8">
                        <p className="reveal fade-up text-slate-300 text-lg leading-relaxed">
                            La experiencia no se improvisa. Mi carrera se ha forjado en las aulas universitarias y en el piso de producción. Entiendo el lenguaje de la academia y la urgencia de la industria.
                        </p>

                        <div className="reveal fade-up delay-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent-500/30 transition-colors group">
                                <GraduationCap className="h-8 w-8 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-bold text-white mb-1">Maestría en Educación</h4>
                                <p className="text-slate-400 text-sm">Especialización en diseño curricular y evaluación del aprendizaje.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent-500/30 transition-colors group">
                                <Globe className="h-8 w-8 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-bold text-white mb-1">Experiencia Internacional</h4>
                                <p className="text-slate-400 text-sm">Proyectos educativos implementados en diversos contextos culturales.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent-500/30 transition-colors group">
                                <Award className="h-8 w-8 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-bold text-white mb-1">Agente Capacitador</h4>
                                <p className="text-slate-400 text-sm">Registro oficial ante la STPS como agente externo autorizado.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent-500/30 transition-colors group">
                                <Briefcase className="h-8 w-8 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-bold text-white mb-1">Sector Industrial</h4>
                                <p className="text-slate-400 text-sm">Empresas automotrices, manufactura y servicios en Aguascalientes.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Quote + Testimonials */}
                    <div className="space-y-6">
                        {/* Personal Quote Card */}
                        <div className="reveal scale-in bg-gradient-to-br from-white to-slate-50 text-slate-900 p-8 rounded-2xl shadow-2xl shadow-black/20 relative">
                            <Quote className="h-10 w-10 text-accent-200 absolute -top-2 -left-2" />
                            <p className="text-xl font-medium italic text-slate-700 mb-6 relative z-10 leading-relaxed font-display">
                                Mi metodología une la psicología educativa con las necesidades industriales de Aguascalientes. No busco solo "dar cursos", busco transformar la mentalidad operativa de su equipo.
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full mr-4 flex items-center justify-center font-bold text-white shadow-lg shadow-accent-500/20">
                                    JR
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Mtro. José Ramón Manso Toledo</p>
                                    <p className="text-sm text-slate-500">Consultor Senior</p>
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
