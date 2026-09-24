import { WORKFLOW_NODE_TYPE } from "@/lib/workflow-editor/constants";

import { WorkflowNode } from "./WorkflowNode";

export const nodeTypes = {
  [WORKFLOW_NODE_TYPE]: WorkflowNode,
} as const;
