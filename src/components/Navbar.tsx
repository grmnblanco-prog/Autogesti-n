import React, { useEffect, useState } from 'react';
import { Home } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out px-8 py-4 rounded-full flex items-center gap-6 ${
      scrolled ? 'glass' : 'bg-transparent text-white'
    }`}>
      <img src="/logo.png" alt="MinVivienda" className="h-14 md:h-16 bg-white/90 px-4 py-2 rounded-xl shadow-sm object-contain" />
    </nav>
  );
};

export default Navbar;
