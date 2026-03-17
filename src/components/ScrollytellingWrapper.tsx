'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
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

  // Calculate blur opacity based on text visibility in the morph section
  // - 0.0 to 0.1: fading in Philosophy
  // - 0.1 to 0.2: Philosophy visible
  // - 0.3 to 0.4: projects fading in
  // - 0.4 to 0.5: projects visible
  // - 0.6 to 0.8: members visible
  // - 0.8 to 1.0: footer visible
  // Essentially whenever there is text on screen we blur the background slightly so it's readable
  const blurOpacity = useTransform(
    morphProgress, 
    [0, 0.05, 0.25, 0.35,  0.4, 0.85, 0.9, 1.0], 
    [0, 1,    1,    0,     1,   1,    0,   1]
  );

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
        <div ref={morphContainerRef} className="relative z-10 w-full bg-[#050505]" style={{ height: '400vh' }}>
          
          <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
             <CanvasPlayer images={morphImages} progress={morphProgress} blurOpacity={blurOpacity} />
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
