import type { NodeCategoryId } from "./types";

export interface NodeCategoryStyle {
  /** Glass tile background gradient (Tailwind `from/via/to` classes). */
  gradient: string;
  /** Tile border color. */
  border: string;
  /** Ambient drop shadow that tints the canvas around the tile. */
  glow: string;
  /** Solid swatch used for small category indicators (e.g. sidebar dots). */
  dot: string;
  /** Hover text color for category chrome (sidebar section header). */
  accentText: string;
}

export const NODE_CATEGORY_STYLES: Record<NodeCategoryId, NodeCategoryStyle> = {
  input: {
    gradient: "from-blue-400/90 via-blue-500/80 to-blue-600/70",
    border: "border-blue-300/60 dark:border-blue-400/40",
    glow: "shadow-[0_10px_28px_-10px_rgba(37,99,235,0.55)]",
    dot: "bg-blue-500",
    accentText: "hover:text-blue-600 dark:hover:text-blue-300",
  },
  transform: {
    gradient: "from-violet-400/90 via-violet-500/80 to-purple-600/70",
    border: "border-violet-300/60 dark:border-violet-400/40",
    glow: "shadow-[0_10px_28px_-10px_rgba(124,58,237,0.55)]",
    dot: "bg-violet-500",
    accentText: "hover:text-violet-600 dark:hover:text-violet-300",
  },
  output: {
    gradient: "from-emerald-400/90 via-emerald-500/80 to-teal-600/70",
    border: "border-emerald-300/60 dark:border-emerald-400/40",
    glow: "shadow-[0_10px_28px_-10px_rgba(5,150,105,0.55)]",
    dot: "bg-emerald-500",
    accentText: "hover:text-emerald-600 dark:hover:text-emerald-300",
  },
};
