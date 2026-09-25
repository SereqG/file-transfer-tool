import type { LucideIcon } from "lucide-react";

import { NODE_CATEGORY_STYLES } from "@/lib/workflow-editor/node-category-styles";
import type { NodeCategoryId } from "@/lib/workflow-editor/types";

type NodeGlassIconSize = "sm" | "lg";

interface NodeGlassIconProps {
  category: NodeCategoryId;
  icon: LucideIcon;
  size: NodeGlassIconSize;
  className?: string;
}

const SIZE_CLASSES: Record<
  NodeGlassIconSize,
  { tile: string; icon: number; radius: string }
> = {
  sm: { tile: "h-11 w-11", icon: 18, radius: "rounded-xl" },
  lg: { tile: "h-16 w-16", icon: 28, radius: "rounded-2xl" },
};

export function NodeGlassIcon({
  category,
  icon: Icon,
  size,
  className = "",
}: NodeGlassIconProps) {
  const style = NODE_CATEGORY_STYLES[category];
  const { tile, icon, radius } = SIZE_CLASSES[size];

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border bg-gradient-to-br backdrop-blur-md ${tile} ${radius} ${style.gradient} ${style.border} ${style.glow} ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-transparent opacity-80 dark:from-white/25 dark:via-white/5 dark:to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-x-6 -top-1/2 h-1/2 rotate-[-15deg] bg-white/40 blur-md dark:bg-white/15"
      />
      <Icon
        size={icon}
        aria-hidden
        className="relative text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}
