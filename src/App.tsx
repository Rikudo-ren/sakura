import React, { useState, useEffect } from 'react';
import TitleScreen from './components/TitleScreen';
import Preloader from './components/Preloader';
import NovelEngine from './components/NovelEngine';
import { audio } from './utils/audio';

export default function App() {
  const [gameState, setGameState] = useState<'title' | 'preload' | 'novel'>('title');
  const [startSceneId, setStartSceneId] = useState('prologue_001');
  const [pendingSceneId, setPendingSceneId] = useState('prologue_001');
  const [unlockedFlags, setUnlockedFlags] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Read unlocked flags from localStorage for early loading
    const storedFlags = localStorage.getItem('schrodinger_unlocked_flags');
    if (storedFlags) {
      try {
        setUnlockedFlags(JSON.parse(storedFlags));
      } catch (e) {}
    }

    // Set standard volumes from local persistence if existing
    const storedMuted = localStorage.getItem('schrodinger_is_muted') === 'true';
    const storedVol = localStorage.getItem('schrodinger_bgm_vol');
    audio.setMute(storedMuted);
    if (storedVol) {
      audio.setVolume(parseFloat(storedVol));
    }
  }, []);

  const handleStartGame = (sceneId: string) => {
    setPendingSceneId(sceneId);
    setGameState('preload');
  };

  const handlePreloadComplete = () => {
    setStartSceneId(pendingSceneId);
    setGameState('novel');
  };

  const handleGoToTitle = () => {
    // Re-trigger Title loops
    audio.stopBGM();
    audio.playBGM('title');
    setGameState('title');
  };

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 
        This keeps the game responsive in 16:9 ratio, similar to classic visual novels,
        scaling it fluidly up to desktop/tablet maximum layouts.
      */}
      <div className="w-full h-full max-w-[1280px] max-h-[720px] aspect-video relative overflow-hidden shadow-2xl border border-white/5 rounded-none md:rounded-lg">
        {gameState === 'title' ? (
          <TitleScreen onStartGame={handleStartGame} />
        ) : gameState === 'preload' ? (
          <Preloader onComplete={handlePreloadComplete} />
        ) : (
          <NovelEngine
            initialSceneId={startSceneId}
            onGoToTitle={handleGoToTitle}
            unlockedFlags={unlockedFlags}
          />
        )}
      </div>
    </div>
  );
}
