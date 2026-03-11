import React, { useState } from 'react';
import { GraduationCap, ClipboardCheck, FlaskConical, FileText, Building2, CalendarRange, SearchCheck, BookOpenCheck, ChevronRight } from 'lucide-react';

const courses = [
    {
        id: 1,
        icon: <ClipboardCheck className="h-6 w-6" />,
        title: "Diagnósticos Integrales de Estudiantes",
        description: "Capacitación a docentes en la elaboración de diagnósticos integrales de los estudiantes de nuevo ingreso.",
        tag: "Evaluación"
    },
    {
        id: 2,
        icon: <BookOpenCheck className="h-6 w-6" />,
        title: "Planeación de la Actividad Docente",
        description: "Capacitación para la planeación de la actividad docente para elevar la adquisición de los contenidos en el proceso docente educativo.",
        tag: "Didáctica"
    },
    {
        id: 3,
        icon: <FlaskConical className="h-6 w-6" />,
        title: "Métodos Psicopedagógicos de Investigación",
        description: "Capacitación para el empleo de los métodos psicopedagógicos de la investigación educativa.",
        tag: "Investigación"
    },
    {
        id: 4,
        icon: <FileText className="h-6 w-6" />,
        title: "Metodología para Informes de Tesis",
        description: "Capacitación para el empleo de la metodología de la investigación para los informes de tesis.",
        tag: "Investigación"
    },
    {
        id: 5,
        icon: <Building2 className="h-6 w-6" />,
        title: "Organización Escolar Institucional",
        description: "Capacitación para realizar una correcta organización escolar de la institución educativa.",
        tag: "Gestión"
    },
    {
        id: 6,
        icon: <CalendarRange className="h-6 w-6" />,
        title: "Planificación de Actividades Institucionales",
        description: "Capacitación para la planificación de las actividades en los planes anuales, mensuales e individuales de las instituciones educativas.",
        tag: "Gestión"
    },
    {
        id: 7,
        icon: <SearchCheck className="h-6 w-6" />,
        title: "Auditorías Pedagógicas y Supervisiones",
        description: "Capacitación para la realización de auditorías pedagógicas y supervisiones de las instituciones educativas.",
        tag: "Calidad"
    },
    {
        id: 8,
        icon: <GraduationCap className="h-6 w-6" />,
        title: "Sistemas y Subsistemas de Clases",
        description: "Capacitación para la elaboración y planificación de los sistemas y subsistemas de clases de las asignaturas.",
        tag: "Didáctica"
    }
];

const tagColors = {
    "Evaluación": "bg-emerald-100 text-emerald-700",
    "Didáctica": "bg-blue-100 text-blue-700",
    "Investigación": "bg-purple-100 text-purple-700",
    "Gestión": "bg-amber-100 text-amber-700",
    "Calidad": "bg-rose-100 text-rose-700"
};

export default function CoursesSection() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section id="cursos" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Catálogo de Cursos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-display">
                        Cursos Disponibles
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
                        Programas de capacitación diseñados con rigor pedagógico y orientados a resultados concretos en su institución.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col group cursor-pointer"
                            onMouseEnter={() => setHoveredId(course.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Tag */}
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-4 ${tagColors[course.tag]}`}>
                                {course.tag}
                            </span>

                            {/* Icon */}
                            <div className={`p-3 rounded-lg inline-flex self-start mb-4 transition-colors duration-300 ${hoveredId === course.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-100 text-blue-700'
                                }`}>
                                {course.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight group-hover:text-blue-800 transition-colors">
                                {course.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed flex-grow">
                                {course.description}
                            </p>

                            {/* CTA */}
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <a href="#contacto" className="text-sm font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center group/link">
                                    Solicitar información
                                    <ChevronRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
