import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative bg-slate-900 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center space-x-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-1.5">
                            <CheckCircle size={16} className="text-blue-400" />
                            <span className="text-blue-200 text-sm font-medium tracking-wide">Especialista en Andragogía Industrial</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-display">
                            Transforme su <span className="text-blue-400">Conocimiento Técnico</span> en Resultados Operativos
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                            Formación de Instructores Internos con la autoridad de 40 años de respaldo pedagógico y maestría en educación.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#contacto"
                                className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all text-lg group"
                            >
                                Agende Diagnóstico (15 min)
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#trayectoria"
                                className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-slate-600 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all text-lg"
                            >
                                Ver Trayectoria
                            </a>
                        </div>

                        <div className="pt-8 border-t border-slate-800 flex items-center space-x-8">
                            <div>
                                <p className="text-3xl font-bold text-white">40+</p>
                                <p className="text-slate-400 text-sm">Años de Experiencia</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">DC-3</p>
                                <p className="text-slate-400 text-sm">Registro STPS</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">100%</p>
                                <p className="text-slate-400 text-sm">Deducible</p>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="relative hidden lg:block">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800/50 bg-slate-800">
                            {/* Placeholder for professional portrait */}
                            <div className="aspect-[4/5] bg-slate-700 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                <span className="text-slate-500 font-medium z-10">[Retrato Profesional del Consultor]</span>
                                {/* Using a generic reliable placeholder for now to visualize layout */}
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                    alt="Consultoría Profesional"
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-blue-500/30 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
