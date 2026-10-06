import { useHoverTooltip } from "@/hooks/workflow-editor/use-hover-tooltip";
import {
  NODE_STATUS_LABELS,
  type NodeStatus,
} from "@/lib/workflow-editor/node-status";

import { NodeTooltip } from "../NodeTooltip";

interface NodeStatusBadgeProps {
  status: NodeStatus;
}

export function NodeStatusBadge({ status }: NodeStatusBadgeProps) {
  const { anchorRef, position, show, hide } =
    useHoverTooltip<HTMLSpanElement>("top");

  return (
    <>
      <span
        ref={anchorRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        aria-label={NODE_STATUS_LABELS[status]}
        className={`absolute -left-1.5 -top-1.5 z-10 h-3.5 w-3.5 cursor-pointer rounded-full border-2 border-white dark:border-zinc-900 ${
          status === "connected" ? "bg-green-500" : "bg-red-500"
        }`}
      />
      {position && (
        <NodeTooltip position={position} placement="top">
          <p className="font-semibold text-zinc-900 dark:text-zinc-50">
            {NODE_STATUS_LABELS[status]}
          </p>
        </NodeTooltip>
      )}
    </>
  );
}
