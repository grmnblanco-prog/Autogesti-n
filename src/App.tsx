import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramExplanation from './components/ProgramExplanation';
import ManualOperativo from './components/ManualOperativo';
import RolesDashboard from './components/RolesDashboard';
import NextSteps from './components/NextSteps';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // General animations or smooth scrolling setups can go here
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="bg-fondo text-texto font-sans overflow-hidden">
      <Navbar />
      <Hero />
      <ProgramExplanation />
      <ManualOperativo />
      <RolesDashboard />
      <NextSteps />
      <Footer />
    </div>
  );
}

export default App;
