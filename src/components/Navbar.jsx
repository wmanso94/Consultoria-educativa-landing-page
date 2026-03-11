import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white/98 shadow-lg shadow-slate-900/5 backdrop-blur-md border-b border-slate-200/80'
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <a href="#" className="flex items-center space-x-3 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <BookOpen className="h-5 w-5 text-accent-400" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-slate-900 leading-none tracking-tight">José Ramón Manso Toledo</span>
                            <span className="text-[10px] text-slate-500 font-semibold tracking-[0.2em] uppercase mt-0.5">Estrategia Educativa</span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#soluciones" onClick={(e) => handleNavClick(e, '#soluciones')} className="text-slate-600 hover:text-slate-900 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent-500 after:transition-all hover:after:w-full">Soluciones</a>
                        <a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')} className="text-slate-600 hover:text-slate-900 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent-500 after:transition-all hover:after:w-full">Servicios</a>
                        <a href="#cursos" onClick={(e) => handleNavClick(e, '#cursos')} className="text-slate-600 hover:text-slate-900 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent-500 after:transition-all hover:after:w-full">Cursos</a>
                        <a href="#trayectoria" onClick={(e) => handleNavClick(e, '#trayectoria')} className="text-slate-600 hover:text-slate-900 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent-500 after:transition-all hover:after:w-full">Trayectoria</a>
                        <a
                            href="#contacto"
                            onClick={(e) => handleNavClick(e, '#contacto')}
                            className="px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg shadow-md hover:shadow-accent-500/25 hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Diagnóstico Gratuito
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white/98 backdrop-blur-md border-t border-slate-100">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        <a href="#soluciones" onClick={(e) => handleNavClick(e, '#soluciones')} className="block px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">Soluciones</a>
                        <a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')} className="block px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">Servicios</a>
                        <a href="#cursos" onClick={(e) => handleNavClick(e, '#cursos')} className="block px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">Cursos</a>
                        <a href="#trayectoria" onClick={(e) => handleNavClick(e, '#trayectoria')} className="block px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">Trayectoria</a>
                        <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="block w-full text-center mt-4 px-5 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg shadow-md">
                            Diagnóstico Gratuito
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
