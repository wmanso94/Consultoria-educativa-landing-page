import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: '/servicios', label: 'Servicios' },
        { to: '/cursos', label: 'Cursos' },
        { to: '/trayectoria', label: 'Trayectoria' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white/98 shadow-lg shadow-slate-900/5 backdrop-blur-md border-b border-slate-200/80'
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <BookOpen className="h-5 w-5 text-accent-400" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-slate-900 leading-none tracking-tight">José Ramón Manso Toledo</span>
                            <span className="text-[10px] text-slate-500 font-semibold tracking-[0.2em] uppercase mt-0.5">Estrategia Educativa</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent-500 after:transition-all ${isActive(link.to)
                                        ? 'text-slate-900 after:w-full'
                                        : 'text-slate-600 hover:text-slate-900 after:w-0 hover:after:w-full'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/contacto"
                            className="px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg shadow-md hover:shadow-accent-500/25 hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Diagnóstico Gratuito
                        </Link>
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
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white/98 backdrop-blur-md border-t border-slate-100">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 font-medium rounded-lg transition-colors ${isActive(link.to)
                                        ? 'bg-slate-100 text-slate-900'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/contacto"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 px-5 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg shadow-md"
                        >
                            Diagnóstico Gratuito
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
