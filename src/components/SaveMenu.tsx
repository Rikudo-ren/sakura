import React, { useEffect, useState } from 'react';
import { SaveSlot, GameFlags } from '../types';
import { BACKGROUNDS } from '../data/scenario';

interface SaveMenuProps {
  mode: 'save' | 'load';
  currentSceneId: string;
  currentFlags: GameFlags;
  currentHistory: string[];
  onClose: () => void;
  onLoadData: (slot: SaveSlot) => void;
}

export default function SaveMenu({
  mode,
  currentSceneId,
  currentFlags,
  currentHistory,
  onClose,
  onLoadData
}: SaveMenuProps) {
  const [slots, setSlots] = useState<(SaveSlot | null)[]>([null, null, null]);

  useEffect(() => {
    // Read slots from localStorage
    const loadedSlots = [1, 2, 3].map(num => {
      const stored = localStorage.getItem(`schrodinger_save_slot_${num}`);
      if (stored) {
        try {
          return JSON.parse(stored) as SaveSlot;
        } catch (e) {
          return null;
        }
      }
      return null;
    });
    setSlots(loadedSlots);
  }, []);

  const handleAction = (slotIndex: number) => {
    const slotNumber = slotIndex + 1;
    if (mode === 'save') {
      // Create new Save state
      const now = new Date();
      const pad = (n: number) => n.toString().padStart(2, '0');
      const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
      
      // Determine screenshot context
      const bgImg = BACKGROUNDS.title_bg; // Default fallback

      const newSlot: SaveSlot = {
        id: slotNumber,
        sceneId: currentSceneId,
        flags: { ...currentFlags },
        history: [...currentHistory],
        timestamp,
        bgImage: bgImg
      };

      localStorage.setItem(`schrodinger_save_slot_${slotNumber}`, JSON.stringify(newSlot));
      
      const newSlots = [...slots];
      newSlots[slotIndex] = newSlot;
      setSlots(newSlots);
    } else {
      // Load action
      const slot = slots[slotIndex];
      if (slot) {
        onLoadData(slot);
        onClose();
      }
    }
  };

  const handleDelete = (e: React.MouseEvent, slotIndex: number) => {
    e.stopPropagation();
    const slotNumber = slotIndex + 1;
    localStorage.removeItem(`schrodinger_save_slot_${slotNumber}`);
    const newSlots = [...slots];
    newSlots[slotIndex] = null;
    setSlots(newSlots);
  };

  return (
    <div className="absolute inset-0 bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center p-6 text-white animate-fade-in">
      <div className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-xl overflow-hidden flex flex-col max-h-[90%] shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-zinc-900/50">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-300 uppercase flex items-center gap-2">
            <span>💾</span> {mode === 'save' ? '観測の記録 (SAVE)' : '記録の復元 (LOAD)'}
          </h2>
          <button
            onClick={onClose}
            className="text-xs tracking-widest hover:text-white text-zinc-400 hover:bg-white/10 px-3 py-1 rounded transition-colors"
          >
            閉じる
          </button>
        </div>

        {/* Slotted Cards */}
        <div className="p-6 overflow-y-auto space-y-4">
          {slots.map((slot, index) => {
            const slotNumber = index + 1;
            return (
              <div
                key={index}
                onClick={() => (slot || mode === 'save') && handleAction(index)}
                className={`
                  relative border border-white/10 p-4 rounded-lg flex items-center justify-between gap-4 transition-all duration-300
                  ${slot || mode === 'save' ? 'hover:border-sky-400/50 hover:bg-white/[0.02] cursor-pointer' : 'opacity-40 cursor-not-allowed'}
                `}
              >
                {/* Index Pedestals */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-900 border border-white/15 flex items-center justify-center text-xs font-mono font-bold tracking-widest rounded">
                    0{slotNumber}
                  </div>

                  <div>
                    {slot ? (
                      <div className="flex flex-col">
                        <div className="text-xs text-zinc-500 font-mono tracking-widest mb-1">
                          SAVED AT: {slot.timestamp}
                        </div>
                        <div className="text-sm font-semibold text-zinc-200 tracking-wide">
                          シーン: {slot.sceneId}
                        </div>
                        <div className="text-[10px] text-sky-300 font-mono tracking-wider mt-1 flex flex-wrap gap-x-2">
                          <span>蘭:{slot.flags.ran_koukan}</span>
                          <span>理:{slot.flags.riron_izon}</span>
                          <span>三:{slot.flags.mimine_flag}</span>
                          <span>本:{slot.flags.honsitsu_index}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-zinc-500 font-mono italic">
                        --- NO OBSERVATION SAVED ---
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {slot ? (
                    <>
                      {mode === 'load' ? (
                        <button className="bg-sky-950/50 border border-sky-500/20 text-sky-300 hover:bg-sky-500/10 px-4 py-1.5 rounded text-xs font-medium tracking-widest transition-colors font-mono">
                          LOAD
                        </button>
                      ) : (
                        <button className="bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/10 px-4 py-1.5 rounded text-xs font-medium tracking-widest transition-colors font-mono">
                          OVERWRITE
                        </button>
                      )}
                      <button
                        onClick={(e) => handleDelete(e, index)}
                        className="p-1.5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 rounded transition-colors text-xs"
                        title="セーブデータを消去"
                      >
                        🗑️
                      </button>
                    </>
                  ) : mode === 'save' ? (
                    <button className="bg-zinc-900 border border-white/20 text-white hover:bg-white/10 px-4 py-1.5 rounded text-xs font-medium tracking-widest transition-colors font-mono">
                      SAVE
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-zinc-900/30 text-center text-[10px] text-zinc-500 font-mono">
          QUANTUM OBSERVATIONS ENGINE V1.0 // PERSISTED IN SYSTEM OK
        </div>
      </div>
    </div>
  );
}
