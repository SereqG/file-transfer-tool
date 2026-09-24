import type { DragEvent } from "react";
import { createPortal } from "react-dom";

import { startNodeDrag } from "@/helpers/workflow-editor/drag-payload";
import { useHoverTooltip } from "@/hooks/workflow-editor/use-hover-tooltip";
import type { NodeDefinition } from "@/lib/workflow-editor/types";

import { NODE_ICONS } from "./node-icons";

interface ToolboxNodeCardProps {
  definition: NodeDefinition;
}

export function ToolboxNodeCard({ definition }: ToolboxNodeCardProps) {
  const { anchorRef, position, show, hide } =
    useHoverTooltip<HTMLDivElement>();
  const Icon = NODE_ICONS[definition.icon];

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    startNodeDrag(event, definition);
  };

  return (
    <>
      <div
        ref={anchorRef}
        draggable
        onDragStart={handleDragStart}
        onMouseEnter={show}
        onMouseLeave={hide}
        className="flex h-11 w-11 shrink-0 cursor-grab items-center justify-center rounded-xl border border-white/40 bg-gradient-to-b from-white/70 to-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_6px_rgba(0,0,0,0.08)] backdrop-blur-md transition-transform duration-200 ease-out hover:scale-110 hover:shadow-lg active:scale-95 active:cursor-grabbing dark:border-white/10 dark:from-white/10 dark:to-white/[.02] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_2px_6px_rgba(0,0,0,0.4)]"
      >
        <Icon
          size={18}
          aria-hidden
          className="text-blue-600 dark:text-violet-400"
        />
      </div>
      {position &&
        createPortal(
          <div
            role="tooltip"
            style={{ top: position.top, left: position.left }}
            className="pointer-events-none fixed z-50 w-44 -translate-y-1/2 animate-[tooltip-pop_150ms_ease-out] rounded-lg border border-blue-200/50 bg-white/95 p-2.5 text-xs shadow-xl backdrop-blur-md dark:border-violet-800/50 dark:bg-zinc-900/95"
          >
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">
              {definition.label}
            </p>
            <p className="mt-0.5 text-zinc-500 dark:text-zinc-400">
              {definition.description}
            </p>
          </div>,
          document.body,
        )}
    </>
  );
}
