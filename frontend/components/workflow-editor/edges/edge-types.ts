import { WORKFLOW_EDGE_TYPE } from "@/lib/workflow-editor/constants";

import { WorkflowEdge } from "./WorkflowEdge";

export const edgeTypes = {
  [WORKFLOW_EDGE_TYPE]: WorkflowEdge,
} as const;
