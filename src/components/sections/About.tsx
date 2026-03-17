'use client';

import React from 'react';
import ContentOverlay from './ContentOverlay';

export default function About() {
  return (
    <div id="about" className="h-screen w-full flex items-center justify-center">
      <ContentOverlay
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 1, ease: 'easeOut' }}
        align="center"
        className="max-w-4xl"
      >
        <span className="text-cyan-400/60 uppercase tracking-widest text-sm mb-4">Discover the Infinite</span>
        <h2 className="text-4xl md:text-6xl font-light text-cyan-400 mb-6 leading-tight">
          Welcome to the <span className="font-bold">Innoverse</span>. Where ideas take physical form and evolution is a constant.
        </h2>
        <p className="text-lg text-cyan-400/70 max-w-2xl font-light leading-relaxed">
          Embark on a journey through our digital realm. A place built by visionaries, tailored for creators, designed to break boundaries. We are not just a platform; we are an ecosystem of continuous innovation.
        </p>
      </ContentOverlay>
    </div>
  );
}
