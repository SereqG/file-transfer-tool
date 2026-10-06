import { useCallback } from "react";
import {
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
} from "@xyflow/react";

import { isConnectionAllowed } from "@/lib/workflow-editor/connection-rules";
import { WORKFLOW_EDGE_TYPE } from "@/lib/workflow-editor/constants";
import type { WorkflowEdge, WorkflowNode } from "@/lib/workflow-editor/types";

export function useWorkflowGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState<WorkflowNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<WorkflowEdge>([]);

  const onConnect = useCallback(
    (connection: Connection) => {
      if (!isConnectionAllowed(connection)) return;
      setEdges((currentEdges) =>
        addEdge({ ...connection, type: WORKFLOW_EDGE_TYPE }, currentEdges),
      );
    },
    [setEdges],
  );

  return { nodes, edges, onNodesChange, onEdgesChange, onConnect, setNodes };
}

export type UseWorkflowGraphResult = ReturnType<typeof useWorkflowGraph>;
