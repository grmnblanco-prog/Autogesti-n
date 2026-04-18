import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-principal text-white pt-20 pb-10 px-6 rounded-t-[4rem] relative mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-serif italic mb-6">Autogestión Nueva Urbana</h2>
          <p className="text-white/60 font-light max-w-sm mb-8">
            Empoderando a las comunidades para construir un futuro sólido, hogar por hogar.
          </p>
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-sm text-emerald-400">Plataforma PAVIS Activa</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Manual Operativo Ordinario</li>
              <li className="hover:text-white cursor-pointer transition-colors">Manual de Excepción</li>
              <li className="hover:text-white cursor-pointer transition-colors">Resoluciones</li>
              <li className="hover:text-white cursor-pointer transition-colors">Preguntas Frecuentes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>Ministerio de Vivienda</li>
              <li>Soporte PAVIS</li>
              <li>Línea Nacional</li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 font-mono">
        <p>© 2026 Programa de Autogestión de Vivienda. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0">Basado en radicado 2026ER0026461</p>
      </div>
    </footer>
  );
};

export default Footer;
