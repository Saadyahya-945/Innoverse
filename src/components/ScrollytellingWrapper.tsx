'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import { useImagePreloader } from '../hooks/useImagePreloader';
import Loader from './ui/Loader';
import CanvasPlayer from './canvas/CanvasPlayer';

import HeroSection from './sections/HeroSection';
import PhilosophySection from './sections/PhilosophySection';
import MorphSection from './sections/MorphSection';

interface ScrollytellingWrapperProps {
  heroUrls: string[];
  morphUrls: string[];
}

export default function ScrollytellingWrapper({ heroUrls, morphUrls }: ScrollytellingWrapperProps) {
  const { imagesLoaded, progress, heroImages, morphImages } = useImagePreloader(heroUrls, morphUrls);
  const [mounted, setMounted] = useState(false);
  const morphContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: morphProgress } = useScroll({
    target: morphContainerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Loader progress={progress} />

      <div className={`transition-opacity duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Full flow: Sequence 1 is its own block (Hero), Sequence 2/3/4 is the rest of the page (Morph) */}
        <HeroSection images={heroImages} />
        
        {/* Scrollable Container for sequences 2, 3, 4 */}
        <div ref={morphContainerRef} className="relative z-10 w-full bg-[#050505]" style={{ height: '250vh' }}>
          
          <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
             <CanvasPlayer images={morphImages} progress={morphProgress} />
          </div>

          {/* Sections overlaying the morph canvas */}
          <div className="relative z-10 w-full mt-[-100vh]">
            <PhilosophySection progress={morphProgress} />
            <MorphSection progress={morphProgress} />
          </div>

        </div>
      </div>
    </>
  );
}
