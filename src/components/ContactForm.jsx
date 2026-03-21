import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Building2, MessageSquare, ChevronDown } from 'lucide-react';

const serviceOptions = [
  'Diagnóstico institucional',
  'Capacitación docente y directiva',
  'Optimización de procesos académicos',
  'Acompañamiento estratégico',
  'Otro',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/consultas@educationalconsultingmx.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Nuevo Diagnóstico: ${formData.name} — ${formData.service}`,
          _template: 'table',
          Nombre: formData.name,
          Email: formData.email,
          Teléfono: formData.phone || 'No proporcionado',
          'Empresa / Institución': formData.company || 'No proporcionada',
          'Servicio de Interés': formData.service,
          Mensaje: formData.message || 'Sin mensaje adicional',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 shadow-lg p-10 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">¡Mensaje Enviado!</h3>
        <p className="text-slate-500 mb-6 max-w-sm mx-auto">
          Gracias por su interés. Le contactaremos en las próximas 24 horas para conversar sobre su caso.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const inputBaseClass = "w-full px-4 py-3.5 bg-slate-50 border rounded-xl text-slate-800 placeholder-slate-400 transition-all duration-200 outline-none text-[15px]";
  const inputFocusClass = "border-blue-500 bg-white ring-2 ring-blue-500/20 shadow-sm";
  const inputIdleClass = "border-slate-200 hover:border-slate-300";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/5 p-8 md:p-10">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 font-display">Solicite su diagnóstico inicial</h3>
        <p className="text-slate-500 mt-1.5 text-sm">Complete el formulario y le contactaremos en menos de 24 horas.</p>
      </div>

      <div className="space-y-5">
        {/* Name & Email Row */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="relative">
            <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-1.5">Nombre completo *</label>
            <div className="relative">
              <User className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors ${focusedField === 'name' ? 'text-blue-500' : 'text-slate-400'}`} />
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                placeholder="Ej. María González"
                className={`${inputBaseClass} pl-10 ${focusedField === 'name' ? inputFocusClass : inputIdleClass}`}
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-1.5">Correo electrónico *</label>
            <div className="relative">
              <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors ${focusedField === 'email' ? 'text-blue-500' : 'text-slate-400'}`} />
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="correo@empresa.com"
                className={`${inputBaseClass} pl-10 ${focusedField === 'email' ? inputFocusClass : inputIdleClass}`}
              />
            </div>
          </div>
        </div>

        {/* Phone & Company Row */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="relative">
            <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Teléfono</label>
            <div className="relative">
              <Phone className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors ${focusedField === 'phone' ? 'text-blue-500' : 'text-slate-400'}`} />
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                placeholder="+52 (449) 123 4567"
                className={`${inputBaseClass} pl-10 ${focusedField === 'phone' ? inputFocusClass : inputIdleClass}`}
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-700 mb-1.5">Empresa / Institución</label>
            <div className="relative">
              <Building2 className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors ${focusedField === 'company' ? 'text-blue-500' : 'text-slate-400'}`} />
              <input
                type="text"
                id="contact-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => setFocusedField('company')}
                onBlur={() => setFocusedField(null)}
                placeholder="Nombre de la organización"
                className={`${inputBaseClass} pl-10 ${focusedField === 'company' ? inputFocusClass : inputIdleClass}`}
              />
            </div>
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label htmlFor="contact-service" className="block text-sm font-semibold text-slate-700 mb-1.5">Servicio de interés *</label>
          <div className="relative">
            <ChevronDown className={`absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none transition-colors ${focusedField === 'service' ? 'text-blue-500' : 'text-slate-400'}`} />
            <select
              id="contact-service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              onFocus={() => setFocusedField('service')}
              onBlur={() => setFocusedField(null)}
              className={`${inputBaseClass} appearance-none pr-10 cursor-pointer ${focusedField === 'service' ? inputFocusClass : inputIdleClass} ${!formData.service ? 'text-slate-400' : ''}`}
            >
              <option value="" disabled>Seleccione un servicio</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-1.5">Mensaje</label>
          <div className="relative">
            <MessageSquare className={`absolute left-3.5 top-4 h-4 w-4 transition-colors ${focusedField === 'message' ? 'text-blue-500' : 'text-slate-400'}`} />
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              placeholder="Cuéntenos brevemente su situación o lo que necesita..."
              className={`${inputBaseClass} pl-10 resize-none ${focusedField === 'message' ? inputFocusClass : inputIdleClass}`}
            />
          </div>
        </div>
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          Hubo un error al enviar. Por favor intente de nuevo o contáctenos por WhatsApp.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-8 w-full flex justify-center items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 hover:shadow-xl transition-all text-lg group disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
      >
        {status === 'sending' ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Solicitar diagnóstico inicial
            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-400 mt-4">
        Sus datos están protegidos. No compartimos su información con terceros.
      </p>
    </form>
  );
}
