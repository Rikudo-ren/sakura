import React, { useState, useEffect } from 'react';
import { BACKGROUNDS } from '../data/scenario';
import { audio } from '../utils/audio';

interface GalleryProps {
  onClose: () => void;
}

export default function Gallery({ onClose }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<'cg' | 'honsitsu' | 'notes' | 'achievements'>('cg');
  const [unlockedEnds, setUnlockedEnds] = useState<string[]>([]);
  const [flags, setFlags] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Read unlocks from localStorage
    const storedEnds = localStorage.getItem('schrodinger_unlocked_ends');
    if (storedEnds) {
      try {
        setUnlockedEnds(JSON.parse(storedEnds));
      } catch (e) {}
    }

    // Load action flags
    const storedFlags = localStorage.getItem('schrodinger_unlocked_flags');
    if (storedFlags) {
      try {
        setFlags(JSON.parse(storedFlags));
      } catch (e) {}
    }
  }, []);

  const isEndUnlocked = (endId: string) => unlockedEnds.includes(endId);
  const isFlagOn = (f: string) => !!flags[f];

  const allEndsCleared = ['END1', 'END2', 'END3', 'END4', 'END5'].every(id => unlockedEnds.includes(id));

  // 1. CG GALLERY CONFIG
  const CG_GALLERY = [
    {
      id: "prologue_eraser",
      title: "消しゴム事象",
      chapter: "プロローグ",
      url: BACKGROUNDS.library_afternoon,
      unlocked: true // Always visible
    },
    {
      id: "orion_icon",
      title: "オリオン座のアイコン",
      chapter: "第二章 (天文学アイコン)",
      url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=400&h=250&q=80",
      unlocked: isFlagOn('flag_orion')
    },
    {
      id: "corridor_scene",
      title: "廊下で、待っていた",
      chapter: "第四章 (合同課題の後)",
      url: BACKGROUNDS.hallway_south,
      unlocked: true // Guaranteed play
    },
    {
      id: "specimen_scene",
      title: "被験者、嫌いじゃないけど",
      chapter: "第四章 (被験者フラグ)",
      url: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=400&h=250&q=80",
      unlocked: isFlagOn('flag_specimen')
    },
    {
      id: "end1_sakura_path",
      title: "桜並木を、二人で",
      chapter: "END 1「✝本質✝は定義できない、でも愛は言える」",
      url: BACKGROUNDS.cherry_blossom_path,
      unlocked: isEndUnlocked('END1')
    },
    {
      id: "end4_mimine_blush",
      title: "は？（珍しい表情）",
      chapter: "END 4「は？の向こう側で」",
      url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&h=250&q=80",
      unlocked: isEndUnlocked('END4')
    },
    {
      id: "hidden_library",
      title: "消しゴムは、わざと落とされた",
      chapter: "HIDDEN END「地面は、忘れない」",
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&h=250&q=80",
      unlocked: isEndUnlocked('HIDDEN') || allEndsCleared
    }
  ];

  // 2. HONSITSU BROADCAST ARCHIVES
  const HONSITSU_ARCHIVE = [
    {
      id: "arc_001",
      title: "【アーカイブ】本質配信・第1回抜粋",
      content: `「本質を追えば追うほど、本質は遠くなる。」\n\n寺地：本質を追えば追うほど、本質は遠くなる。\n　　　これは……追ってる時点でもう本質から離れてるってことか。\n　　　本質って、向かうものじゃなくて、気づくものなのかもしれない——\n\n[三重県臣：は？ 当たり前のこと言うな。]`,
      unlocked: true // Open early
    },
    {
      id: "arc_002",
      title: "【アーカイブ】本質配信・第4回抜粋",
      content: `「ヘイカツ先生の窓を見る目。あそこに全部ある。」\n\n寺地：……わかります。わかる。\n　　　ヘイカツが窓の外を見るとき、何か見えてるんですよね、あの人には。\n　　　地形図の向こう側、かつて人間が生きてた判断が見えてる。\n　　　……え、俺なんか良いこと言った？\n\n[倉石：✝本質✝年鑑・第三章に登録されました。ありがとうございます！]`,
      unlocked: isEndUnlocked('END1')
    },
    {
      id: "arc_003",
      title: "【アーカイブ】本質配信・第7回抜粋",
      content: `「恋愛は、うまくいっていないときの方が本質に近い。」\n\n寺地：好意が成就する前の、あのもやもやした、確定しない揺らぎ。\n　　　あれが一番、人間の感情構造の本質に近いと思うんだよな。\n　　　成就した瞬間に、それはただの社会的な『関係』になってしまうという……\n\n[両馬：それだ！ 感情の重ね合わせ状態こそが一番本質だな！]`,
      unlocked: isFlagOn('flag_ran_words') || isEndUnlocked('END3')
    }
  ];

  // 3. RESEARCH NOTES (LAWS)
  const RESEARCH_NOTES = [
    {
      number: 1,
      name: "第一法則",
      text: "近接性と反復接触が好意を生む（恋愛発生の土台事象）",
      unlocked: true
    },
    {
      number: 14,
      name: "第十四法則",
      text: "当事者になると理論は機能しない（研究当事者の客観性破綻）",
      unlocked: true
    },
    {
      number: 15,
      name: "第十五法則",
      text: "「わからないけど続けること」が、最も重要かもしれない",
      unlocked: isFlagOn('flag_ran_words')
    },
    {
      number: 16,
      name: "第十六法則（分岐A）",
      text: "理論より先に、言葉にすること（真に好意を観測する唯一の方法）",
      unlocked: isEndUnlocked('END1')
    },
    {
      number: 16,
      name: "第十六法則（分岐B）",
      text: "理論は恋愛を記録できるが、推進することはできない",
      unlocked: isEndUnlocked('END2')
    },
    {
      number: 16,
      name: "第十六法則（分岐C）",
      text: "理解は不理解より深く引力を持つ（わかり合える人への引力）",
      unlocked: isEndUnlocked('END4')
    },
    {
      number: 99,
      name: "最終法則",
      text: "✝本質✝は定義できない。でも感じることはできる",
      unlocked: allEndsCleared || isEndUnlocked('HIDDEN'),
      special: true
    }
  ];

  // 4. ACHIEVEMENTS TROPHIES
  const ACHIEVEMENTS = [
    {
      id: "ach_end1",
      title: "波動関数、崩壊",
      desc: "END 1「✝本質✝は定義できない、でも愛は言える」を達成した",
      icon: "✝",
      unlocked: isEndUnlocked('END1')
    },
    {
      id: "ach_end2",
      title: "第十六法則",
      desc: "END 2「恋愛学・第十六法則」を達成した",
      icon: "📓",
      unlocked: isEndUnlocked('END2')
    },
    {
      id: "ach_end3",
      title: "友情という収束",
      desc: "END 3「収束した先にあるもの」を達成した",
      icon: "🌸",
      unlocked: isEndUnlocked('END3')
    },
    {
      id: "ach_end4",
      title: "は？の向こう側",
      desc: "END 4「は？の向こう側で」を達成した",
      icon: "❓",
      unlocked: isEndUnlocked('END4')
    },
    {
      id: "ach_end5",
      title: "観測されない猫",
      desc: "END 5「観測されないままの猫」を達成した",
      icon: "🐱",
      unlocked: isEndUnlocked('END5')
    },
    {
      id: "ach_all_ends",
      title: "地面は、忘れない",
      desc: "全5ENDを達成し、隠しエンドの観測条件をクリアした",
      icon: "👑",
      unlocked: allEndsCleared,
      special: true
    },
    {
      id: "ach_orion",
      title: "オリオン座の選択",
      desc: "天文学のアイコンを選んで、内藤と星の話をした",
      icon: "⭐",
      unlocked: isFlagOn('flag_orion')
    },
    {
      id: "ach_specimen",
      title: "被験者、嫌いじゃないけど",
      desc: "放課後、内藤に「被験者なので」と直接伝えた",
      icon: "🔬",
      unlocked: isFlagOn('flag_specimen')
    }
  ];

  return (
    <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl z-30 flex flex-col items-center justify-center p-4 text-white overflow-hidden animate-fade-in">
      <div className="w-full max-w-4xl bg-zinc-950/80 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-[90%] md:h-[85%] shadow-2xl relative">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex flex-col sm:flex-row gap-4 justify-between sm:items-center bg-zinc-900/30">
          <div>
            <h1 className="text-base font-bold tracking-widest text-zinc-100 flex items-center gap-2">
              <span>✝</span> 桐葉高校 恋愛学ギャラリー＆アーカイブ <span>✝</span>
            </h1>
            <p className="text-[10px] text-zinc-500 font-mono tracking-wider mt-0.5 uppercase">
              RECOLLECTION AND QUANTUM MEMORIES SYSTEM // CLEARED ENDS: {unlockedEnds.filter(id => id !== 'HIDDEN').length}/5
            </p>
          </div>
          <button
            onClick={() => {
              audio.playSE('click');
              onClose();
            }}
            className="text-xs bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-1.5 rounded tracking-widest text-zinc-300 font-medium transition-colors cursor-pointer self-start sm:self-center"
          >
            閉じる
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-white/10 text-xs tracking-wider font-mono uppercase bg-zinc-900/20 select-none overflow-x-auto whitespace-nowrap">
          {(['cg', 'honsitsu', 'notes', 'achievements'] as const).map(tab => {
            const labels = {
              cg: '🖼️ CGギャラリー',
              honsitsu: '📺 本質配信録',
              notes: '📔 恋愛学研究ノート',
              achievements: '🏆 実績・観測碑'
            };
            return (
              <button
                key={tab}
                onClick={() => {
                  audio.playSE('click');
                  setActiveTab(tab);
                }}
                className={`py-3 px-6 transition-all border-b-2 font-medium cursor-pointer ${
                  activeTab === tab
                    ? 'border-sky-400 text-sky-300 bg-white/[0.02]'
                    : 'border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.01]'
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 bg-black/40">
          
          {/* A. CG GALLERY */}
          {activeTab === 'cg' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {CG_GALLERY.map((cg) => (
                <div
                  key={cg.id}
                  className={`
                    group border p-2 rounded-xl flex flex-col bg-zinc-950/80 transition-all duration-300
                    ${cg.unlocked 
                      ? 'border-white/10 hover:border-sky-500/30 shadow-lg' 
                      : 'border-white/5 opacity-30 select-none'
                    }
                  `}
                >
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-zinc-900 flex items-center justify-center">
                    {cg.unlocked ? (
                      <img
                        src={cg.url}
                        alt={cg.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-4xl text-zinc-700">🔒</div>
                    )}
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] text-zinc-500 font-mono tracking-wider block uppercase">
                      {cg.chapter}
                    </span>
                    <h3 className="text-xs font-semibold tracking-wide text-zinc-200 mt-1">
                      {cg.unlocked ? cg.title : '【未観測の事象】'}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* B. HONSITSU RADIO STREAM ARCHIVE */}
          {activeTab === 'honsitsu' && (
            <div className="space-y-6 max-w-2xl mx-auto">
              {HONSITSU_ARCHIVE.map((arch) => (
                <div
                  key={arch.id}
                  className={`border p-5 rounded-2xl relative overflow-hidden transition-all duration-300 ${
                    arch.unlocked
                      ? 'border-white/10 bg-zinc-950/70 shadow-md'
                      : 'border-white/5 bg-zinc-950/20 opacity-30 select-none'
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-sm font-semibold text-zinc-200 tracking-wide">
                      {arch.unlocked ? arch.title : '🔒 【未解放の配信テープ】'}
                    </h3>
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded">
                      {arch.unlocked ? 'DECRYPTED' : 'LOCKED'}
                    </span>
                  </div>

                  {arch.unlocked ? (
                    // Vintage block structure to replicate late VHS stream log
                    <pre className="mt-4 text-xs font-mono text-zinc-300 leading-relaxed bg-black/60 p-4 border border-zinc-900 rounded-lg whitespace-pre-wrap select-text selection:bg-sky-500/30 scrollbar-thin">
                      {arch.content}
                    </pre>
                  ) : (
                    <div className="mt-4 p-4 text-center text-xs text-zinc-600 font-semibold italic">
                      特定のエンディング（END 1、END 3など）を観測することで配信テープが解読されます。
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* C. LOVE RESEARCH NOTES */}
          {activeTab === 'notes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {RESEARCH_NOTES.map((note, idx) => (
                <div
                  key={idx}
                  className={`border p-4 rounded-xl transition-all duration-300 ${
                    note.unlocked
                      ? note.special
                        ? 'border-yellow-500/30 bg-gradient-to-br from-amber-950/10 to-transparent shadow-yellow-900/10 shadow-lg'
                        : 'border-white/10 bg-zinc-900/20'
                      : 'border-white/5 opacity-25 select-none'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[10px] font-mono font-bold tracking-wide ${note.special ? 'text-yellow-400' : 'text-sky-400'}`}>
                      {note.name}
                    </span>
                    {note.unlocked && (
                      <span className="text-[8px] font-mono tracking-widest text-zinc-500 bg-zinc-900 px-1.5 py-0.5 border border-white/5 rounded">
                        {note.special ? '✝ 諦天 ✝' : 'RECORDED'}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs font-semibold text-zinc-200 mt-1 line-clamp-2 leading-relaxed">
                    {note.unlocked ? note.text : '🔒 【式定理：未確定】'}
                  </h3>
                </div>
              ))}
            </div>
          )}

          {/* D. ACHIEVEMENTS SYSTEM */}
          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  className={`
                    border p-4 rounded-xl flex gap-4 items-center transition-all duration-300
                    ${ach.unlocked 
                      ? ach.special
                        ? 'border-yellow-500/30 bg-amber-950/10 shadow-lg shadow-yellow-950/5'
                        : 'border-white/10 bg-zinc-950/80 shadow'
                      : 'border-white/5 opacity-30 select-none'
                    }
                  `}
                >
                  <div className={`w-12 h-12 flex items-center justify-center text-xl rounded-lg font-mono font-bold select-none border border-white/10 bg-zinc-900 ${ach.unlocked && ach.special ? 'text-yellow-400 border-yellow-500/30 bg-yellow-950/20' : 'text-zinc-300'}`}>
                    {ach.unlocked ? ach.icon : '🔒'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold tracking-wide text-zinc-200">
                        {ach.unlocked ? ach.title : '閉ざされた実績'}
                      </h4>
                      {ach.unlocked && ach.special && (
                        <span className="text-[8px] font-mono font-bold text-yellow-400 bg-yellow-950/50 px-1.5 rounded tracking-widest">
                          CORE
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-zinc-500 mt-1 leading-relaxed">
                      {ach.unlocked ? ach.desc : '条件：???'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-zinc-900/40 text-center text-[10px] text-zinc-500 font-mono tracking-widest">
          ✝ THE LAND DUST REMEMBERS. HUMAN SOUL NEVER FORGETS. ✝
        </div>

      </div>
    </div>
  );
}
