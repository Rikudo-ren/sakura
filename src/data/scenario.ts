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
  title_bg: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1280&h=720&q=80", // Night cherry blossoms dawn
  library_afternoon: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1280&h=720&q=80", // Afternoon library glow
  classroom_morning: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1280&h=720&q=80", // School classroom morning (wood desks)
  classroom_afternoon: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1280&h=720&q=80", // Warm classroom sunset (sunbeams wood desks)
  hallway_south: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1280&h=720&q=80", // Polished white/wood school hallway
  hallway_north: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1280&h=720&q=80", // Empty study wing / corridor window glow
  science_classroom: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1280&h=720&q=80", // Chemistry lab / Science wing
  cherry_blossom_path: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1280&h=720&q=80", // Sprawling sakura path
  cafeteria: "https://images.unsplash.com/photo-1576085898323-218337e3343c?auto=format&fit=crop&w=1280&h=720&q=80" // Lunch area glow
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
    color: "#a8d8ea", // Light bluish soft theme
    accent: "text-sky-300 border-sky-400",
    avatarBg: "from-sky-900 to-indigo-950",
    image: "https://placehold.co/450x650/1e293b/a8d8ea?text=Ran\n(Normal)\n450x650\n[Replace+With+PNG]",
    expressions: {
      normal: "https://placehold.co/450x650/1e293b/a8d8ea?text=Ran\n(Normal)\n450x650\n[Replace+With+PNG]",
      smile: "https://placehold.co/450x650/1e293b/a8d8ea?text=Ran\n(Smile)\n450x650\n[Replace+With+PNG]",
      shy: "https://placehold.co/450x650/3b1e2c/ec4899?text=Ran\n(Shy)\n450x650\n[Replace+With+PNG]",
      surprised: "https://placehold.co/450x650/1a1e36/38bdf8?text=Ran\n(Surprised)\n450x650\n[Replace+With+PNG]",
      special: "https://placehold.co/450x650/451a03/f59e0b?text=Ran\n(Special)\n450x650\n[Replace+With+PNG]"
    }
  },
  mimine: {
    name: "三峰瑠衣",
    color: "#ff6b9d", // Energetic pink theme
    accent: "text-rose-400 border-rose-500",
    avatarBg: "from-rose-950 to-pink-900",
    image: "https://placehold.co/450x650/2d0b13/ff6b9d?text=Mimine\n(Normal)\n450x650\n[Replace+With+PNG]",
    expressions: {
      normal: "https://placehold.co/450x650/2d0b13/ff6b9d?text=Mimine\n(Normal)\n450x650\n[Replace+With+PNG]",
      smile: "https://placehold.co/450x650/2d0b13/ff6b9d?text=Mimine\n(Smile)\n450x650\n[Replace+With+PNG]",
      laugh: "https://placehold.co/450x650/450a12/f43f5e?text=Mimine\n(Laugh)\n450x650\n[Replace+With+PNG]",
      blush: "https://placehold.co/450x650/3c0b1e/fda4af?text=Mimine\n(Blush)\n450x650\n[Replace+With+PNG]",
      sharp: "https://placehold.co/450x650/27272a/94a3b8?text=Mimine\n(Sharp)\n450x650\n[Replace+With+PNG]"
    }
  },
  ryouma: {
    name: "両馬二郎",
    color: "#ffd700", // Gold✝本質✝
    accent: "text-yellow-400 border-yellow-500",
    avatarBg: "from-yellow-950 to-amber-900",
    image: "https://placehold.co/450x650/251802/ffd700?text=Ryouma\n(Normal)\n450x650\n[Replace+With+PNG]",
    expressions: {
      normal: "https://placehold.co/450x650/251802/ffd700?text=Ryouma\n(Normal)\n450x650\n[Replace+With+PNG]",
      excited: "https://placehold.co/450x650/451a03/f59e0b?text=Ryouma\n(Excited)\n450x650\n[Replace+With+PNG]"
    }
  },
  mie: {
    name: "三重県臣",
    color: "#9b9b9b", // Cynical grey
    accent: "text-zinc-400 border-zinc-500",
    avatarBg: "from-zinc-900 to-slate-950",
    image: "https://placehold.co/450x650/0f172a/94a3b8?text=Mie\n(Normal)\n450x650\n[Replace+With+PNG]",
    expressions: {
      normal: "https://placehold.co/450x650/0f172a/94a3b8?text=Mie\n(Normal)\n450x650\n[Replace+With+PNG]",
      ha: "https://placehold.co/450x650/1e293b/64748b?text=Mie\n(Ha)\n450x650\n[Replace+With+PNG]"
    }
  },
  rei: {
    name: "数理零",
    color: "#c8a2c8", // Lilac
    accent: "text-purple-400 border-purple-500",
    avatarBg: "from-purple-950 to-violet-900",
    image: "https://placehold.co/450x650/2e1040/c8a2c8?text=Rei\n(Normal)\n450x650\n[Replace+With+PNG]",
    expressions: {
      normal: "https://placehold.co/450x650/2e1040/c8a2c8?text=Rei\n(Normal)\n450x650\n[Replace+With+PNG]"
    }
  },
  terachi: {
    name: "寺地星",
    color: "#98d8c8", // Mint starry astronomer
    accent: "text-emerald-400 border-emerald-500",
    avatarBg: "from-emerald-950 to-teal-900",
    image: "https://placehold.co/450x650/064e3b/98d8c8?text=Terachi\n(Normal)\n450x650\n[Replace+With+PNG]",
    expressions: {
      normal: "https://placehold.co/450x650/064e3b/98d8c8?text=Terachi\n(Normal)\n450x650\n[Replace+With+PNG]",
      frozen: "https://placehold.co/450x650/022c22/34d399?text=Terachi\n(Frozen)\n450x650\n[Replace+With+PNG]"
    }
  },
  櫻優: {
    name: "櫻優",
    color: "#ffffff",
    accent: "text-white border-white",
    avatarBg: "from-slate-800 to-slate-950"
  }
};
