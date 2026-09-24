import {
  Background,
  BackgroundVariant,
  Panel,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useCanvasDrop } from "@/hooks/workflow-editor/use-canvas-drop";
import { useWorkflowGraph } from "@/hooks/workflow-editor/use-workflow-graph";
import { INITIAL_VIEWPORT } from "@/lib/workflow-editor/constants";

import { nodeTypes } from "./nodes/node-types";
import { WorkflowControlsBar } from "./WorkflowControlsBar";

export function WorkflowCanvas() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setNodes } =
    useWorkflowGraph();
  const { onDragOver, onDrop } = useCanvasDrop(setNodes);

  return (
    <div className="absolute inset-0" onDragOver={onDragOver} onDrop={onDrop}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultViewport={INITIAL_VIEWPORT}
        defaultEdgeOptions={{ style: { stroke: "#7c3aed", strokeWidth: 2 } }}
        connectionLineStyle={{ stroke: "#2563eb", strokeWidth: 2 }}
        panOnDrag={[1]}
        selectionOnDrag
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={16}
          size={1}
          color="var(--workflow-grid-dot)"
        />
        <Panel position="bottom-center">
          <WorkflowControlsBar />
        </Panel>
      </ReactFlow>
    </div>
  );
}
