'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        "fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 transition-colors duration-300",
        scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="text-cyan-400 text-xl font-bold tracking-widest uppercase cursor-pointer">
        Innoverse
      </div>
      <div className="hidden md:flex gap-8 text-cyan-400/70 text-sm font-medium tracking-wider uppercase">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#members" className="hover:text-cyan-400 transition-colors">Members</a>
      </div>
    </nav>
  );
}
