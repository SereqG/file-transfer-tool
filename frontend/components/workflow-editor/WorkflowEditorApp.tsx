"use client";

import { ReactFlowProvider } from "@xyflow/react";

import { WorkflowCanvas } from "./WorkflowCanvas";
import { WorkflowNavbar } from "./WorkflowNavbar";
import { WorkflowToolbox } from "./WorkflowToolbox";

export function WorkflowEditorApp() {
  return (
    <ReactFlowProvider>
      <div className="flex h-full w-full flex-col">
        <WorkflowNavbar />
        <div className="relative min-h-0 flex-1">
          <WorkflowCanvas />
          <WorkflowToolbox />
        </div>
      </div>
    </ReactFlowProvider>
  );
}
