import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <BookOpen className="h-8 w-8 text-blue-800" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-slate-900 leading-none">José Ramón Manso Toledo</span>
                            <span className="text-xs text-slate-600 font-medium tracking-wider">ESTRATEGIA EDUCATIVA</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#soluciones" className="text-slate-600 hover:text-blue-800 font-medium transition-colors">Soluciones</a>
                        <a href="#servicios" className="text-slate-600 hover:text-blue-800 font-medium transition-colors">Servicios</a>
                        <a href="#trayectoria" className="text-slate-600 hover:text-blue-800 font-medium transition-colors">Trayectoria</a>
                        <a
                            href="#contacto"
                            className="px-5 py-2.5 bg-blue-900 text-white font-semibold rounded-md shadow-md hover:bg-blue-800 transition-all hover:shadow-lg"
                        >
                            Diagnóstico Gratuito
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 hover:text-blue-900 p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="#soluciones" className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-blue-800 rounded-md">Soluciones</a>
                        <a href="#servicios" className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-blue-800 rounded-md">Servicios</a>
                        <a href="#trayectoria" className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-blue-800 rounded-md">Trayectoria</a>
                        <a href="#contacto" className="block w-full text-center mt-4 px-5 py-3 bg-blue-900 text-white font-semibold rounded-md">
                            Diagnóstico Gratuito
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
