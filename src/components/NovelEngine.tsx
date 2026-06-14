import React, { useState, useEffect, useRef } from 'react';
import { Scene, GameFlags, SaveSlot } from '../types';
import { SCENARIO, BACKGROUNDS, CHARACTERS } from '../data/scenario';
import CharacterAvatar from './CharacterAvatar';
import VHSOverlay from './VHSOverlay';
import Backlog from './Backlog';
import SaveMenu from './SaveMenu';
import ConfigMenu from './ConfigMenu';
import Gallery from './Gallery';
import { audio } from '../utils/audio';

interface NovelEngineProps {
  initialSceneId: string;
  onGoToTitle: () => void;
  unlockedFlags?: Record<string, boolean>;
}

export default function NovelEngine({
  initialSceneId,
  onGoToTitle,
  unlockedFlags = {}
}: NovelEngineProps) {
  // Game states
  const [currentSceneId, setCurrentSceneId] = useState(initialSceneId);
  const [flags, setFlags] = useState<GameFlags>({
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
  });

  const [history, setHistory] = useState<string[]>([]);
  const [displayedText, setDisplayedText] = useState('');
  const [isTextComplete, setIsTextComplete] = useState(false);
  const [isAuto, setIsAuto] = useState(false);
  const [isSkip, setIsSkip] = useState(false);

  // Settings
  const [textSpeed, setTextSpeed] = useState(() => {
    const s = localStorage.getItem('schrodinger_text_speed');
    return s ? parseInt(s) : 30; // 30ms baseline
  });
  const [autoWaitTime, setAutoWaitTime] = useState(() => {
    const t = localStorage.getItem('schrodinger_auto_time');
    return t ? parseInt(t) : 3000; // 3 seconds baseline
  });

  // Modal views
  const [activeMenu, setActiveMenu] = useState<'none' | 'backlog' | 'save' | 'load' | 'config' | 'gallery'>('none');

  const textIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentScene = SCENARIO[currentSceneId];

  // Initialize and register scene triggers
  useEffect(() => {
    if (!currentScene) return;

    // Trigger procedural audio sounds on scene load
    if (currentScene.bgm) {
      audio.playBGM(currentScene.bgm);
    }
    if (currentScene.se) {
      audio.playSE(currentScene.se);
    }

    // Trigger Typewriter transition
    startTypewriter(currentScene.text);

    // Track dynamic unlocks based on progression flags
    if (currentScene.type === 'end' && currentScene.endId) {
      saveEndUnlock(currentScene.endId);
    }

    // Capture critical milestone flags in localstorage for gallery unlocks
    const updatedUnlocks: Record<string, boolean> = { ...unlockedFlags };
    let hasNewUnlocks = false;

    if (flags.flag_orion) {
      updatedUnlocks['flag_orion'] = true;
      hasNewUnlocks = true;
    }
    if (flags.flag_specimen) {
      updatedUnlocks['flag_specimen'] = true;
      hasNewUnlocks = true;
    }
    if (flags.flag_ran_words) {
      updatedUnlocks['flag_ran_words'] = true;
      hasNewUnlocks = true;
    }
    if (currentSceneId.startsWith('ch4_')) {
      updatedUnlocks['ch4_done'] = true;
      hasNewUnlocks = true;
    }
    if (currentSceneId.startsWith('ch3_')) {
      updatedUnlocks['ch3_done'] = true;
      hasNewUnlocks = true;
    }
    if (hasNewUnlocks) {
      localStorage.setItem('schrodinger_unlocked_flags', JSON.stringify(updatedUnlocks));
    }

    // Auto-append dialogue line to text history log
    if (currentScene.type === 'narration' || currentScene.type === 'dialogue') {
      const logLine = currentScene.speaker
        ? `${currentScene.speaker}: ${currentScene.text}`
        : currentScene.text;
      
      setHistory((prev) => {
        if (prev.includes(logLine)) return prev;
        const next = [...prev, logLine];
        if (next.length > 50) next.shift(); // Keep top 50 logs
        return next;
      });
    }

    return () => {
      if (textIntervalRef.current) {
        clearInterval(textIntervalRef.current);
        textIntervalRef.current = null;
      }
    };
  }, [currentSceneId]);

  // Handle auto mode text continuation
  useEffect(() => {
    if (isAuto && isTextComplete && !activeMenu && currentScene && currentScene.type !== 'choice' && currentScene.type !== 'end') {
      autoTimeoutRef.current = setTimeout(() => {
        handleNext();
      }, autoWaitTime);
    }
    return () => {
      if (autoTimeoutRef.current) clearTimeout(autoTimeoutRef.current);
    };
  }, [isAuto, isTextComplete, activeMenu, currentSceneId]);

  // Handle skipping speedup
  useEffect(() => {
    if (isSkip && isTextComplete) {
      const t = setTimeout(() => {
        handleNext();
      }, 100);
      return () => clearTimeout(t);
    }
  }, [isSkip, isTextComplete, currentSceneId]);

  // Typewriter engine
  const startTypewriter = (text: string) => {
    if (textIntervalRef.current) clearInterval(textIntervalRef.current);
    setIsTextComplete(false);
    setDisplayedText('');

    let index = 0;
    // Split into individual letters
    const characters = Array.from(text);
    
    if (isSkip || textSpeed <= 0) {
      setDisplayedText(text);
      setIsTextComplete(true);
      return;
    }

    textIntervalRef.current = setInterval(() => {
      const char = characters[index];
      if (char !== undefined) {
        setDisplayedText((prev) => prev + char);
      }
      index++;
      if (index >= characters.length) {
        if (textIntervalRef.current) clearInterval(textIntervalRef.current);
        setIsTextComplete(true);
      }
    }, textSpeed);
  };

  const skipTypewriter = () => {
    if (textIntervalRef.current) clearInterval(textIntervalRef.current);
    setDisplayedText(currentScene?.text || '');
    setIsTextComplete(true);
  };

  const handleNext = () => {
    if (!currentScene) return;

    if (!isTextComplete) {
      skipTypewriter();
      return;
    }

    // Handle split routing judgments
    if (currentScene.next === 'perform_split') {
      audio.playSE('click');
      if (flags.mimine_flag >= 4) {
        setCurrentSceneId('ch6_mimine_001'); // Direct to Mimine route
      } else {
        setCurrentSceneId('ch6_ran_001'); // Standard Naitou route
      }
      return;
    }

    if (currentScene.next) {
      audio.playSE('click');
      setCurrentSceneId(currentScene.next);
    }
  };

  const handleChoice = (option: any) => {
    audio.playSE('decision');
    
    // Process flag metrics
    if (option.flagChanges) {
      setFlags((prev) => {
        const next = { ...prev };
        Object.entries(option.flagChanges).forEach(([key, val]) => {
          const metricKey = key as keyof GameFlags;
          if (typeof next[metricKey] === 'number' && typeof val === 'number') {
            (next[metricKey] as number) += val;
          } else if (typeof val === 'boolean') {
            (next[metricKey] as any) = val;
          }
        });
        return next;
      });
    }

    setCurrentSceneId(option.next);
  };

  const saveEndUnlock = (endId: string) => {
    const stored = localStorage.getItem('schrodinger_unlocked_ends');
    let ends: string[] = [];
    if (stored) {
      try {
        ends = JSON.parse(stored);
      } catch (e) {}
    }
    if (!ends.includes(endId)) {
      ends.push(endId);
      localStorage.setItem('schrodinger_unlocked_ends', JSON.stringify(ends));
      audio.playSE('unlock');
    }
  };

  const handleLoadState = (slot: SaveSlot) => {
    audio.playSE('decision');
    setCurrentSceneId(slot.sceneId);
    setFlags(slot.flags);
    setHistory(slot.history);
    setIsAuto(false);
  };

  // Keyboard controls for retro PC feel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Space' || e.key === ' ') {
        e.preventDefault();
        if (activeMenu === 'none' && currentScene?.type !== 'choice') {
          handleNext();
        }
      } else if (e.key === 'Escape') {
        setActiveMenu('none');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSceneId, isTextComplete, activeMenu]);

  if (!currentScene) return null;

  // Background style
  const bgSrc = BACKGROUNDS[currentScene.bg || 'library_afternoon'];

  return (
    <div
      className={`
        w-full h-full relative flex flex-col justify-between overflow-hidden bg-zinc-950 select-none
        ${currentScene.grayscale ? 'filter grayscale saturate-50 brightness-75' : ''}
      `}
      style={{
        backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 100%), url(${bgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.6s ease-in-out'
      }}
    >
      {/* 1. VHS filter overlay for stream archives */}
      {currentScene.vhs && <VHSOverlay />}

      {/* 2. Top Status / Navigation header */}
      <div className="w-full flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent z-10">
        <div className="flex items-center gap-3">
          <span className="text-white bg-black/60 border border-white/20 text-[10px] font-mono py-1 px-2.5 rounded tracking-widest leading-none select-none animate-pulse">
            ✝ 観測中
          </span>
          <span className="text-zinc-400 text-xs font-mono select-none tracking-wider opacity-60">
            METRICS: R={flags.ran_koukan}/10 I={flags.riron_izon}/10 M={flags.mimine_flag}/10
          </span>
        </div>

        {/* HUD buttons */}
        <div className="flex gap-2 text-xs font-mono tracking-widest text-zinc-300">
          <button
            onClick={() => {
              audio.playSE('click');
              setIsAuto(!isAuto);
            }}
            className={`px-3 py-1 border rounded transition-all cursor-pointer ${
              isAuto
                ? 'bg-sky-500/10 border-sky-400 text-sky-300 shadow-md shadow-sky-950/20'
                : 'bg-black/45 border-white/10 hover:bg-white/10'
            }`}
          >
            {isAuto ? 'AUTO: ON' : 'AUTO'}
          </button>
          
          <button
            onClick={() => {
              audio.playSE('click');
              setIsSkip(!isSkip);
            }}
            className={`px-3 py-1 border rounded transition-all cursor-pointer ${
              isSkip
                ? 'bg-purple-500/10 border-purple-400 text-purple-300 shadow-md shadow-purple-950/20 animate-pulse'
                : 'bg-black/45 border-white/10 hover:bg-white/10'
            }`}
          >
            {isSkip ? 'SKIP: FAST' : 'SKIP'}
          </button>

          <button
            onClick={() => {
              audio.playSE('click');
              setActiveMenu('config');
            }}
            className="px-3 py-1 bg-black/45 border border-white/10 hover:bg-white/10 rounded transition-all cursor-pointer"
          >
            CONFIG
          </button>
        </div>
      </div>

      {/* 3. Character Sprite Sandbox (Absolutely positioned behind text box, rising from the very bottom edge of the screen) */}
      <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pointer-events-none select-none z-0 overflow-hidden">
        {currentScene.speakerKey && (
          <div className="animate-fade-in-up h-[92vh] w-[35vw] min-w-[340px] max-w-[480px] flex items-end justify-center select-none pointer-events-none translate-y-0">
            <CharacterAvatar
              speakerKey={currentScene.speakerKey}
              expression={currentScene.expression}
            />
          </div>
        )}
      </div>

      {/* Flexbox spacer to preserve layout balance with absolutely-positioned sprite */}
      <div className="flex-1 pointer-events-none" />

      {/* 4. Bottom Novel Textbox and Choices */}
      <div className="w-full bg-gradient-to-t from-black/75 via-black/30 to-transparent pt-16 pb-8 px-4 z-10 flex flex-col items-center">
        
        {/* Choice Modal */}
        {currentScene.type === 'choice' && currentScene.choices && (
          <div className="w-full max-w-xl flex flex-col gap-3 py-4 animate-fade-in z-20 mb-4 select-none">
            {currentScene.choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(choice)}
                className="w-full bg-black/80 hover:bg-[rgba(212,160,255,0.08)] text-zinc-100 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 py-3.5 px-6 rounded-xl text-left text-sm font-medium tracking-wide leading-relaxed shadow-lg cursor-pointer transition-all hover:translate-x-1"
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}

        {/* End Overlay Banner */}
        {currentScene.type === 'end' && (
          <div className="w-full max-w-xl text-center py-6 animate-fade-in select-none">
            <div className="text-[11px] font-mono tracking-widest text-sky-400 uppercase mb-2">
              QUANTUM SYSTEM COLLAPSED // END REACHED
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-widest text-white uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
              {currentScene.subtitle}
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-zinc-400 whitespace-pre-wrap max-w-md mx-auto">
              {currentScene.text}
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <button
                onClick={() => {
                  audio.playSE('click');
                  setActiveMenu('gallery');
                }}
                className="bg-sky-950/40 border border-sky-500/30 text-sky-300 tracking-widest text-xs px-6 py-2.5 rounded hover:bg-sky-500/15 transition-all cursor-pointer"
              >
                ギャラリーを見る
              </button>
              <button
                onClick={() => {
                  audio.playSE('decision');
                  onGoToTitle();
                }}
                className="bg-white text-black font-semibold tracking-widest text-xs px-6 py-2.5 rounded hover:bg-neutral-200 transition-all cursor-pointer"
              >
                タイトルへ戻る
              </button>
            </div>
          </div>
        )}

        {/* VN Standard Dialogue Bubble */}
        {currentScene.type !== 'choice' && currentScene.type !== 'end' && (
          <div
            onClick={handleNext}
            className="w-full max-w-3xl min-h-[140px] bg-black/35 border border-white/10 rounded-2xl p-6 sm:p-8 cursor-pointer relative shadow-2xl backdrop-blur-sm hover:border-white/20 hover:bg-black/45 transition-all duration-300 self-center flex flex-col justify-between animate-fade-in"
          >
            {/* Speaker Name Tag */}
            {currentScene.speaker && (
              <div
                className="absolute -top-4 left-6 px-4 py-1.5 rounded-md text-xs font-bold tracking-widest border shadow-lg backdrop-blur"
                style={{
                  borderColor: CHARACTERS[currentScene.speakerKey || '']?.color || 'rgba(255, 255, 255, 0.25)',
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  color: CHARACTERS[currentScene.speakerKey || '']?.color || '#ffffff'
                }}
              >
                {currentScene.speaker}
              </div>
            )}

            {/* Typewriter text space */}
            <p className="text-zinc-100 text-sm leading-relaxed tracking-wide font-sans whitespace-pre-wrap font-medium">
              {displayedText}
              {!isTextComplete && (
                <span className="w-1.5 h-4 bg-sky-300 ml-1 inline-block animate-pulse align-middle" />
              )}
            </p>

            {/* Micro panel footer / click guide */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5 select-none text-[10px] text-zinc-500 font-mono tracking-wider">
              {/* Quick toolbar */}
              <div className="flex gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playSE('click');
                    setActiveMenu('save');
                  }}
                  className="hover:text-white transition-colors"
                >
                  SAVE
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playSE('click');
                    setActiveMenu('load');
                  }}
                  className="hover:text-white transition-colors"
                >
                  LOAD
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playSE('click');
                    setActiveMenu('backlog');
                  }}
                  className="hover:text-white transition-colors"
                >
                  LOG
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playSE('click');
                    onGoToTitle();
                  }}
                  className="hover:text-red-400 transition-colors"
                >
                  TITLE
                </button>
              </div>

              <span>{isTextComplete ? 'CLICK / SPACE TO SEND ▶' : 'TAP TO COMPLETE ⏹'}</span>
            </div>
          </div>
        )}
      </div>

      {/* 5. Modal manager portals */}
      {activeMenu === 'backlog' && (
        <Backlog logs={history} onClose={() => setActiveMenu('none')} />
      )}

      {activeMenu === 'save' && (
        <SaveMenu
          mode="save"
          currentSceneId={currentSceneId}
          currentFlags={flags}
          currentHistory={history}
          onClose={() => setActiveMenu('none')}
          onLoadData={handleLoadState}
        />
      )}

      {activeMenu === 'load' && (
        <SaveMenu
          mode="load"
          currentSceneId={currentSceneId}
          currentFlags={flags}
          currentHistory={history}
          onClose={() => setActiveMenu('none')}
          onLoadData={handleLoadState}
        />
      )}

      {activeMenu === 'config' && (
        <ConfigMenu
          onClose={() => setActiveMenu('none')}
          textSpeed={textSpeed}
          setTextSpeed={setTextSpeed}
          autoWaitTime={autoWaitTime}
          setAutoWaitTime={setAutoWaitTime}
        />
      )}

      {activeMenu === 'gallery' && (
        <Gallery onClose={() => setActiveMenu('none')} />
      )}
    </div>
  );
}
