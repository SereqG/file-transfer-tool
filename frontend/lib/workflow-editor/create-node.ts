import type { XYPosition } from "@xyflow/react";

import { generateId } from "@/helpers/workflow-editor/generate-id";

import { WORKFLOW_NODE_TYPE } from "./constants";
import type { NodeDefinition, WorkflowNode } from "./types";

export function createWorkflowNode(
  definition: NodeDefinition,
  position: XYPosition,
): WorkflowNode {
  return {
    id: generateId(definition.category),
    type: WORKFLOW_NODE_TYPE,
    position,
    data: {
      label: definition.label,
      category: definition.category,
      description: definition.description,
      icon: definition.icon,
    },
  };
}
