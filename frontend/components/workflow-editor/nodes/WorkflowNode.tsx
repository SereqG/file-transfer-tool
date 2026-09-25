import { Handle, Position, type NodeProps } from "@xyflow/react";

import { NODE_CATEGORY_STYLES } from "@/lib/workflow-editor/node-category-styles";
import { getNodeHandleConfig } from "@/lib/workflow-editor/node-handles";
import type { WorkflowNode as WorkflowNodeType } from "@/lib/workflow-editor/types";

import { NODE_ICONS } from "../node-icons";

const HANDLE_CLASS =
  "!h-2.5 !w-2.5 !border-2 !border-white dark:!border-zinc-900";

export function WorkflowNode({ data, selected }: NodeProps<WorkflowNodeType>) {
  const { showTarget, showSource } = getNodeHandleConfig(data.category);
  const style = NODE_CATEGORY_STYLES[data.category];
  const Icon = NODE_ICONS[data.icon];

  return (
    <div className="flex w-16 flex-col items-center gap-1.5">
      {showTarget && (
        <Handle
          type="target"
          position={Position.Left}
          style={{ top: 28 }}
          className={`${HANDLE_CLASS} !bg-violet-500`}
        />
      )}
      <div
        className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br p-[1.5px] shadow-lg transition-transform duration-150 ${style.borderGradient} ${selected ? "scale-105" : ""}`}
      >
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[inherit] bg-black/40 backdrop-blur-md">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-white/0 to-transparent"
          />
          <Icon
            size={24}
            aria-hidden
            className="relative text-white drop-shadow-sm"
          />
        </div>
        {selected && (
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-1 rounded-2xl ring-2 ring-white/70"
          />
        )}
      </div>
      <p className="w-full truncate text-center text-[11px] font-medium text-zinc-900 dark:text-zinc-50">
        {data.label}
      </p>
      {showSource && (
        <Handle
          type="source"
          position={Position.Right}
          style={{ top: 28 }}
          className={`${HANDLE_CLASS} !bg-blue-500`}
        />
      )}
    </div>
  );
}
