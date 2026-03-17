import React from 'react';
import { getSequenceImages } from '../lib/getSequences';
import ScrollytellingWrapper from '../components/ScrollytellingWrapper';
import Navbar from '../components/ui/Navbar';

export default function Home() {
  const heroUrls = getSequenceImages('sequence-1');
  const morphUrls = [
    ...getSequenceImages('sequence-2'),
    ...getSequenceImages('sequence-3'),
    ...getSequenceImages('sequence-4'),
  ];

  return (
    <main className="relative min-h-screen bg-[#050505]">
      <Navbar />
      <ScrollytellingWrapper heroUrls={heroUrls} morphUrls={morphUrls} />
    </main>
  );
}
