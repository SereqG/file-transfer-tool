import { Handle, Position, type NodeProps } from "@xyflow/react";

import { getNodeHandleConfig } from "@/lib/workflow-editor/node-handles";
import type { WorkflowNode as WorkflowNodeType } from "@/lib/workflow-editor/types";

const CATEGORY_LABELS: Record<WorkflowNodeType["data"]["category"], string> = {
  input: "Input",
  transform: "Transform",
  output: "Output",
};

const CATEGORY_ACCENT: Record<WorkflowNodeType["data"]["category"], string> = {
  input: "bg-blue-500",
  transform: "bg-violet-500",
  output: "bg-gradient-to-b from-blue-500 to-violet-500",
};

const HANDLE_CLASS = "!h-2.5 !w-2.5 !border-2 !border-white dark:!border-zinc-900";

export function WorkflowNode({ data }: NodeProps<WorkflowNodeType>) {
  const { showTarget, showSource } = getNodeHandleConfig(data.category);

  return (
    <div className="relative flex items-center gap-2 overflow-hidden rounded-lg border border-black/[.08] bg-white px-3 py-2 text-sm shadow-sm dark:border-white/[.145] dark:bg-zinc-900">
      <span
        aria-hidden
        className={`absolute inset-y-0 left-0 w-1 ${CATEGORY_ACCENT[data.category]}`}
      />
      {showTarget && (
        <Handle
          type="target"
          position={Position.Left}
          className={`${HANDLE_CLASS} !bg-violet-500`}
        />
      )}
      <div>
        <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {CATEGORY_LABELS[data.category]}
        </p>
        <p className="font-medium text-zinc-900 dark:text-zinc-50">
          {data.label}
        </p>
      </div>
      {showSource && (
        <Handle
          type="source"
          position={Position.Right}
          className={`${HANDLE_CLASS} !bg-blue-500`}
        />
      )}
    </div>
  );
}
