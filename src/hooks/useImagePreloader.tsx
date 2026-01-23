import { useState, useEffect } from 'react';

// Import images as ES6 modules for proper bundling
import heroCambodiaJungle from '@/assets/hero-cambodia-jungle.jpg';
import birdTourHero from '@/assets/bird-tour-hero.png';
import samnangGuidePortrait from '@/assets/samnang-guide-portrait.jpg';
import conservationCambodia from '@/assets/conservation-cambodia.jpg';
import giantIbisCambodia from '@/assets/giant-ibis-cambodia.jpg';
import newGuidePortrait from '@/assets/new-guide-portrait.jpg';

// Images critiques à charger en priorité (homepage hero et navigation)
const criticalImages = [
  heroCambodiaJungle,
  birdTourHero,
  samnangGuidePortrait
];

// Images secondaires (pages intérieures uniquement)
const secondaryImages = [
  conservationCambodia,
  giantIbisCambodia,
  newGuidePortrait,
  '/lovable-uploads/8407b453-6b75-479f-a6ee-acfad916d4bf.png',
  '/lovable-uploads/af1668b4-36c9-4f67-b5b8-7ac91dac500e.png'
];

// Note: Les images de galerie sont maintenant chargées avec lazy loading

export const useImagePreloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let loadedCount = 0;
    const allImages = [...criticalImages, ...secondaryImages];
    const totalImages = allImages.length;

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        
        // Optimisations de performance
        img.loading = 'eager';
        img.decoding = 'async';
        
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        
        img.onerror = () => {
          console.warn(`Failed to load image: ${src}`);
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve(); // Continue même en cas d'erreur
        };
        
        img.src = src;
      });
    };

    const loadImages = async () => {
      try {
        // Phase 1: Charger les images critiques en priorité
        console.log('Loading critical images...');
        await Promise.all(criticalImages.map(preloadImage));
        
        // Phase 2: Charger les images secondaires
        console.log('Loading secondary images...');
        const secondaryBatches = [];
        for (let i = 0; i < secondaryImages.length; i += 4) {
          const batch = secondaryImages.slice(i, i + 4);
          secondaryBatches.push(Promise.all(batch.map(preloadImage)));
        }
        await Promise.all(secondaryBatches);
        
        // Interface prête plus rapidement sans les images de galerie
        setTimeout(() => {
          setLoading(false);
        }, 200);
        
      } catch (err) {
        console.error('Error loading images:', err);
        setError('Error loading images');
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    loadImages();

  }, []);

  return { loading, progress, error };
};