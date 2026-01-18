import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section id="contacto" className="py-24 bg-blue-900 relative">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                    Deje la Capacitación en Manos de un Experto Senior
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    No arriesgue su presupuesto en formadores junior. Obtenga sabiduría estratégica y resultados medibles desde la primera sesión.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="inline-flex justify-center items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-lg hover:bg-slate-100 transition-all text-lg hover:scale-105">
                        Solicitar Diagnóstico (15 min)
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg">
                        Contactar por WhatsApp
                    </button>
                </div>

                <p className="mt-8 text-sm text-blue-200 opacity-80">
                    * Disponibilidad limitada para nuevos proyectos este trimestre.
                </p>
            </div>
        </section>
    );
}
