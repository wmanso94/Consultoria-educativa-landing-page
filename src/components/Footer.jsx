import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-14 pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top: CTA strip */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/5">
                    <div>
                        <p className="text-white font-bold text-lg font-display">¿Necesitas orientación para tu institución?</p>
                        <p className="text-slate-500 text-sm mt-1">El primer paso es una conversación. Sin compromiso.</p>
                    </div>
                    <Link
                        to="/contacto"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-accent-500/15 hover:shadow-accent-500/25 transition-all group hover:-translate-y-0.5 flex-shrink-0"
                    >
                        Solicitar diagnóstico inicial
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Middle: 3-col info */}
                <div className="grid md:grid-cols-3 gap-10 py-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center">
                                <BookOpen className="h-4 w-4 text-accent-400" />
                            </div>
                            <div>
                                <span className="text-white font-bold text-sm leading-none block">José Ramón Manso Toledo</span>
                                <span className="text-slate-500 text-[10px] font-semibold tracking-[0.15em] uppercase">Consultoría Educativa</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Consultoría para colegios e instituciones educativas. Diagnóstico, capacitación y acompañamiento estratégico.
                        </p>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Servicios</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link to="/servicios" className="hover:text-accent-400 transition-colors">Diagnóstico institucional</Link></li>
                            <li><Link to="/servicios" className="hover:text-accent-400 transition-colors">Capacitación docente y directiva</Link></li>
                            <li><Link to="/servicios" className="hover:text-accent-400 transition-colors">Optimización de procesos</Link></li>
                            <li><Link to="/servicios" className="hover:text-accent-400 transition-colors">Acompañamiento estratégico</Link></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Contacto</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-slate-600 flex-shrink-0" />
                                Aguascalientes, Ags. México
                            </li>
                            <li>
                                <a href="mailto:consultas@educationalconsultingmx.com" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                                    <Mail className="w-4 h-4 text-slate-600 flex-shrink-0" />
                                    consultas@educationalconsultingmx.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+529987627240" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                                    <Phone className="w-4 h-4 text-slate-600 flex-shrink-0" />
                                    +52 (998) 762 7240
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
                    <span>&copy; {new Date().getFullYear()} José Ramón Manso Toledo · Consultoría Educativa</span>
                    <span>Aguascalientes, México</span>
                </div>
            </div>
        </footer>
    );
}
