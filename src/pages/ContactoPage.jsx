import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';

const contactMethods = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Correo Electrónico",
    value: "consultas@educationalconsultingmx.com",
    href: "mailto:consultas@educationalconsultingmx.com",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "WhatsApp",
    value: "+52 (998) 762 7240",
    href: "https://wa.me/529987627240?text=Hola%2C%20me%20gustaría%20agendar%20una%20llamada%20para%20hablar%20sobre%20consultoría%20educativa.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Ubicación",
    value: "Aguascalientes, Ags. México",
    href: null,
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Horario de Atención",
    value: "Lun - Vie: 9:00 - 18:00",
    href: null,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent-500/10 rounded-full filter blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent-400 font-semibold tracking-wider text-sm uppercase">Contacto</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 font-display">Solicite su diagnóstico inicial</h1>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            Complete el formulario y le contactaremos para entender las necesidades de su institución.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Form - Main Column */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info - Side Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">También puede contactarnos directamente</h3>
                <div className="space-y-5">
                  {contactMethods.map((method, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-10 h-10 ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700">{method.title}</p>
                        {method.href ? (
                          <a
                            href={method.href}
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-500">{method.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Trust Badges */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold mb-4">¿Por qué solicitar un diagnóstico?</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold mt-0.5">✓</span>
                    <span>Sesión gratuita de 15 minutos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold mt-0.5">✓</span>
                    <span>Identificación de áreas de oportunidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold mt-0.5">✓</span>
                    <span>Propuesta personalizada sin compromiso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold mt-0.5">✓</span>
                    <span>40+ años de experiencia a su servicio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
