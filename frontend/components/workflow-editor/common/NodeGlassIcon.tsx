import type { LucideIcon } from "lucide-react";

import { NODE_CATEGORY_STYLES } from "@/lib/workflow-editor/node-category-styles";
import type { NodeCategoryId } from "@/lib/workflow-editor/types";

interface NodeGlassIconProps {
  category: NodeCategoryId;
  icon: LucideIcon;
  size?: "sm" | "lg";
}

const SIZE_CLASSES = {
  sm: { tile: "h-11 w-11 rounded-xl", icon: 18 },
  lg: { tile: "h-14 w-14 rounded-2xl", icon: 24 },
} as const;

export function NodeGlassIcon({
  category,
  icon: Icon,
  size = "sm",
}: NodeGlassIconProps) {
  const style = NODE_CATEGORY_STYLES[category];
  const { tile, icon } = SIZE_CLASSES[size];

  return (
    <div
      className={`shrink-0 bg-gradient-to-br p-[1.5px] shadow-lg ${style.borderGradient} ${tile}`}
    >
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[inherit] bg-black/40 backdrop-blur-md">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-white/0 to-transparent"
        />
        <Icon
          size={icon}
          aria-hidden
          className="relative text-white drop-shadow-sm"
        />
      </div>
    </div>
  );
}
