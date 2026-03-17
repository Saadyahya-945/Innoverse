import { useEffect, useState } from 'react';

export function useImagePreloader(heroUrls: string[], morphUrls: string[]) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [heroImages, setHeroImages] = useState<HTMLImageElement[]>([]);
  const [morphImages, setMorphImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let heroLoadedCount = 0;
    let morphStarted = false;
    
    // We maintain separate arrays for hero and morph sequences
    const loadedHeroImages: HTMLImageElement[] = new Array(heroUrls.length);
    const loadedMorphImages: HTMLImageElement[] = new Array(morphUrls?.length || 0);

    if (!heroUrls || heroUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    const loadMorphImages = () => {
      if (!morphUrls || morphUrls.length === 0) return;
      morphUrls.forEach((url, i) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          if (!isMounted) return;
          loadedMorphImages[i] = img;
          setMorphImages([...loadedMorphImages]); // Trigger re-render so player gets new frames
        };
        img.onerror = () => {
          if (!isMounted) return;
          console.error(`Failed to load image: ${url}`);
        };
      });
    };

    const loadHeroImages = () => {
      heroUrls.forEach((url, i) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          if (!isMounted) return;
          heroLoadedCount++;
          loadedHeroImages[i] = img;
          
          setProgress(Math.round((heroLoadedCount / heroUrls.length) * 100));
          
          // Start loading morph sequences once hero is 50% cached
          if (heroLoadedCount >= Math.floor(heroUrls.length / 2) && !morphStarted) {
            morphStarted = true;
            loadMorphImages();
          }

          if (heroLoadedCount === heroUrls.length) {
            setHeroImages([...loadedHeroImages]);
            setImagesLoaded(true); // Hero is fully loaded, safe to hide intro loading screen
          }
        };
        img.onerror = () => {
          if (!isMounted) return;
          heroLoadedCount++;
          console.error(`Failed to load image: ${url}`);
          if (heroLoadedCount === heroUrls.length) {
            setHeroImages([...loadedHeroImages]);
            setImagesLoaded(true);
          }
        };
      });
    };

    loadHeroImages();

    return () => {
      isMounted = false;
    };
  }, [heroUrls, morphUrls]);

  return { imagesLoaded, progress, heroImages, morphImages };
}
