import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-10 mb-12">

                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center">
                                <BookOpen className="h-5 w-5 text-accent-400" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">José Ramón Manso Toledo</span>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed">
                            Directivo y estratega educativo con más de 40 años de trayectoria. Maestro en Ciencias de la Educación. Transformando el capital humano desde Cuba hasta Aguascalientes.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Servicios</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/servicios" className="hover:text-accent-400 transition-colors">Formación de Cuadros Docentes</Link></li>
                            <li><Link to="/servicios" className="hover:text-accent-400 transition-colors">Diagnóstico e Inspección</Link></li>
                            <li><Link to="/cursos" className="hover:text-accent-400 transition-colors">Catálogo de Cursos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                Aguascalientes, Ags. México
                            </li>
                            <li>
                                <a href="mailto:jtoledo2w@gmail.com" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                                    <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                    jtoledo2w@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+529987627240" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                                    <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                    +52 (998) 762 7240
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <span>&copy; {new Date().getFullYear()} Consultoría Educativa José Ramón Manso Toledo. Todos los derechos reservados.</span>
                    <span>Diseñado con propósito en Aguascalientes 🇲🇽</span>
                </div>
            </div>
        </footer>
    );
}
