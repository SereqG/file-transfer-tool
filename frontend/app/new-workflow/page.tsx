import type { Metadata } from "next";

import { WorkflowEditorApp } from "@/components/workflow-editor/WorkflowEditorApp";

export const metadata: Metadata = {
  title: "New Workflow",
  description: "Build a workflow by connecting nodes on a canvas.",
};

export default function NewWorkflowPage() {
  return (
    <div className="h-dvh w-full">
      <WorkflowEditorApp />
    </div>
  );
}
