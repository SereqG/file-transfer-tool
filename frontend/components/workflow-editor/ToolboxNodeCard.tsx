import type { DragEvent } from "react";
import { createPortal } from "react-dom";

import { startNodeDrag } from "@/helpers/workflow-editor/drag-payload";
import { useHoverTooltip } from "@/hooks/workflow-editor/use-hover-tooltip";
import type { NodeDefinition } from "@/lib/workflow-editor/types";

import { NodeGlassIcon } from "./common/NodeGlassIcon";
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
        className="cursor-grab transition-transform duration-200 ease-out hover:scale-110 active:scale-95 active:cursor-grabbing"
      >
        <NodeGlassIcon category={definition.category} icon={Icon} size="sm" />
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
