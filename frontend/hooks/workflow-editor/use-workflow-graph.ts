import { useCallback } from "react";
import {
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
} from "@xyflow/react";

import type { WorkflowEdge, WorkflowNode } from "@/lib/workflow-editor/types";

export function useWorkflowGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState<WorkflowNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<WorkflowEdge>([]);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((currentEdges) => addEdge(connection, currentEdges));
    },
    [setEdges],
  );

  return { nodes, edges, onNodesChange, onEdgesChange, onConnect, setNodes };
}

export type UseWorkflowGraphResult = ReturnType<typeof useWorkflowGraph>;
