'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300",
        scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="text-cyan-400 text-xl font-bold tracking-widest uppercase cursor-pointer relative z-50">
        Innoverse
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-cyan-400/70 text-sm font-medium tracking-wider uppercase">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#members" className="hover:text-cyan-400 transition-colors">Members</a>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-cyan-400 relative z-50 p-2 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-12 transition-all duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <a 
          href="#about" 
          className="text-cyan-400 text-3xl font-medium tracking-widest uppercase transition-transform hover:scale-110"
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </a>
        <a 
          href="#projects" 
          className="text-cyan-400 text-3xl font-medium tracking-widest uppercase transition-transform hover:scale-110"
          onClick={() => setMobileMenuOpen(false)}
        >
          Projects
        </a>
        <a 
          href="#members" 
          className="text-cyan-400 text-3xl font-medium tracking-widest uppercase transition-transform hover:scale-110"
          onClick={() => setMobileMenuOpen(false)}
        >
          Members
        </a>
      </div>
    </nav>
  );
}
