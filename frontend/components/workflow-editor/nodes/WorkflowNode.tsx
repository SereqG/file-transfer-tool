import { useNodeConnections, type NodeProps } from "@xyflow/react";

import { getNodeStatus } from "@/lib/workflow-editor/node-status";
import { getNodeHandleConfig } from "@/lib/workflow-editor/node-handles";
import type { WorkflowNode as WorkflowNodeType } from "@/lib/workflow-editor/types";

import {
  GLASS_TILE_HOVER,
  GLASS_TILE_SHEEN,
  GLASS_TILE_SURFACE,
  getCategoryColorStyle,
} from "../glass-tile";
import { NODE_ICONS } from "../node-icons";
import { NodeDeleteButton } from "./NodeDeleteButton";
import { NodeHandle } from "./NodeHandle";
import { NodeStatusBadge } from "./NodeStatusBadge";

export function WorkflowNode({ id, data, selected }: NodeProps<WorkflowNodeType>) {
  const { showTarget, showSource } = getNodeHandleConfig(data.category);
  const Icon = NODE_ICONS[data.icon];
  const incoming = useNodeConnections({ id, handleType: "target" });
  const status = getNodeStatus(data.category, incoming.length);

  return (
    <div className="group relative" style={getCategoryColorStyle(data.category)}>
      <div
        className={`${GLASS_TILE_SURFACE} ${GLASS_TILE_HOVER} flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-2xl ${
          selected
            ? "ring-2 ring-[var(--node-color)] ring-offset-2 ring-offset-background"
            : ""
        }`}
      >
        <span aria-hidden className={GLASS_TILE_SHEEN} />
        {status && <NodeStatusBadge status={status} />}
        {showTarget && <NodeHandle type="target" />}
        <Icon size={30} aria-hidden className="relative text-white" />
        {showSource && <NodeHandle type="source" />}
      </div>
      <NodeDeleteButton nodeId={id} visible={Boolean(selected)} />
      <p className="pointer-events-none absolute left-1/2 top-full mt-1.5 w-28 -translate-x-1/2 truncate text-center text-xs font-medium text-zinc-700 dark:text-zinc-200">
        {data.label}
      </p>
    </div>
  );
}
