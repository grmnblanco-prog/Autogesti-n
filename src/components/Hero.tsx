import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import logoMinvivienda from '../assets/logo.png';
import iconoAutogestion from '../assets/alcancia.png';

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-[100dvh] flex flex-col justify-center px-6 md:px-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2600&auto=format&fit=crop")' }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-principal via-principal/90 to-principal/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-principal via-transparent to-transparent" />

      {/* Logo Minvivienda en Portada */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-full">
        <img src={logoMinvivienda} alt="MinVivienda" className="h-14 md:h-16 bg-white/90 px-4 py-2 rounded-xl shadow-sm object-contain" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-white mt-24 md:mt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="hero-elem font-mono text-acento mb-2 tracking-widest uppercase text-xs md:text-sm">
              // Programa Nacional
            </p>
            <h1 className="hero-elem text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight mb-2">
              Autogestión de Vivienda
            </h1>
            <h2 className="hero-elem text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif italic text-white/80 mb-6">
              Nueva Urbana.
            </h2>
            
            <p className="hero-elem text-base md:text-lg text-white/70 max-w-xl font-light">
              Empoderando a las comunidades y a las Organizaciones Populares de Vivienda (OPV) 
              para la gestión y construcción de sus propios hogares con acompañamiento institucional.
            </p>
          </div>
          
          <div className="hero-elem lg:col-span-5 flex flex-col items-center justify-center gap-8 mt-12 lg:mt-24 relative">
             {/* Glow de fondo para hacerla resaltar más */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
             
             <img 
               src={iconoAutogestion} 
               alt="Programa Autogestión" 
               className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] transform hover:scale-105 transition-transform duration-500 relative z-10" 
               onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop"; }} 
             />
             
             <button 
              onClick={() => document.getElementById('programa')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden rounded-full bg-white text-principal px-8 py-4 md:px-10 md:py-5 font-bold hover:scale-105 transition-transform duration-300 w-full max-w-[280px] md:max-w-[300px] text-center flex justify-center shadow-2xl z-10 text-base md:text-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explorar el Modelo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-slate-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
