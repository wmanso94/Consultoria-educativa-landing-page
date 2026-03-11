import React from 'react';
import CoursesSection from '../components/CoursesSection';
import CTASection from '../components/CTASection';

export default function CursosPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[100px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-accent-400 font-semibold tracking-wider text-sm uppercase">Catálogo de Capacitación</span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-3 font-display">Cursos Disponibles</h1>
                    <p className="text-xl text-slate-300 mt-4 max-w-2xl mx-auto">
                        Programas diseñados con rigor pedagógico y enfoque práctico para transformar su institución educativa.
                    </p>
                </div>
            </section>

            <CoursesSection />
            <CTASection />
        </>
    );
}
