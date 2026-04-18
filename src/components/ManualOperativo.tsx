import React, { useState } from 'react';
import { FileText, Zap, Clock, GitMerge, FileCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const slides = [
  {
    id: 1,
    icon: <FileText className="w-8 h-8" />,
    title: "1. Enfoque y Propósito",
    ord: "Aplicación general para la mayoría de los proyectos de Autogestión. Establece los lineamientos estructurales a largo plazo.",
    exc: "Diseñado para situaciones de emergencia (ej. reasentamientos urgentes, desastres). Prioriza la agilidad sobre la tramitología."
  },
  {
    id: 2,
    icon: <Clock className="w-8 h-8" />,
    title: "2. Flujo del Proceso (Ordinario)",
    ord: "1. Postulación en PAVIS\n2. Verificación de requisitos (30 días)\n3. Conformación de la OPV\n4. Asignación de recursos\n5. Ejecución estándar",
    exc: "No aplica el proceso estándar. Salta pasos administrativos previos para garantizar atención inmediata."
  },
  {
    id: 3,
    icon: <Zap className="w-8 h-8" />,
    title: "3. Flujo del Proceso (Excepción)",
    ord: "Sigue la línea regular de planeación y presupuestación anual del Ministerio.",
    exc: "1. Declaratoria de urgencia\n2. Asignación directa de recursos a fiducia/encargo\n3. Construcción acelerada\n4. Legalización a posteriori"
  },
  {
    id: 4,
    icon: <FileCheck className="w-8 h-8" />,
    title: "4. Diferencias Claves",
    ord: "Tiempos de estructuración más largos (meses). Exigencia de licencias y diseños aprobados ANTES de los desembolsos.",
    exc: "Desembolsos condicionados a hitos rápidos. Permite iniciar obras preliminares mientras se consolidan los trámites de licencias."
  },
  {
    id: 5,
    icon: <GitMerge className="w-8 h-8" />,
    title: "5. Complementariedad",
    ord: "Base normativa que rige el 90% de los proyectos, asegurando estabilidad y rigor técnico.",
    exc: "Mecanismo de 'válvula de escape' que se activa bajo el mismo paraguas legal cuando la realidad sobrepasa los tiempos ordinarios."
  }
];

const ManualOperativo = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-fondo text-texto min-h-screen flex flex-col justify-center py-24 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-principal">
            Dos Manuales, <span className="font-serif italic text-acento">Un Mismo Fin</span>
          </h2>
          <p className="text-slate-500 mt-2 font-mono text-sm uppercase tracking-wider">
            Análisis Comparativo de los Manuales Operativos
          </p>
        </div>

        <div className="w-full relative min-h-[600px] md:min-h-[400px] flex items-center justify-center mt-4">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={clsx(
                "absolute inset-0 flex flex-col items-center justify-start transition-all duration-700 ease-in-out",
                activeSlide === index ? "opacity-100 translate-x-0 z-10 pointer-events-auto" : "opacity-0 translate-x-12 z-0 pointer-events-none"
              )}
            >
              <div className="flex items-center gap-4 mb-6 text-acento text-center md:text-left">
                <div className="hidden md:block">{slide.icon}</div>
                <h3 className="text-xl md:text-3xl font-bold">{slide.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Ordinario */}
                <div className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-t-4 border-t-principal flex flex-col h-full bg-white/80">
                  <h4 className="text-xs md:text-sm font-mono text-slate-500 uppercase tracking-widest mb-4">Manual Ordinario</h4>
                  <p className="text-base md:text-lg leading-relaxed whitespace-pre-line text-slate-700">
                    {slide.ord}
                  </p>
                </div>

                {/* Excepcion */}
                <div className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-t-4 border-t-acento flex flex-col h-full bg-blue-50/80">
                  <h4 className="text-xs md:text-sm font-mono text-acento uppercase tracking-widest mb-4">Manual de Excepción</h4>
                  <p className="text-base md:text-lg leading-relaxed whitespace-pre-line text-slate-700">
                    {slide.exc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-4 gap-6 relative z-20">
          <button 
            onClick={prevSlide}
            className="p-4 rounded-full bg-white text-principal shadow-lg hover:bg-principal hover:text-white transition-all transform hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setActiveSlide(i)}
                className={clsx(
                  "h-3 rounded-full transition-all duration-300 cursor-pointer", 
                  activeSlide === i ? "w-10 bg-acento" : "w-3 bg-slate-300 hover:bg-slate-400"
                )} 
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="p-4 rounded-full bg-white text-principal shadow-lg hover:bg-principal hover:text-white transition-all transform hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ManualOperativo;
