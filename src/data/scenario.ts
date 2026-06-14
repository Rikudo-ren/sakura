import { Scene } from '../types';
import { scenarioPart1 } from './scenario_part1';
import { scenarioPart2 } from './scenario_part2';
import { scenarioPart3 } from './scenario_part3';

// Merge all scenario parts
export const SCENARIO: Record<string, Scene> = {
  ...scenarioPart1,
  ...scenarioPart2,
  ...scenarioPart3
};

// Background Image URLs (Unsplash)
export const BACKGROUNDS: Record<string, string> = {
  title_bg: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1280&h=720&q=80",
  library_afternoon: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1280&h=720&q=80",
  classroom_morning: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1280&h=720&q=80",
  classroom_afternoon: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1280&h=720&q=80",
  hallway_south: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1280&h=720&q=80",
  hallway_north: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1280&h=720&q=80",
  science_classroom: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1280&h=720&q=80",
  cherry_blossom_path: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1280&h=720&q=80",
  cafeteria: "https://images.unsplash.com/photo-1576085898323-218337e3343c?auto=format&fit=crop&w=1280&h=720&q=80"
};

// Character Colors and Themes
export interface CharacterConfig {
  name: string;
  color: string;
  accent: string;
  avatarBg: string;
  image?: string;
  expressions?: Record<string, string>;
}

export const CHARACTERS: Record<string, CharacterConfig> = {
  ran: {
    name: "内藤蘭",
    color: "#a8d8ea",
    accent: "text-sky-300 border-sky-400",
    avatarBg: "from-sky-900 to-indigo-950",
    image: "/images/ran_normal.png",
    expressions: {
      normal: "/images/ran_normal.png",
      smile: "/images/ran_smile.png",
      shy: "/images/ran_shy.png",
      surprised: "/images/ran_surprised.png",
      special: "/images/ran_special.png"
    }
  },
  mimine: {
    name: "三峰瑠衣",
    color: "#ff6b9d",
    accent: "text-rose-400 border-rose-500",
    avatarBg: "from-rose-950 to-pink-900",
    image: "/images/mimine_normal.png",
    expressions: {
      normal: "/images/mimine_normal.png",
      smile: "/images/mimine_smile.png",
      laugh: "/images/mimine_laugh.png",
      blush: "/images/mimine_blush.png",
      sharp: "/images/mimine_sharp.png"
    }
  },
  ryouma: {
    name: "両馬二郎",
    color: "#ffd700",
    accent: "text-yellow-400 border-yellow-500",
    avatarBg: "from-yellow-950 to-amber-900",
    image: "/images/ryouma_normal.png",
    expressions: {
      normal: "/images/ryouma_normal.png",
      excited: "/images/ryouma_excited.png"
    }
  },
  mie: {
    name: "三重県臣",
    color: "#9b9b9b",
    accent: "text-zinc-400 border-zinc-500",
    avatarBg: "from-zinc-900 to-slate-950",
    image: "/images/mie_normal.png",
    expressions: {
      normal: "/images/mie_normal.png",
      ha: "/images/mie_ha.png"
    }
  },
  rei: {
    name: "数理零",
    color: "#c8a2c8",
    accent: "text-purple-400 border-purple-500",
    avatarBg: "from-purple-950 to-violet-900",
    image: "/images/rei_normal.png",
    expressions: {
      normal: "/images/rei_normal.png"
    }
  },
  terachi: {
    name: "寺地星",
    color: "#98d8c8",
    accent: "text-emerald-400 border-emerald-500",
    avatarBg: "from-emerald-950 to-teal-900",
    image: "/images/terachi_normal.png",
    expressions: {
      normal: "/images/terachi_normal.png",
      frozen: "/images/terachi_frozen.png"
    }
  },
  櫻優: {
    name: "櫻優",
    color: "#ffffff",
    accent: "text-white border-white",
    avatarBg: "from-slate-800 to-slate-950"
  }
};
