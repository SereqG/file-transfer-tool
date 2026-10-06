import { useHoverTooltip } from "@/hooks/workflow-editor/use-hover-tooltip";
import {
  NODE_STATUS_PILL_LABELS,
  getNodeStatusHint,
  type NodeStatus,
} from "@/lib/workflow-editor/node-status";

import { NodeTooltip } from "../NodeTooltip";

interface NodeStatusBadgeProps {
  status: NodeStatus;
  incomingCount: number;
}

const PILL_STYLES: Record<NodeStatus, string> = {
  connected:
    "border-green-500/25 bg-green-500/10 text-green-700 dark:text-green-300",
  disconnected:
    "border-red-500/40 bg-red-500/15 text-red-700 dark:text-red-300",
};

const DOT_STYLES: Record<NodeStatus, string> = {
  connected: "bg-green-500",
  disconnected: "bg-red-500",
};

export function NodeStatusBadge({
  status,
  incomingCount,
}: NodeStatusBadgeProps) {
  const { anchorRef, position, show, hide } =
    useHoverTooltip<HTMLSpanElement>("top");

  return (
    <>
      <span
        ref={anchorRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        className={`absolute left-1/2 top-full mt-7 flex -translate-x-1/2 cursor-pointer items-center gap-1 whitespace-nowrap rounded-full border px-1.5 py-px text-[10px] font-medium leading-4 backdrop-blur-md ${PILL_STYLES[status]}`}
      >
        <span
          aria-hidden
          className={`h-1.5 w-1.5 rounded-full ${DOT_STYLES[status]}`}
        />
        {NODE_STATUS_PILL_LABELS[status]}
      </span>
      {position && (
        <NodeTooltip position={position} placement="top">
          <p className="text-zinc-700 dark:text-zinc-200">
            {getNodeStatusHint(status, incomingCount)}
          </p>
        </NodeTooltip>
      )}
    </>
  );
}
