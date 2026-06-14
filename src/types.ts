export interface GameFlags {
  ran_koukan: number;     // 蘭好感度
  riron_izon: number;     // 理論依存度
  mimine_flag: number;    // 三峰フラグ
  honsitsu_index: number; // ✝本質✝指数

  // 特別フラグ
  flag_ran_words: boolean;      // 「わからないけど続けること」
  flag_orion: boolean;          // オリオン座アイコンイベント
  flag_futairyo: boolean;       // 不理解の引力
  flag_specimen: boolean;       // 被験者フラグ
  flag_naitou_past: boolean;    // 内藤の過去
  flag_mimine_question: boolean;// 三峰の問い
}

export type SceneType = 'narration' | 'dialogue' | 'choice' | 'cg' | 'bgm' | 'se' | 'end';

export interface ChoiceOption {
  text: string;
  next: string;
  flagChanges?: Partial<GameFlags>;
}

export interface Scene {
  id: string;
  type: SceneType;
  speaker?: string;
  speakerKey?: string; // 'ran' | 'mimine' | 'ryouma' | 'mie' | 'rei' | 'terachi'
  expression?: string; // Expression name
  text: string;
  bg?: string; // background key
  bgm?: string; // bgm key
  se?: string; // se key
  cg?: string; // cg key IF cg type
  next?: string;
  choices?: ChoiceOption[];
  endId?: string; // 'END1' | 'END2' | 'END3' | 'END4' | 'END5' | 'HIDDEN'
  title?: string; // For end screen
  subtitle?: string; // For end screen
  vhs?: boolean; // Apply VHS filter if true
  grayscale?: boolean; // Apply grayscale filter if true
}

export interface SaveSlot {
  id: number;
  sceneId: string;
  flags: GameFlags;
  history: string[];
  timestamp: string;
  bgImage: string;
}

export interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  unlockCondition: string; // 'END1' | 'END2' ... or boolean flags
  special?: boolean;
}

export interface CGGalleryItem {
  id: string;
  title: string;
  chapter: string;
  unlockCondition: string;
  url: string;
}

export interface HonsitsuArchive {
  id: string;
  title: string;
  content: string;
  unlockCondition: string;
}

export interface ResearchNote {
  lawNumber: number;
  text: string;
  unlockCondition: string;
  isEnd?: boolean;
  isHidden?: boolean;
  special?: boolean;
}
