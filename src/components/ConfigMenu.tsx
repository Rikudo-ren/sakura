import React, { useState } from 'react';
import { audio } from '../utils/audio';

interface ConfigMenuProps {
  onClose: () => void;
  textSpeed: number;
  setTextSpeed: (speed: number) => void;
  autoWaitTime: number;
  setAutoWaitTime: (time: number) => void;
}

export default function ConfigMenu({
  onClose,
  textSpeed,
  setTextSpeed,
  autoWaitTime,
  setAutoWaitTime
}: ConfigMenuProps) {
  const [bgmVol, setBgmVol] = useState<number>(() => {
    const val = localStorage.getItem('schrodinger_bgm_vol');
    return val !== null ? parseFloat(val) : 0.5;
  });

  const [seVol, setSeVol] = useState<number>(() => {
    const val = localStorage.getItem('schrodinger_se_vol');
    return val !== null ? parseFloat(val) : 0.5;
  });

  const [isMuted, setIsMuted] = useState<boolean>(() => {
    return localStorage.getItem('schrodinger_is_muted') === 'true';
  });

  const handleBgmVolumeChange = (vol: number) => {
    setBgmVol(vol);
    audio.setVolume(vol);
    localStorage.setItem('schrodinger_bgm_vol', vol.toString());
  };

  const handleSeVolumeChange = (vol: number) => {
    setSeVol(vol);
    localStorage.setItem('schrodinger_se_vol', vol.toString());
  };

  const handleMuteToggle = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audio.setMute(nextMuted);
    localStorage.setItem('schrodinger_is_muted', nextMuted.toString());
  };

  const handleResetData = () => {
    if (window.confirm('すべての記録（実績、セーブ、ギャラリー）を初期化して、波動関数を重ね合わせ初期状態に戻しますか？')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="absolute inset-0 bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center p-6 text-white animate-fade-in">
      <div className="w-full max-w-md bg-zinc-950 border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-zinc-900/50">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-300 uppercase flex items-center gap-2">
            <span>⚙️</span> 環境設定 / CONFIGURATION
          </h2>
          <button
            onClick={onClose}
            className="text-xs tracking-widest hover:text-white text-zinc-400 hover:bg-white/10 px-3 py-1 rounded transition-colors"
          >
            閉じる
          </button>
        </div>

        {/* Adjustments */}
        <div className="p-6 space-y-6">
          {/* Text speed */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                文字表示速度 (Ms / 文字)
              </label>
              <span className="text-xs font-mono text-sky-400">{textSpeed}ms</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={textSpeed}
              onChange={(e) => {
                const speed = parseInt(e.target.value);
                setTextSpeed(speed);
                localStorage.setItem('schrodinger_text_speed', speed.toString());
              }}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
            <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
              <span>高速 (5ms)</span>
              <span>低速 (100ms)</span>
            </div>
          </div>

          {/* Auto Mode wait time */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                オートモード送り遅延 (ミリ秒)
              </label>
              <span className="text-xs font-mono text-sky-400">{(autoWaitTime / 1000).toFixed(1)}秒</span>
            </div>
            <input
              type="range"
              min="1000"
              max="6000"
              step="500"
              value={autoWaitTime}
              onChange={(e) => {
                const time = parseInt(e.target.value);
                setAutoWaitTime(time);
                localStorage.setItem('schrodinger_auto_time', time.toString());
              }}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
            <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
              <span>速い (1.0秒)</span>
              <span>遅い (6.0秒)</span>
            </div>
          </div>

          {/* Audio Setup */}
          <div className="space-y-4 pt-2 border-t border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                オーディオミュート設定
              </span>
              <button
                onClick={handleMuteToggle}
                className={`px-4 py-1 text-xs tracking-widest uppercase rounded font-mono border transition-all ${
                  isMuted
                    ? 'bg-red-950/40 border-red-500/30 text-red-400 shadow-md shadow-red-950/20'
                    : 'bg-zinc-900 border-white/10 text-zinc-400 hover:bg-white/5'
                }`}
              >
                {isMuted ? 'MUTED' : 'UNMUTED'}
              </button>
            </div>

            {/* BGM Volume */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold tracking-wider text-zinc-500">
                  合成本質BGM音量 (Web Audio Synth)
                </label>
                <span className="text-xs font-mono text-emerald-400">{(bgmVol * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                disabled={isMuted}
                value={bgmVol}
                onChange={(e) => handleBgmVolumeChange(parseFloat(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 disabled:opacity-20"
              />
            </div>

            {/* SE Volume */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold tracking-wider text-zinc-500">
                  効果音音量 (Sound Effects Synth)
                </label>
                <span className="text-xs font-mono text-emerald-400">{(seVol * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                disabled={isMuted}
                value={seVol}
                onChange={(e) => handleSeVolumeChange(parseFloat(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 disabled:opacity-20"
              />
            </div>
          </div>

          {/* Reset button */}
          <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
            <button
              onClick={handleResetData}
              className="w-full bg-red-950/30 hover:bg-red-950/50 text-red-400 border border-red-500/15 py-2 px-3 rounded text-xs font-medium tracking-widest uppercase transition-all flex items-center justify-center gap-2 font-mono"
            >
              ⚠️ STATUS INITIALIZATION (記録初期化)
            </button>
            <p className="text-[9px] text-zinc-500 leading-relaxed font-mono text-center">
              * WARNING: All save slots and unlocked gallery items will be collapsed back into overlay state.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
