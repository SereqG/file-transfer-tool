import type { NodeCategoryId } from "./types";

export type NodeStatus = "connected" | "disconnected";

export const NODE_STATUS_LABELS: Record<NodeStatus, string> = {
  connected: "Input connected",
  disconnected: "No input connected",
};

export const NODE_STATUS_PILL_LABELS: Record<NodeStatus, string> = {
  connected: "Connected",
  disconnected: "No input",
};

export function getNodeStatusHint(
  status: NodeStatus,
  incomingEdgeCount: number,
): string {
  if (status === "disconnected") {
    return "This node needs an input. Drag a connection from another node's output into it.";
  }
  return `Receiving data from ${incomingEdgeCount} ${
    incomingEdgeCount === 1 ? "node" : "nodes"
  }.`;
}

export function getNodeStatus(
  category: NodeCategoryId,
  incomingEdgeCount: number,
): NodeStatus | null {
  if (category === "input") return null;
  return incomingEdgeCount > 0 ? "connected" : "disconnected";
}
