import type { NodeCategoryId } from "./types";

export function getCategoryColorVar(category: NodeCategoryId): string {
  return `var(--node-${category})`;
}
