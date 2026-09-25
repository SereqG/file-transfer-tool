import type { NodeCategoryId } from "./types";

export interface NodeCategoryStyle {
  /** Tailwind `from-* to-*` stops used as a gradient border/accent. */
  borderGradient: string;
  /** Small color swatch, e.g. a category dot in the sidebar. */
  dot: string;
  /** Hover text color for category chrome (sidebar headers). */
  hoverText: string;
}

export const NODE_CATEGORY_STYLES: Record<NodeCategoryId, NodeCategoryStyle> = {
  input: {
    borderGradient: "from-blue-400 to-blue-600",
    dot: "bg-blue-500",
    hoverText: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  transform: {
    borderGradient: "from-violet-400 to-violet-600",
    dot: "bg-violet-500",
    hoverText: "hover:text-violet-600 dark:hover:text-violet-400",
  },
  output: {
    borderGradient: "from-emerald-400 to-emerald-600",
    dot: "bg-emerald-500",
    hoverText: "hover:text-emerald-600 dark:hover:text-emerald-400",
  },
};
