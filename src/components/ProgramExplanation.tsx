import React, { useState } from 'react';
import { Network, Home, Boxes, Milestone, ShieldCheck, Activity } from 'lucide-react';
import clsx from 'clsx';

const concepts = [
  {
    id: 'modelo',
    title: 'El Modelo Autogestivo',
    icon: <Network size={28} />,
    color: 'text-acento border-acento',
    bg: 'bg-blue-500/10',
    content: (
      <div className="space-y-4">
        <p className="text-xl font-light leading-relaxed">
          Un paradigma transformador donde la comunidad pasa de ser un receptor pasivo a un **ejecutor directo**.
        </p>
        <p className="text-white/70">
          A través de Organizaciones Populares de Vivienda (OPV) y asociaciones comunitarias, los propios hogares administran los recursos del subsidio y ejecutan las obras de sus viviendas.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-4">
          <h4 className="font-bold text-acento mb-2 flex items-center gap-2"><Activity size={16}/> Impacto Directo</h4>
          <p className="text-sm text-white/60">Reduce costos de intermediación, fomenta el arraigo territorial, la cohesión social y la apropiación del hábitat construido.</p>
        </div>
      </div>
    )
  },
  {
    id: 'modalidades',
    title: 'Modalidades de Intervención',
    icon: <Home size={28} />,
    color: 'text-emerald-400 border-emerald-400',
    bg: 'bg-emerald-500/10',
    content: (
      <div className="space-y-4">
        <p className="text-xl font-light leading-relaxed">
          El programa reconoce las capacidades de la comunidad y ofrece dos modalidades para la ejecución de la obra:
        </p>
        <ul className="space-y-4 mt-4">
          <li className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h4 className="font-bold text-emerald-400">1. Construcción Delegada</h4>
            <p className="text-sm text-white/70 mt-1">La OPV, actuando como gerente del proyecto, contrata a un tercero idóneo (constructor, contratista) para que ejecute la obra, manteniendo el control, los pagos y la supervisión de los recursos.</p>
          </li>
          <li className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h4 className="font-bold text-emerald-400">2. Autoconstrucción</h4>
            <p className="text-sm text-white/70 mt-1">La OPV y sus miembros ejecutan directamente la obra de sus viviendas mediante esquemas de autoconstrucción o ayuda mutua, siempre bajo un riguroso acompañamiento técnico.</p>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'componentes',
    title: 'Los 3 Componentes',
    icon: <Boxes size={28} />,
    color: 'text-amber-400 border-amber-400',
    bg: 'bg-amber-500/10',
    content: (
      <div className="space-y-4">
        <p className="text-xl font-light leading-relaxed">
          La viabilidad del proyecto se evalúa a través de tres componentes integrales, con un peso específico para su aprobación:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white/5 p-4 rounded-xl border-t-2 border-amber-400 relative overflow-hidden">
            <span className="absolute top-2 right-3 font-mono text-amber-400/20 font-bold text-4xl">30%</span>
            <h4 className="font-bold text-white mb-2 relative z-10">Social</h4>
            <p className="text-xs text-white/60 relative z-10">Fortalecimiento organizativo, empoderamiento comunitario y veeduría.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border-t-2 border-amber-400 relative overflow-hidden">
            <span className="absolute top-2 right-3 font-mono text-amber-400/20 font-bold text-4xl">40%</span>
            <h4 className="font-bold text-white mb-2 relative z-10">Técnico</h4>
            <p className="text-xs text-white/60 relative z-10">Diseños arquitectónicos y cumplimiento estricto de norma sismo-resistente (NSR-10).</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border-t-2 border-amber-400 relative overflow-hidden">
            <span className="absolute top-2 right-3 font-mono text-amber-400/20 font-bold text-4xl">30%</span>
            <h4 className="font-bold text-white mb-2 relative z-10">Financiero</h4>
            <p className="text-xs text-white/60 relative z-10">Manejo de fiducias, presupuestos transparentes y esquema de flujos.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'fases',
    title: 'Fases del Desarrollo',
    icon: <Milestone size={28} />,
    color: 'text-purple-400 border-purple-400',
    bg: 'bg-purple-500/10',
    content: (
      <div className="space-y-4">
        <p className="text-xl font-light leading-relaxed mb-6">
          Un proceso estructurado según el Manual Operativo para asegurar la entrega efectiva:
        </p>
        <div className="relative border-l-2 border-white/20 ml-3 space-y-6">
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_#c084fc]"></div>
            <h4 className="font-bold text-white">1. Habilitación</h4>
            <p className="text-sm text-white/60">Saneamiento predial, viabilidad del lote y consolidación de la Organización Popular de Vivienda (OPV).</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-white/40 rounded-full -left-[7px] top-1.5"></div>
            <h4 className="font-bold text-white">2. Preconstrucción</h4>
            <p className="text-sm text-white/60">Elaboración de diseños, obtención de licencias de construcción, presupuestación y firma de encargos fiduciarios.</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-white/40 rounded-full -left-[7px] top-1.5"></div>
            <h4 className="font-bold text-white">3. Construcción</h4>
            <p className="text-sm text-white/60">Ejecución de obra (mediante construcción delegada o autoconstrucción) bajo estricta supervisión técnica y social.</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-white/40 rounded-full -left-[7px] top-1.5"></div>
            <h4 className="font-bold text-white">4. Legalización y Cierre</h4>
            <p className="text-sm text-white/60">Recepción de viviendas, escrituración y liquidación técnica-financiera.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'acompanamiento',
    title: 'Acompañamiento Institucional',
    icon: <ShieldCheck size={28} />,
    color: 'text-rose-400 border-rose-400',
    bg: 'bg-rose-500/10',
    content: (
      <div className="space-y-4">
        <p className="text-xl font-light leading-relaxed">
          La autogestión no significa "hacerlo solos". Es un esfuerzo mancomunado apoyado por el Estado.
        </p>
        <div className="bg-white/5 border border-rose-400/30 rounded-2xl p-6 mt-4">
          <ShieldCheck size={40} className="text-rose-400 mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">Asistencia Técnica Integral</h4>
          <p className="text-white/70 text-sm">
            Las Entidades Promotoras, Fonvivienda y profesionales expertos brindan asistencia continua a las OPV en todas las fases. Desde la concepción de los planos hasta la última piedra, se garantiza que la obra cumpla las normativas y resulte en viviendas dignas, seguras y legalizadas.
          </p>
        </div>
      </div>
    )
  }
];

const ProgramExplanation = () => {
  const [activeConcept, setActiveConcept] = useState(concepts[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = (concept: any) => {
    if (concept.id === activeConcept.id) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveConcept(concept);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="programa" className="bg-principal w-full py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-acento uppercase tracking-widest mb-4">Arquitectura del Programa</h2>
          <h3 className="text-4xl md:text-6xl font-sans font-bold text-white leading-tight">
            ¿Qué es la <span className="font-serif italic text-white/80">Autogestión?</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[500px]">
          
          {/* Menú Lateral */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {concepts.map((concept) => {
              const isActive = activeConcept.id === concept.id;
              return (
                <button
                  key={concept.id}
                  onClick={() => handleSelect(concept)}
                  className={clsx(
                    "p-5 rounded-2xl text-left transition-all duration-300 border",
                    isActive 
                      ? `${concept.bg} ${concept.color} scale-[1.02] shadow-lg` 
                      : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={isActive ? concept.color.split(' ')[0] : 'text-white/40'}>
                      {concept.icon}
                    </div>
                    <span className="font-bold text-lg">{concept.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Panel de Contenido */}
          <div className="lg:col-span-8 glass-dark rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
            
            {/* Background Icon Watermark */}
            <div className={clsx(
              "absolute -bottom-10 -right-10 opacity-10 transform scale-[3] transition-all duration-700 ease-in-out",
              activeConcept.color.split(' ')[0],
              isAnimating ? "scale-[2] opacity-0" : "scale-[3] opacity-10"
            )}>
              {activeConcept.icon}
            </div>

            <div className={clsx(
              "relative z-10 transition-all duration-300",
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}>
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-sm uppercase tracking-widest text-white/40">Sección /</span>
                <span className={clsx("font-mono text-sm uppercase font-bold", activeConcept.color.split(' ')[0])}>
                  {activeConcept.title}
                </span>
              </div>
              
              <h4 className="text-3xl md:text-4xl font-sans font-bold text-white mb-8">
                {activeConcept.title}
              </h4>
              
              <div className="text-white/90">
                {activeConcept.content}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramExplanation;
