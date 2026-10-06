import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import type { TooltipPlacement } from "@/hooks/workflow-editor/use-hover-tooltip";

interface NodeTooltipProps {
  position: { top: number; left: number };
  placement?: TooltipPlacement;
  children: ReactNode;
}

const PLACEMENT_CLASS: Record<TooltipPlacement, string> = {
  right: "-translate-y-1/2",
  top: "-translate-x-1/2 -translate-y-full",
};

export function NodeTooltip({
  position,
  placement = "right",
  children,
}: NodeTooltipProps) {
  return createPortal(
    <div
      role="tooltip"
      style={{ top: position.top, left: position.left }}
      className={`pointer-events-none fixed z-50 w-max max-w-44 ${PLACEMENT_CLASS[placement]} animate-[tooltip-pop_150ms_ease-out] rounded-lg border border-blue-200/50 bg-white/95 p-2.5 text-xs shadow-xl backdrop-blur-md dark:border-violet-800/50 dark:bg-zinc-900/95`}
    >
      {children}
    </div>,
    document.body,
  );
}
