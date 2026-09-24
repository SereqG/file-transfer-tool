import { useCallback, type DragEvent } from "react";
import { useReactFlow } from "@xyflow/react";

import {
  WORKFLOW_NODE_DRAG_MIME,
  parseDragPayload,
} from "@/helpers/workflow-editor/drag-payload";
import { createWorkflowNode } from "@/lib/workflow-editor/create-node";
import { findNodeDefinition } from "@/lib/workflow-editor/node-catalog";

import type { UseWorkflowGraphResult } from "./use-workflow-graph";

export function useCanvasDrop(setNodes: UseWorkflowGraphResult["setNodes"]) {
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const raw = event.dataTransfer.getData(WORKFLOW_NODE_DRAG_MIME);
      const payload = parseDragPayload(raw);
      const definition = payload
        ? findNodeDefinition(payload.definitionId)
        : undefined;
      if (!definition) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setNodes((currentNodes) => [
        ...currentNodes,
        createWorkflowNode(definition, position),
      ]);
    },
    [screenToFlowPosition, setNodes],
  );

  return { onDragOver, onDrop };
}
