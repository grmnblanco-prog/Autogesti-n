import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MonitorPlay, Calendar, ArrowRightCircle } from 'lucide-react';
import pavisScreenshot from '../assets/pavis-screenshot.png';

gsap.registerPlugin(ScrollTrigger);

const NextSteps = () => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.step-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="bg-fondo py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-acento uppercase tracking-widest mb-4">Siguientes Pasos</h2>
          <h3 className="text-3xl md:text-6xl font-sans font-bold text-principal leading-tight">
            El camino hacia la <span className="font-serif italic text-acento">Implementación</span>
          </h3>
          <p className="mt-4 md:mt-6 text-slate-500 font-mono text-xs md:text-sm max-w-2xl mx-auto px-4">
            Basado en los lineamientos del Derecho de Petición 2026ER0026461
          </p>
        </div>

        {/* PAVIS Screenshot Section */}
        <div className="step-card w-full mb-12 md:mb-16 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative border-4 border-white">
          <div className="absolute inset-0 bg-gradient-to-t from-principal/90 via-transparent to-transparent z-10 flex items-end p-6 md:p-12">
            <div>
              <span className="bg-acento text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 inline-block">Plataforma Oficial</span>
              <h4 className="text-2xl md:text-4xl font-bold text-white mb-2">Sistema PAVIS</h4>
              <p className="text-white/80 text-sm md:text-base max-w-2xl">La puerta de entrada al programa. Aquí se registran las iniciativas, se validan las OPV y se da seguimiento en tiempo real a cada proyecto de autogestión.</p>
            </div>
          </div>
          {/* Instrucción: Para ver la imagen real de PAVIS, asegúrate de guardar la captura que me enviaste como 'pavis-screenshot.png' en la carpeta public del proyecto */}
          <img 
            src={pavisScreenshot} 
            alt="Plataforma PAVIS" 
            onError={(e) => {
              // Fallback if local image is not present
              e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop";
            }}
            className="w-full h-[300px] md:h-[600px] object-cover object-top" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Card 1 */}
          <div className="step-card bg-principal text-white p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] relative shadow-2xl z-10">
            <Calendar size={32} className="text-acento mb-6 md:hidden" />
            <Calendar size={40} className="text-acento mb-6 hidden md:block" />
            <h4 className="text-xl md:text-2xl font-bold mb-4">Cronograma 2026</h4>
            <p className="text-white/80 leading-relaxed mb-6">
              La convocatoria inicial se abrirá según los plazos establecidos. Las OPV deben tener listos sus 
              estudios preliminares y la acreditación de la propiedad del predio.
            </p>
            <ul className="text-white/60 font-mono text-sm space-y-4">
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-acento"></div> Apertura:</span> 
                <span className="text-acento font-bold bg-acento/10 px-3 py-1 rounded-full">Próximamente</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div> Revisión Técnica:</span> 
                <span>30 días hábiles</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="step-card glass p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-principal transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="text-principal opacity-10 absolute -top-4 -right-4 font-mono text-7xl md:text-9xl font-bold pointer-events-none">03</div>
            
            <MonitorPlay size={32} className="text-principal mb-6 md:hidden" />
            <MonitorPlay size={40} className="text-principal mb-6 hidden md:block" />
            <h4 className="text-xl md:text-2xl font-bold text-principal mb-4">Acompañamiento Incial</h4>
            <p className="text-slate-600 leading-relaxed mb-8">
              Solicite la revisión de viabilidad. Un equipo técnico asignado evaluará las condiciones de riesgo del lote 
              y la viabilidad jurídica antes de la formulación definitiva del proyecto en el sistema.
            </p>
            
            <button className="text-principal font-bold flex items-center gap-2 hover:gap-4 transition-all bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg">
              Solicitar Revisión <ArrowRightCircle size={18} className="text-acento" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NextSteps;
