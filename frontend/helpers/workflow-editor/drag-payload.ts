import type { DragEvent } from "react";

import type { DragPayload, NodeDefinition } from "@/lib/workflow-editor/types";

export const WORKFLOW_NODE_DRAG_MIME = "application/x-workflow-node";

export function serializeDragPayload(definition: NodeDefinition): string {
  const payload: DragPayload = { definitionId: definition.id };
  return JSON.stringify(payload);
}

export function parseDragPayload(raw: string): DragPayload | null {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "definitionId" in parsed &&
      typeof (parsed as { definitionId: unknown }).definitionId === "string"
    ) {
      return parsed as DragPayload;
    }
    return null;
  } catch {
    return null;
  }
}

export function startNodeDrag(
  event: DragEvent<HTMLElement>,
  definition: NodeDefinition,
): void {
  event.dataTransfer.setData(
    WORKFLOW_NODE_DRAG_MIME,
    serializeDragPayload(definition),
  );
  event.dataTransfer.effectAllowed = "move";
}
