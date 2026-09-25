import type { NodeCategoryId, NodeHandleConfig } from "./types";

export function getNodeHandleConfig(
  category: NodeCategoryId,
): NodeHandleConfig {
  switch (category) {
    case "input":
      return { showTarget: false, showSource: true };
    case "transform":
    case "output":
      return { showTarget: true, showSource: true };
  }
}
