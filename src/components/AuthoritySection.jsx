import React from 'react';
import { Award, Globe, GraduationCap, Briefcase } from 'lucide-react';

export default function AuthoritySection() {
    return (
        <section id="trayectoria" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-900/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2 block">Trayectoria</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                            4 Décadas Formando Talento y Construyendo Futuro
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            La experiencia no se improvisa. Mi carrera se ha forjado en las aulas universitarias y en el piso de producción. Entiendo el lenguaje de la academia y la urgencia de la industria.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                                <GraduationCap className="h-8 w-8 text-blue-400 mb-4" />
                                <h4 className="text-lg font-bold text-white mb-2">Maestría en Educación</h4>
                                <p className="text-slate-400 text-sm">Especialización en diseño curricular y evaluación del aprendizaje.</p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                                <Globe className="h-8 w-8 text-blue-400 mb-4" />
                                <h4 className="text-lg font-bold text-white mb-2">Experiencia Internacional</h4>
                                <p className="text-slate-400 text-sm">Proyectos educativos implementados en diversos contextos culturales.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Quote Card */}
                        <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl relative">
                            <div className="text-6xl text-blue-200 absolute -top-4 -left-4 font-serif leading-none">"</div>
                            <p className="text-xl font-medium italic text-slate-700 mb-6 relative z-10">
                                Mi metodología une la psicología educativa con las necesidades industriales de Aguascalientes. No busco solo "dar cursos", busco transformar la mentalidad operativa de su equipo.
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4 flex items-center justify-center font-bold text-slate-500">
                                    JR
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Mtro. José Ramón Manso Toledo</p>
                                    <p className="text-sm text-slate-500">Consultor Senior</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
