import React from 'react';
import { CHARACTERS } from '../data/scenario';

interface CharacterAvatarProps {
  speakerKey: string;
  expression?: string;
  isSecondary?: boolean; // If true, make slightly smaller/darker
}

export default function CharacterAvatar({
  speakerKey,
  expression = 'normal',
  isSecondary = false
}: CharacterAvatarProps) {
  const config = CHARACTERS[speakerKey];
  if (!config) return null;

  // Render highly-polished stylistic SVG representations of characters based on keys and expressions
  const renderStylisticSVG = () => {
    switch (speakerKey) {
      case 'ran': // Naitou Ran - Quiet Librarian, Bob cut
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Background Gradient */}
            <defs>
              <linearGradient id="ranGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#86efac" />
              </linearGradient>
              <clipPath id="circleClip">
                <rect x="0" y="0" width="100" height="100" />
              </clipPath>
            </defs>

            <g clipPath="url(#circleClip)">
              {/* Shoulders / Uniform */}
              <path d="M 15 90 C 30 70, 70 70, 85 90 Z" fill="#1e1b4b" />
              <path d="M 40 70 L 50 82 L 60 70 Z" fill="#ffffff" /> {/* Collar */}
              <circle cx="50" cy="80" r="4" fill="#38bdf8" /> {/* Ribbon knot */}
              
              {/* Hair Back */}
              <path d="M 28 35 C 28 15, 72 15, 72 35 L 72 55 L 28 55 Z" fill="#2d1d17" />

              {/* Head / Face */}
              <ellipse cx="50" cy="45" rx="20" ry="22" fill="#ffedd5" />

              {/* Blush overlay */}
              {(expression === 'shy' || expression === 'special') && (
                <g opacity="0.6">
                  <ellipse cx="38" cy="48" rx="5" ry="3" fill="#ec4899" />
                  <ellipse cx="62" cy="48" rx="5" ry="3" fill="#ec4899" />
                </g>
              )}

              {/* Special Sparkles */}
              {expression === 'special' && (
                <g fill="#fef08a" opacity="0.9">
                  <path d="M 20 25 L 22 28 L 25 28 L 23 30 L 24 33 L 20 31 L 16 33 L 17 30 L 15 28 L 18 28 Z" />
                  <path d="M 78 22 L 79 24 L 81 24 L 80 25 L 81 27 L 79 26 L 78 27 L 78 25 L 76 25 L 78 24 Z" />
                </g>
              )}

              {/* Hair Front (Bob Cut bangs) */}
              <path d="M 30 40 C 30 20, 70 20, 70 40 C 65 35, 35 35, 30 40" fill="#3b2314" />
              <path d="M 28 35 C 28 25, 40 18, 50 22 C 60 18, 72 25, 72 35 C 72 45, 68 55, 68 55 C 68 50, 70 41, 66 38 C 62 35, 45 35, 38 38 C 30 42, 32 50, 32 55 C 32 55, 28 45, 28 35" fill="#2d1d17" />

              {/* Eyes */}
              {expression === 'smile' || expression === 'special' ? (
                // Happy/Arc eyes
                <g stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" fill="none">
                  <path d="M 35 44 C 38 41, 42 41, 45 44" />
                  <path d="M 55 44 C 58 41, 62 41, 65 44" />
                </g>
              ) : expression === 'surprised' ? (
                // Round wide eyes
                <g fill="#1e1b4b">
                  <circle cx="40" cy="44" r="3.5" fill="none" stroke="#1e1b4b" strokeWidth="2" />
                  <circle cx="40" cy="44" r="1.5" />
                  <circle cx="60" cy="44" r="3.5" fill="none" stroke="#1e1b4b" strokeWidth="2" />
                  <circle cx="60" cy="44" r="1.5" />
                </g>
              ) : (
                // Normal eyes
                <g fill="#1e1b4b">
                  <ellipse cx="40" cy="44" rx="2.5" ry="3.5" />
                  <ellipse cx="60" cy="44" rx="2.5" ry="3.5" />
                  <ellipse cx="39" cy="42" rx="0.8" ry="1.2" fill="#ffffff" />
                  <ellipse cx="59" cy="42" rx="0.8" ry="1.2" fill="#ffffff" />
                </g>
              )}

              {/* Mouth */}
              {expression === 'smile' || expression === 'special' || expression === 'laugh' ? (
                // Small gentle smile
                <path d="M 46 54 Q 50 58 54 54" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" fill="none" />
              ) : expression === 'surprised' ? (
                // Small 'o' mouth
                <circle cx="50" cy="55" r="2.5" fill="#b91c1c" />
              ) : (
                // Flat line
                <line x1="47" y1="54" x2="53" y2="54" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" />
              )}
            </g>
          </svg>
        );

      case 'mimine': // Mimine Rui - Active, Short hair
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="mimineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#be123c" />
                <stop offset="100%" stopColor="#fda4af" />
              </linearGradient>
              <clipPath id="circleClipMimine">
                <rect x="0" y="0" width="100" height="100" />
              </clipPath>
            </defs>

            <g clipPath="url(#circleClipMimine)">
              {/* Shoulders / School blazer */}
              <path d="M 12 90 C 26 65, 74 65, 88 90 Z" fill="#1e1b4b" />
              <path d="M 42 66 L 50 78 L 58 66 Z" fill="#ffffff" /> {/* Collar */}
              <path d="M 45 74 L 50 82 L 55 74 Z" fill="#f43f5e" /> {/* Red tie/ribbon */}

              {/* Hair Back Short */}
              <path d="M 30 30 C 30 15, 70 15, 70 30 L 74 50 L 26 50 Z" fill="#18181b" />

              {/* Head / Face */}
              <ellipse cx="50" cy="45" rx="19" ry="21" fill="#fee2e2" />

              {/* Blush */}
              {(expression === 'blush') && (
                <g opacity="0.8">
                  <ellipse cx="37" cy="49" rx="6" ry="4" fill="#fb7185" />
                  <ellipse cx="63" cy="49" rx="6" ry="4" fill="#fb7185" />
                  <line x1="34" y1="47" x2="39" y2="51" stroke="#be123c" strokeWidth="1" />
                  <line x1="37" y1="47" x2="41" y2="51" stroke="#be123c" strokeWidth="1" />
                  <line x1="60" y1="47" x2="65" y2="51" stroke="#be123c" strokeWidth="1" />
                  <line x1="62" y1="47" x2="67" y2="51" stroke="#be123c" strokeWidth="1" />
                </g>
              )}

              {/* Spirited haircut spikes */}
              <path d="M 32 30 C 34 20, 48 16, 50 20 C 52 16, 66 20, 68 30 C 73 34, 71 45, 68 45 C 65 40, 62 34, 58 35 C 50 36, 45 35, 42 35 C 37 34, 35 40, 32 45 C 29 45, 27 34, 32 30" fill="#27272a" />

              {/* Eyes */}
              {expression === 'laugh' ? (
                // Laughing closed eyes
                <g stroke="#18181b" strokeWidth="3" strokeLinecap="round" fill="none">
                  <path d="M 34 42 L 43 45 L 34 48" />
                  <path d="M 66 42 L 57 45 L 66 48" />
                </g>
              ) : expression === 'sharp' ? (
                // Skeptical / sharp eyes
                <g fill="#18181b">
                  <path d="M 33 37 Q 41 39 45 42 L 35 42 Z" stroke="#18181b" strokeWidth="1.5" />
                  <path d="M 67 37 Q 59 39 55 42 L 65 42 Z" stroke="#18181b" strokeWidth="1.5" />
                  <circle cx="39" cy="44" r="2" />
                  <circle cx="61" cy="44" r="2" />
                </g>
              ) : (
                // Active big eyes
                <g fill="#18181b">
                  <ellipse cx="39" cy="44" rx="3.5" ry="4.5" />
                  <ellipse cx="61" cy="44" rx="3.5" ry="4.5" />
                  <circle cx="38" cy="42" r="1.2" fill="#ffffff" />
                  <circle cx="60" cy="42" r="1.2" fill="#ffffff" />
                </g>
              )}

              {/* Mouth */}
              {expression === 'laugh' ? (
                // Wide open happy mouth
                <path d="M 43 54 Q 50 63 57 54 Z" fill="#e11d48" stroke="#18181b" strokeWidth="1.5" />
              ) : expression === 'sharp' ? (
                // Irritated curve / slight frown
                <path d="M 45 56 Q 50 51 55 54" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              ) : (
                // Active smile
                <path d="M 44 54 Q 50 59 56 54" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              )}
            </g>
          </svg>
        );

      case 'ryouma': // Ryouma - Science leader, messy gold energy
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="ryoumaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#fef08a" />
              </linearGradient>
              <clipPath id="circleClipRyouma">
                <rect x="0" y="0" width="100" height="100" />
              </clipPath>
            </defs>

            <g clipPath="url(#circleClipRyouma)">
              <path d="M 15 92 C 28 68, 72 68, 85 92 Z" fill="#1e1b4b" />
              <path d="M 43 68 L 50 78 L 57 68 Z" fill="#ffffff" />
              <path d="M 48 72 L 50 84 L 52 72 Z" fill="#b91c1c" /> {/* Red tie */}

              <ellipse cx="50" cy="44" rx="18" ry="20" fill="#fef3c7" />

              {/* Messy Hair */}
              <path d="M 28 42 C 24 35, 30 20, 42 16 C 50 12, 62 16, 68 24 C 74 30, 75 42, 70 45 Q 64 35, 54 35 Q 46 38, 38 35" fill="#78350f" />

              {/* Eyes */}
              {expression === 'excited' ? (
                <g fill="#78350f">
                  <path d="M 33 42 Q 40 37 45 42" stroke="#78350f" strokeWidth="2" fill="none" />
                  <path d="M 67 42 Q 60 37 55 42" stroke="#78350f" strokeWidth="2" fill="none" />
                  <circle cx="40" cy="45" r="3.5" fill="#ca8a04" />
                  <circle cx="40" cy="45" r="1.5" fill="#ffffff" />
                  <circle cx="60" cy="45" r="3.5" fill="#ca8a04" />
                  <circle cx="60" cy="45" r="1.5" fill="#ffffff" />
                </g>
              ) : (
                <g fill="#78350f">
                  <ellipse cx="40" cy="45" rx="2" ry="3" />
                  <ellipse cx="60" cy="45" rx="2" ry="3" />
                </g>
              )}

              {/* Mouth */}
              {expression === 'excited' || expression === 'normal' ? (
                <path d="M 44 54 Q 50 60 56 54" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
              ) : (
                <line x1="45" y1="55" x2="55" y2="55" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
              )}
            </g>
          </svg>
        );

      case 'mie': // Mie Kenomi - Intelligent/Cynical, grey cool tone
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="mieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <clipPath id="circleClipMie">
                <rect x="0" y="0" width="100" height="100" />
              </clipPath>
            </defs>

            <g clipPath="url(#circleClipMie)">
              <path d="M 15 92 C 28 72, 72 72, 85 92 Z" fill="#0f172a" />
              <path d="M 43 72 L 50 82 L 57 72 Z" fill="#ffffff" />

              <ellipse cx="50" cy="46" rx="18" ry="19" fill="#f1f5f9" />

              {/* Slick Hair */}
              <path d="M 30 35 C 32 18, 68 18, 70 35 C 72 42, 68 50, 68 50 L 32 50 Z" fill="#334155" />

              {/* Glasses */}
              <rect x="33" y="41" width="12" height="7" rx="2" fill="none" stroke="#1e293b" strokeWidth="2" />
              <rect x="55" y="41" width="12" height="7" rx="2" fill="none" stroke="#1e293b" strokeWidth="2" />
              <line x1="45" y1="44" x2="55" y2="44" stroke="#1e293b" strokeWidth="2" />

              {/* Eyes inside glasses */}
              <ellipse cx="39" cy="44" rx="1.5" ry="1" fill="#0f172a" />
              <ellipse cx="61" cy="44" rx="1.5" ry="1" fill="#0f172a" />

              {/* Mouth */}
              {expression === 'ha' ? (
                <path d="M 46 56 L 54 55" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
              ) : (
                <path d="M 47 55 C 49 56, 51 56, 53 55" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
              )}
            </g>
          </svg>
        );

      case 'rei': // Suri Rei - Purple/Lilac theme, neat/calm
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="reiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a0e4e" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <clipPath id="circleClipRei">
                <rect x="0" y="0" width="100" height="100" />
              </clipPath>
            </defs>

            <g clipPath="url(#circleClipRei)">
              <path d="M 15 92 C 28 72, 72 72, 85 92 Z" fill="#1e1b4b" />
              <path d="M 43 71 L 50 81 L 57 71 Z" fill="#ffffff" />
              <ellipse cx="50" cy="45" rx="18" ry="19" fill="#faf5ff" />

              {/* Neat purple hair */}
              <path d="M 30 35 C 32 20, 68 20, 70 35 C 71 42, 69 48, 69 48 L 31 48 Z" fill="#581c87" />

              {/* Eyes */}
              <ellipse cx="40" cy="44" rx="2" ry="2.5" fill="#3b0764" />
              <ellipse cx="60" cy="44" rx="2" ry="2.5" fill="#3b0764" />

              {/* Small knowing smile */}
              <path d="M 47 54 Q 50 57 53 54" stroke="#3b0764" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            </g>
          </svg>
        );

      case 'terachi': // Terachi Hoshi - Starry Mint green
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="terachiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#064e3b" />
                <stop offset="100%" stopColor="#6ee7b7" />
              </linearGradient>
              <clipPath id="circleClipTerachi">
                <rect x="0" y="0" width="100" height="100" />
              </clipPath>
            </defs>

            <g clipPath="url(#circleClipTerachi)">
              <path d="M 15 92 C 28 72, 72 72, 85 92 Z" fill="#111827" />
              <path d="M 43 72 L 50 82 L 57 72 Z" fill="#ffffff" />

              <ellipse cx="50" cy="45" rx="18" ry="20" fill="#f0fdf4" />

              {/* Astronomy Hair */}
              <path d="M 28 38 C 30 18, 68 18, 70 38 C 72 45, 68 52, 68 52 L 32 52 Z" fill="#047857" />

              {/* Eyes */}
              {expression === 'frozen' ? (
                // Blank dots
                <g fill="#065f46">
                  <circle cx="39" cy="44" r="1.5" />
                  <circle cx="61" cy="44" r="1.5" />
                </g>
              ) : (
                <g fill="#065f46">
                  <ellipse cx="39" cy="44" rx="2" ry="3" />
                  <ellipse cx="61" cy="44" rx="2" ry="3" />
                </g>
              )}

              {/* Mouth */}
              {expression === 'frozen' ? (
                // open small square
                <rect x="48" y="52" width="4" height="4" fill="#047857" rx="1" />
              ) : (
                // gentle flat smile
                <path d="M 46 54 Q 50 57 54 54" stroke="#065f46" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              )}
            </g>
          </svg>
        );

      default:
        return null;
    }
  };

  // Determine if we should render an image or fall back to SVG
  const imageUrl = config.expressions?.[expression] || config.image;

  return (
    <div
      className={`
        transition-all duration-300 ease-out flex flex-col items-center justify-end
        ${isSecondary ? 'scale-95 opacity-60 filter saturate-75 brightness-75' : 'scale-100 opacity-100 filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.65)]'}
        w-full h-full pointer-events-none select-none relative
      `}
      id={`avatar-${speakerKey}`}
    >
      <div className="w-full h-full relative flex items-end justify-center pointer-events-none select-none">
        {imageUrl ? (
          <div className="relative w-full h-full flex items-end justify-center">
            {/* The main character sprite image */}
            <img
              src={imageUrl}
              alt={config.name}
              referrerPolicy="no-referrer"
              className="h-full w-full object-contain object-bottom pointer-events-none select-none"
            />
            {/* Visual guiding bounding box border for layouts, which appears when utilizing placeholder images */}
            {imageUrl.includes('placehold.co') && (
              <div 
                className="absolute inset-0 border-2 border-dashed rounded-lg flex flex-col items-center justify-between py-6 px-4 bg-black/40 backdrop-blur-[0.5px]"
                style={{ borderColor: config.color }}
              >
                {/* Top indicator (Head line aligned with top 1/4 of visual field) */}
                <span 
                  className="text-[9px] font-mono font-semibold tracking-wider text-white bg-black/90 px-1.5 py-0.5 rounded border shadow-md"
                  style={{ borderColor: config.color }}
                >
                  【立ち絵頭頂部】
                </span>
                
                {/* Center specs */}
                <div className="text-center bg-black/95 p-3 rounded-lg border border-white/10 shadow-2xl max-w-[90%] scale-90 sm:scale-100">
                  <div className="font-bold text-xs tracking-wide" style={{ color: config.color }}>
                    {config.name} ({expression})
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    素材範囲 (450 × 650)
                  </div>
                  <div className="text-[8px] text-zinc-500 mt-1 leading-relaxed border-t border-white/5 pt-1">
                    画像差し替え時は
                    scenario.ts のパスを
                    本番の透過PNG等に
                    書き換えてください。
                  </div>
                </div>

                {/* Bottom position anchor */}
                <span 
                  className="text-[9px] font-mono font-semibold tracking-wider text-white bg-black/90 px-1.5 py-0.5 rounded border shadow-md"
                  style={{ borderColor: config.color }}
                >
                  【画面下部の接地境界】
                </span>
              </div>
            )}
          </div>
        ) : (
          renderStylisticSVG()
        )}
      </div>
    </div>
  );
}
