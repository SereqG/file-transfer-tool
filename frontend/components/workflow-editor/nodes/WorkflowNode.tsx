import { Handle, Position, type NodeProps } from "@xyflow/react";

import { getNodeHandleConfig } from "@/lib/workflow-editor/node-handles";
import type { WorkflowNode as WorkflowNodeType } from "@/lib/workflow-editor/types";

import { NodeGlassIcon } from "../common/NodeGlassIcon";
import { NODE_ICONS } from "../node-icons";

const HANDLE_CLASS = "!h-2.5 !w-2.5 !border-2 !border-white dark:!border-zinc-900";

export function WorkflowNode({ data, selected }: NodeProps<WorkflowNodeType>) {
  const { showTarget, showSource } = getNodeHandleConfig(data.category);
  const Icon = NODE_ICONS[data.icon];

  return (
    <div className="flex w-20 flex-col items-center gap-1.5">
      <div className="relative">
        {showTarget && (
          <Handle
            type="target"
            position={Position.Left}
            className={`${HANDLE_CLASS} !bg-violet-500`}
          />
        )}
        <NodeGlassIcon
          category={data.category}
          icon={Icon}
          size="lg"
          className={
            selected
              ? "ring-2 ring-white/80 dark:ring-white/50"
              : undefined
          }
        />
        {showSource && (
          <Handle
            type="source"
            position={Position.Right}
            className={`${HANDLE_CLASS} !bg-blue-500`}
          />
        )}
      </div>
      <p className="max-w-[5.5rem] truncate text-center text-xs font-medium text-zinc-700 dark:text-zinc-200">
        {data.label}
      </p>
    </div>
  );
}
