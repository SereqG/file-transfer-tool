import type { Edge, Node } from "@xyflow/react";

import type { WORKFLOW_NODE_TYPE } from "./constants";

export type NodeCategoryId = "input" | "transform" | "output";

export type NodeIconId =
  | "file"
  | "cloud"
  | "globe"
  | "archive"
  | "lock"
  | "refresh-cw"
  | "folder-output"
  | "upload-cloud"
  | "webhook";

export interface NodeDefinition {
  id: string;
  category: NodeCategoryId;
  label: string;
  description: string;
  icon: NodeIconId;
}

export interface CategoryDefinition {
  id: NodeCategoryId;
  label: string;
  nodes: NodeDefinition[];
}

export interface WorkflowNodeData extends Record<string, unknown> {
  label: string;
  category: NodeCategoryId;
  description: string;
}

export type WorkflowNode = Node<WorkflowNodeData, typeof WORKFLOW_NODE_TYPE>;

export type WorkflowEdge = Edge;

export interface DragPayload {
  definitionId: string;
}

export interface NodeHandleConfig {
  showTarget: boolean;
  showSource: boolean;
}
