import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">

                <div className="col-span-1 md:col-span-2">
                    <span className="text-2xl font-bold text-white block mb-4">José Ramón Manso Toledo</span>
                    <p className="mb-4 max-w-sm">
                        Consultoría especializada en educación y formación industrial. Transformando el capital humano en Aguascalientes.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Servicios</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Formación de Instructores</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Diagnóstico Organizacional</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Certificación DC-3</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Contacto</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Aguascalientes, Ags. México</li>
                        <li>contacto@joseramonmanso.com</li>
                        <li>+52 (449) 123 4567</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-center text-xs">
                &copy; {new Date().getFullYear()} Consultoría Educativa José Ramón Manso Toledo. Todos los derechos reservados.
            </div>
        </footer>
    );
}
