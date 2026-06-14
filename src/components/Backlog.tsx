import React from 'react';

interface BacklogProps {
  logs: string[];
  onClose: () => void;
}

export default function Backlog({ logs, onClose }: BacklogProps) {
  return (
    <div className="absolute inset-0 bg-black/85 backdrop-blur-md z-40 flex flex-col items-center justify-center p-6 animate-fade-in text-white">
      <div className="w-full max-w-2xl bg-zinc-950/75 border border-white/10 rounded-xl overflow-hidden flex flex-col h-[85%] shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-zinc-900/50">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-300 uppercase flex items-center gap-2">
            <span>📓</span> Backlog — 記録された好意のログ
          </h2>
          <button
            onClick={onClose}
            className="text-xs tracking-widest uppercase hover:text-white text-zinc-400 hover:bg-white/10 px-3 py-1 rounded transition-colors"
          >
            閉じる [Esc]
          </button>
        </div>

        {/* List content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 font-sans text-sm leading-relaxed scrollbar-thin scrollbar-thumb-white/10">
          {logs.length === 0 ? (
            <div className="text-zinc-500 text-center py-12 font-mono italic">
              まだ観測記録がありません。
            </div>
          ) : (
            logs.map((text, idx) => {
              // Parse speaker if formatted (e.g., "内藤蘭: あ、ありがとうございます")
              const hasSpeaker = text.includes(': ');
              let speaker = '';
              let quote = text;

              if (hasSpeaker) {
                const parts = text.split(': ');
                speaker = parts[0];
                quote = parts.slice(1).join(': ');
              }

              return (
                <div key={idx} className="border-b border-white/5 pb-3">
                  {speaker ? (
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold tracking-wider text-sky-300">
                        {speaker}
                      </span>
                      <p className="text-zinc-200">{quote}</p>
                    </div>
                  ) : (
                    <p className="text-zinc-400 italic font-mono">{text}</p>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-zinc-900/30 text-center text-[10px] text-zinc-500 font-mono tracking-widest">
          QUANTUM OBSERVATION REGISTERED // n={logs.length}
        </div>
      </div>
    </div>
  );
}
