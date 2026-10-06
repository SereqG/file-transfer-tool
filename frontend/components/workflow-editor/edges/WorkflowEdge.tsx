import { useState } from "react";
import { BaseEdge, getBezierPath, type EdgeProps } from "@xyflow/react";

import { useEdgeHighlight } from "@/hooks/workflow-editor/use-edge-highlight";
import { getCategoryColorVar } from "@/lib/workflow-editor/category-colors";
import { getEdgeCurvature } from "@/lib/workflow-editor/edge-curvature";

const IDLE_STROKE = "var(--edge-idle)";

export function WorkflowEdge({
  id,
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  selected = false,
}: EdgeProps) {
  const [hovered, setHovered] = useState(false);
  const { highlighted, sourceCategory, targetCategory } = useEdgeHighlight({
    source,
    target,
    selected,
  });

  const [path] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    curvature: getEdgeCurvature(sourceX, targetX),
  });

  const colored = (highlighted || hovered) && sourceCategory && targetCategory;
  const gradientId = `edge-gradient-${id}`;

  return (
    <g
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {colored && (
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1={sourceX}
            y1={sourceY}
            x2={targetX}
            y2={targetY}
          >
            <stop offset="0%" stopColor={getCategoryColorVar(sourceCategory)} />
            <stop offset="100%" stopColor={getCategoryColorVar(targetCategory)} />
          </linearGradient>
        </defs>
      )}
      <BaseEdge
        path={path}
        interactionWidth={24}
        style={{
          stroke: colored ? `url(#${gradientId})` : IDLE_STROKE,
          strokeWidth: hovered ? 4 : 2,
          cursor: "pointer",
          transition: "stroke-width 150ms ease-out",
        }}
      />
    </g>
  );
}
