import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import { ReactLenis } from '../components/LenisProvider';

const archivo = Archivo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Innoverse | Cinematic Web Experience',
  description: 'The Intersection of Art & Code. A collective of visionaries building the next generation of digital artifacts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased bg-[#050505] text-cyan-400 selection:bg-cyan-400/20`}>
        {/* Grain Overlay */}
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-50 mix-blend-overlay">
          <svg className="h-full w-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
        
        {/* Radial Gradient Vignette */}
        <div className="pointer-events-none fixed inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80" />

        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
