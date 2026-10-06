import type { NodeCategoryId } from "./types";

export type NodeStatus = "connected" | "disconnected";

export const NODE_STATUS_LABELS: Record<NodeStatus, string> = {
  connected: "Input connected",
  disconnected: "No input connected",
};

export function getNodeStatus(
  category: NodeCategoryId,
  incomingEdgeCount: number,
): NodeStatus | null {
  if (category === "input") return null;
  return incomingEdgeCount > 0 ? "connected" : "disconnected";
}
