import type { CSSProperties } from "react";

import { getCategoryColorVar } from "@/lib/workflow-editor/category-colors";
import type { NodeCategoryId } from "@/lib/workflow-editor/types";

export function getCategoryColorStyle(category: NodeCategoryId): CSSProperties {
  return { "--node-color": getCategoryColorVar(category) } as CSSProperties;
}

export const GLASS_TILE_SURFACE =
  "relative border border-white/30 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--node-color)_70%,white),var(--node-color))] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.15)] transition duration-200 ease-out dark:border-white/15 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.5)] motion-reduce:transition-none";

export const GLASS_TILE_SHEEN =
  "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_50%)]";

export const GLASS_TILE_HOVER =
  "hover:scale-110 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_18px_color-mix(in_srgb,var(--node-color)_65%,transparent)] motion-reduce:hover:scale-100";
