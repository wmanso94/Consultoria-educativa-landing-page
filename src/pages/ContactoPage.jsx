import React from 'react';
import CTASection from '../components/CTASection';
import { ArrowRight, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactoPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[100px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-accent-400 font-semibold tracking-wider text-sm uppercase">Contacto</span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-3 font-display">Hablemos de su Proyecto</h1>
                    <p className="text-xl text-slate-300 mt-4 max-w-2xl mx-auto">
                        Agende un diagnóstico gratuito de 15 minutos y descubra cómo transformar su institución.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <a
                            href="mailto:jtoledo2w@gmail.com?subject=Solicitud de Diagnóstico Gratuito"
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group text-center"
                        >
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors">
                                <Mail className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Correo Electrónico</h3>
                            <p className="text-slate-500 text-sm">jtoledo2w@gmail.com</p>
                        </a>

                        <a
                            href="https://wa.me/529987627240?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20sus%20servicios%20de%20consultoría%20educativa."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-green-300 transition-all group text-center"
                        >
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-green-600 transition-colors">
                                <MessageCircle className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">WhatsApp</h3>
                            <p className="text-slate-500 text-sm">+52 998 762 7240</p>
                        </a>

                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                                <MapPin className="h-6 w-6 text-slate-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Ubicación</h3>
                            <p className="text-slate-500 text-sm">Aguascalientes, Ags. México</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
