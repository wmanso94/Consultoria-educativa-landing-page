import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProblemsSection from '../components/ProblemsSection';
import CTASection from '../components/CTASection';
import { BrainCircuit, Lightbulb, FileCheck, ArrowRight, GraduationCap, Award, Globe, ClipboardCheck, BookOpenCheck, FlaskConical, Building2 } from 'lucide-react';

/* ─── Services Preview ─── */
const servicesPreview = [
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Formación de Cuadros Docentes",
    description: "Dotamos a sus equipos de herramientas pedagógicas probadas con 40+ años de experiencia formando instructores.",
    color: "bg-blue-600"
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Diagnóstico e Inspección Metodológica",
    description: "Identificamos las verdaderas brechas de aprendizaje antes de invertir en capacitación.",
    color: "bg-amber-500"
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Certificación y Constancias DC-3",
    description: "Cumplimiento normativo con plena validez oficial ante la STPS como Agente Capacitador Externo.",
    color: "bg-emerald-600"
  }
];

function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Consultoría Especializada</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-display">Servicios Profesionales</h2>
          <p className="text-lg text-slate-500 mt-3 max-w-xl mx-auto">Soluciones de fondo para organizaciones que buscan excelencia educativa.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesPreview.map((svc, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
              <div className={`w-12 h-12 ${svc.color} rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}>
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{svc.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{svc.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/servicios"
            className="inline-flex items-center px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 group"
          >
            Ver Todos los Servicios
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Courses Preview ─── */
const coursesPreview = [
  { icon: <ClipboardCheck className="h-5 w-5" />, title: "Diagnósticos Integrales de Estudiantes", tag: "Evaluación", tagColor: "bg-emerald-100 text-emerald-700" },
  { icon: <BookOpenCheck className="h-5 w-5" />, title: "Planeación de la Actividad Docente", tag: "Didáctica", tagColor: "bg-blue-100 text-blue-700" },
  { icon: <FlaskConical className="h-5 w-5" />, title: "Métodos Psicopedagógicos de Investigación", tag: "Investigación", tagColor: "bg-purple-100 text-purple-700" },
  { icon: <Building2 className="h-5 w-5" />, title: "Organización Escolar Institucional", tag: "Gestión", tagColor: "bg-amber-100 text-amber-700" },
];

function CoursesPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Catálogo de Capacitación</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-display">Cursos Disponibles</h2>
          <p className="text-lg text-slate-500 mt-3 max-w-xl mx-auto">Programas diseñados con rigor pedagógico y enfoque práctico.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coursesPreview.map((course, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${course.tagColor}`}>{course.tag}</span>
              <div className="p-2.5 rounded-lg bg-slate-100 text-blue-700 inline-flex mt-4 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {course.icon}
              </div>
              <h3 className="text-base font-bold text-slate-800 leading-tight">{course.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/cursos"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group text-lg"
          >
            Ver los 8 cursos disponibles
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Trayectoria Preview ─── */
const stats = [
  { value: "40+", label: "Años de Experiencia" },
  { value: "Mtro.", label: "Ciencias de la Educación" },
  { value: "72", label: "Auditorías Pedagógicas/Año" },
  { value: "10+", label: "Centros Educativos Supervisados" },
];

function TrayectoriaPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/8 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-accent-400 font-semibold tracking-wider text-sm uppercase">Sobre el Consultor</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 font-display">Trayectoria que Respalda</h2>
          <p className="text-lg text-slate-300 mt-3 max-w-xl mx-auto">Directivo y estratega educativo con experiencia internacional y resultados medibles.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-accent-400 font-display mb-1">{stat.value}</div>
              <div className="text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/trayectoria"
            className="inline-flex items-center px-8 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all hover:-translate-y-0.5 group backdrop-blur-sm"
          >
            Conocer Trayectoria Completa
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <ServicesPreview />
      <CoursesPreview />
      <TrayectoriaPreview />
      <CTASection />
    </>
  );
}
