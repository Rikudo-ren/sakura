import React, { useEffect, useState } from 'react';

export default function VHSOverlay() {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    // Standard VHS recording timestamp layout
    const pad = (n: number) => n.toString().padStart(2, '0');
    const now = new Date();
    const formatted = `REC  ${now.getFullYear()}-06-13  ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    setTimestamp(formatted);

    const interval = setInterval(() => {
      const d = new Date();
      setTimestamp(`REC  2026-06-13  ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {/* Scanline flickering overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] bg-[length:100%_4px,_6px_100%] opacity-45 animate-pulse" />

      {/* Retro VHS recording HUD info */}
      <div className="absolute top-6 left-6 font-mono text-xs text-green-400 tracking-wider flex flex-col gap-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] opacity-85 select-none animate-pulse">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block animate-ping" />
          <span>PLAY ✝</span>
        </div>
        <div>SP  03:14:15</div>
        <div className="text-[10px] text-zinc-400">INPUT: NORTH_W_ROOMB</div>
      </div>

      <div className="absolute top-6 right-6 font-mono text-xs text-green-400 tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] opacity-85 select-none">
        {timestamp}
      </div>

      <div className="absolute bottom-36 left-6 font-mono text-[9px] text-zinc-500 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] select-none">
        [✝本質✝ ARCHIVE CAPTURED MODE // DYNAMIC RETROSCAN: ACTIVE]
      </div>

      {/* Full screen static distortion block that glitches randomly */}
      <div className="absolute inset-0 opacity-[0.03] bg-repeat bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=300&q=80')] mix-blend-overlay animate-flicker" />

      {/* Dynamic line interference slide mimicking a bad VHS tape */}
      <div className="absolute left-0 right-0 h-0.5 bg-white/20 opacity-30 top-1/4 animate-[vhs_8s_linear_infinite]" />
    </div>
  );
}
