import React, { useState, useEffect } from 'react';
import { Users, Building2, HardHat, Link } from 'lucide-react';
import clsx from 'clsx';

const roles = [
  {
    id: 'comunidad',
    title: 'Comunidad / OPV',
    icon: <Users size={32} />,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    desc: 'El corazón del programa. Se organizan, priorizan sus necesidades y administran activamente los recursos. No son receptores pasivos, son gestores de su hábitat.'
  },
  {
    id: 'ministerio',
    title: 'MinVivienda / Fonvivienda',
    icon: <Building2 size={32} />,
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    desc: 'Diseñan la política pública, aportan los subsidios financieros y establecen los lineamientos del Manual Operativo para garantizar transparencia.'
  },
  {
    id: 'asistencia',
    title: 'Asistencia Técnica Integral',
    icon: <HardHat size={32} />,
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    desc: 'Profesionales (arquitectos, ingenieros, trabajadores sociales) que guían a la OPV, asegurando que las viviendas sean seguras y cumplan la norma sismo-resistente (NSR-10).'
  }
];

const RolesDashboard = () => {
  const [activeRole, setActiveRole] = useState(roles[0]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = roles.findIndex(r => r.id === activeRole.id);
      const nextIndex = (currentIndex + 1) % roles.length;
      setActiveRole(roles[nextIndex]);
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeRole]);

  return (
    <section className="bg-principal py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-acento uppercase tracking-widest mb-4">Roles y Responsabilidades</h2>
          <h3 className="text-4xl md:text-6xl font-sans font-bold text-white leading-tight">
            Ecosistema de <span className="font-serif italic text-white/80">Colaboración</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Clasificador Interactivo */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={clsx(
                  "p-4 md:p-6 text-left rounded-2xl md:rounded-3xl border transition-all duration-300",
                  activeRole.id === role.id 
                    ? `${role.color} scale-[1.02] shadow-lg` 
                    : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                )}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="md:scale-100 scale-75">{role.icon}</div>
                  <span className="font-bold text-base md:text-lg">{role.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Interacción Feed en vivo */}
          <div className="lg:col-span-2 glass-dark rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
              <Link size={120} className="text-white" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acento opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-acento"></span>
                  </span>
                  <span className="font-mono text-sm text-acento uppercase">Interacción en vivo</span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4 md:mb-6">
                  {activeRole.title}
                </h4>
                
                <p className={clsx(
                  "text-lg md:text-xl text-white/80 leading-relaxed font-light transition-opacity duration-300",
                  isTyping ? "opacity-0" : "opacity-100"
                )}>
                  {activeRole.desc}
                </p>
              </div>

              <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 font-mono text-sm text-white/60">
                <p className="mb-2 text-acento">// Cómo interactúan:</p>
                <p>El <span className="text-blue-400">Ministerio</span> transfiere los fondos a la fiducia.</p>
                <p>La <span className="text-emerald-400">OPV</span> toma las decisiones y autoriza giros.</p>
                <p>La <span className="text-amber-400">Asistencia Técnica</span> avala cada avance de obra.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RolesDashboard;
