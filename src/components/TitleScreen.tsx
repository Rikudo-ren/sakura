import React, { useEffect, useState } from 'react';
import { BACKGROUNDS } from '../data/scenario';
import SaveMenu from './SaveMenu';
import ConfigMenu from './ConfigMenu';
import Gallery from './Gallery';
import { audio } from '../utils/audio';

interface TitleScreenProps {
  onStartGame: (sceneId: string) => void;
}

export default function TitleScreen({ onStartGame }: TitleScreenProps) {
  const [unlockedEnds, setUnlockedEnds] = useState<string[]>([]);
  const [activeMenu, setActiveMenu] = useState<'none' | 'load' | 'config' | 'gallery'>('none');
  const [isInverting, setIsInverting] = useState(false);

  useEffect(() => {
    // Start Title BGM loops
    audio.playBGM('title');

    // Retrieve unlocked endings to check hidden unlock condition
    const stored = localStorage.getItem('schrodinger_unlocked_ends');
    if (stored) {
      try {
        setUnlockedEnds(JSON.parse(stored));
      } catch (e) {}
    }
  }, []);

  const allMainEndsCleared = ['END1', 'END2', 'END3', 'END4', 'END5'].every(id => unlockedEnds.includes(id));

  const triggerHiddenEnd = () => {
    audio.playSE('unlock');
    setIsInverting(true);
    
    // Inversion countdown effect
    setTimeout(() => {
      onStartGame('hidden_001');
    }, 500);
  };

  return (
    <div
      className={`
        w-full h-full relative flex flex-col items-center justify-between p-8 select-none bg-zinc-950 transition-all duration-500
        ${isInverting ? 'filter invert' : ''}
      `}
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%), url(${BACKGROUNDS.title_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Sparkles / Ambient elements */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />

      {/* 1. Header (School badge) */}
      <div className="z-10 text-center select-none font-mono tracking-widest text-[10px] text-zinc-400 mt-4 bg-black/60 px-5 py-1.5 border border-white/10 rounded-full backdrop-blur-md">
        ✝ 桐葉高校 ✝ 本質恋愛学研究センター (LAB-001)
      </div>

      {/* 2. Main Title Brand */}
      <div className="z-10 text-center flex flex-col items-center mt-12 sm:mt-16 select-none animate-fade-in">
        {/* Soft glowing cross symbol */}
        <div className="text-4xl text-purple-300 drop-shadow-[0_0_15px_rgba(168,137,255,0.8)] animate-pulse mb-6">
          ✝
        </div>

        {/* Japanese serif title design */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.25em] text-white select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          シュレディンガーの恋
        </h1>
        
        <p className="text-zinc-300 text-xs sm:text-sm tracking-[0.45em] uppercase font-mono mt-4 opacity-80 pl-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          —— 観測されなかった波動関数 ——
        </p>
      </div>

      {/* 3. Action Menu Options */}
      <div className="z-10 flex flex-col gap-3.5 w-full max-w-xs mb-10 select-none animate-fade-in-up">
        {/* HIDDEN SECRET GATE */}
        {allMainEndsCleared && (
          <button
            onClick={triggerHiddenEnd}
            className="w-full bg-gradient-to-r from-purple-950/60 to-indigo-950/60 hover:from-purple-500/20 hover:to-indigo-500/20 text-yellow-300 border border-yellow-500/40 hover:border-yellow-400/80 py-3 rounded-xl text-xs font-semibold tracking-[0.2em] shadow-lg shadow-purple-950/20 backdrop-blur cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <span>✝</span> HIDDEN: 地面は、忘れない <span>✝</span>
          </button>
        )}

        <button
          onClick={() => {
            audio.playSE('decision');
            onStartGame('prologue_001');
          }}
          className="w-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/25 py-3 rounded-xl text-xs font-semibold tracking-[0.2em] shadow-md backdrop-blur cursor-pointer transition-all duration-300 hover:scale-[1.01]"
        >
          はじめから
        </button>

        <button
          onClick={() => {
            audio.playSE('click');
            setActiveMenu('load');
          }}
          className="w-full bg-black/60 hover:bg-zinc-900/60 border border-white/10 hover:border-white/20 py-3 rounded-xl text-xs font-medium tracking-[0.2em] text-zinc-300 hover:text-white backdrop-blur cursor-pointer transition-all duration-300"
        >
          続きから
        </button>

        <button
          onClick={() => {
            audio.playSE('click');
            setActiveMenu('gallery');
          }}
          className="w-full bg-black/60 hover:bg-zinc-900/60 border border-white/10 hover:border-white/20 py-3 rounded-xl text-xs font-medium tracking-[0.2em] text-zinc-300 hover:text-white backdrop-blur cursor-pointer transition-all duration-300"
        >
          ギャラリー＆アーカイブ
        </button>

        <button
          onClick={() => {
            audio.playSE('click');
            setActiveMenu('config');
          }}
          className="w-full bg-black/60 hover:bg-zinc-900/60 border border-white/10 hover:border-white/20 py-3 rounded-xl text-xs font-medium tracking-[0.2em] text-zinc-300 hover:text-white backdrop-blur cursor-pointer transition-all duration-300"
        >
          環境設定
        </button>
      </div>

      {/* 4. Small copyright pedastal */}
      <div className="z-10 font-mono text-[9px] text-zinc-500 tracking-widest opacity-40 select-none pb-2 text-center pointer-events-none">
        © 2026 KIRIOKA HIGH SCHOOL PHYSICS CLUB // COZY SYNTH SYSTEMS
      </div>

      {/* 5. Modals portals */}
      {activeMenu === 'load' && (
        <SaveMenu
          mode="load"
          currentSceneId="prologue_001"
          currentFlags={{
            ran_koukan: 0,
            riron_izon: 0,
            mimine_flag: 0,
            honsitsu_index: 0,
            flag_ran_words: false,
            flag_orion: false,
            flag_futairyo: false,
            flag_specimen: false,
            flag_naitou_past: false,
            flag_mimine_question: false
          }}
          currentHistory={[]}
          onClose={() => setActiveMenu('none')}
          onLoadData={(slot) => {
            setActiveMenu('none');
            onStartGame(slot.sceneId);
          }}
        />
      )}

      {activeMenu === 'config' && (
        <ConfigMenu
          onClose={() => setActiveMenu('none')}
          textSpeed={30}
          setTextSpeed={() => {}}
          autoWaitTime={3000}
          setAutoWaitTime={() => {}}
        />
      )}

      {activeMenu === 'gallery' && (
        <Gallery onClose={() => setActiveMenu('none')} />
      )}
    </div>
  );
}
