import React, { useEffect, useState } from 'react';
import { BACKGROUNDS, CHARACTERS } from '../data/scenario';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Collect all background and character sprite resources
    const imagesToLoad: string[] = [];

    // 1. Gather backgrounds
    Object.values(BACKGROUNDS).forEach(url => {
      if (url) imagesToLoad.push(url);
    });

    // 2. Gather character sprite assets and expression overrides
    Object.values(CHARACTERS).forEach(config => {
      if (config.image) imagesToLoad.push(config.image);
      if (config.expressions) {
        Object.values(config.expressions).forEach(url => {
          if (url) imagesToLoad.push(url);
        });
      }
    });

    // Clean duplicates
    const uniqueImages = Array.from(new Set(imagesToLoad));
    const total = uniqueImages.length;
    let loadedCount = 0;

    if (total === 0) {
      setProgress(100);
      setIsDone(true);
      return;
    }

    const getAssetUrl = (url: string) => {
      if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
        return url;
      }
      const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
      const baseUrl = (import.meta as any).env?.BASE_URL || '/';
      const endsWithSlash = baseUrl.endsWith('/');
      return `${baseUrl}${endsWithSlash ? '' : '/'}${cleanUrl}`;
    };

    let active = true;

    const loadImages = async () => {
      // Load sequentially or in small chunks so we can see the filenames and smooth progress bar increments
      for (const src of uniqueImages) {
        if (!active) return;
        
        const fileName = src.split('/').pop() || src;
        setCurrentFile(fileName);

        await new Promise<void>((resolve) => {
          const img = new Image();
          img.src = getAssetUrl(src);
          img.onload = () => {
            loadedCount++;
            if (active) {
              setProgress(Math.round((loadedCount / total) * 100));
            }
            // Add a very small deliberate frame delay to prevent instant desktop flicker and allow the gorgeous loader UI to breathe
            setTimeout(resolve, 60);
          };
          img.onerror = () => {
            loadedCount++;
            console.warn(`Failed to preload image: ${src}`);
            if (active) {
              setProgress(Math.round((loadedCount / total) * 100));
            }
            setTimeout(resolve, 60);
          };
        });
      }

      if (active) {
        setProgress(100);
        setIsDone(true);
      }
    };

    loadImages();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div 
      className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center p-6 z-50 select-none animate-fade-in"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(15,23,42,0.95) 0%, rgba(9,9,11,1) 100%)`
      }}
    >
      {/* Visual cyber scanner backdrop grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-45" />

      <div className="z-10 w-full max-w-sm flex flex-col items-center">
        {/* Glowing holographic loader icon */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-purple-500/10 border-t-purple-400 animate-spin" />
          <span className="absolute text-purple-300 text-[10px] font-mono font-bold tracking-widest animate-pulse">
            ✝
          </span>
        </div>

        {/* Quantized Synchonization percentage label */}
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-xs font-mono font-black tracking-[0.3em] text-zinc-400 uppercase">
            Quantizing Wavefunction
          </h2>
          <p className="text-2xl font-mono font-extrabold tracking-widest text-white">
            {progress}%
          </p>
        </div>

        {/* Outer and internal progress container */}
        <div className="w-full h-[6px] bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden p-0.5 mb-4 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Debug filename streamer */}
        <div className="w-full text-center h-4 overflow-hidden">
          <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest truncate">
            {isDone ? "Coherence status: Stable" : `Syncing: public/images/${currentFile}`}
          </p>
        </div>

        {/* Confirmation Button for game transition */}
        <div className="mt-8 h-10 flex items-center justify-center w-full">
          {isDone ? (
            <button
              onClick={onComplete}
              className="px-8 py-2.5 bg-white text-black font-semibold tracking-[0.35em] text-[10px] uppercase rounded-lg border border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-xl shadow-purple-950/20 active:scale-95 cursor-pointer animate-bounce"
            >
              観測を開始する
            </button>
          ) : (
            <span className="text-[9px] font-mono tracking-widest text-zinc-600 animate-pulse uppercase">
              Initializing sensory state...
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
