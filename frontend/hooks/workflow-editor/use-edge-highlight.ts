import { useStore } from "@xyflow/react";

import { isEdgeHighlighted } from "@/lib/workflow-editor/edge-highlight";
import type {
  NodeCategoryId,
  WorkflowNode,
} from "@/lib/workflow-editor/types";

interface UseEdgeHighlightArgs {
  source: string;
  target: string;
  selected: boolean;
}

export function useEdgeHighlight({
  source,
  target,
  selected,
}: UseEdgeHighlightArgs) {
  const sourceNode = useStore((s) => s.nodeLookup.get(source));
  const targetNode = useStore((s) => s.nodeLookup.get(target));

  const sourceCategory = (sourceNode as WorkflowNode | undefined)?.data
    .category as NodeCategoryId | undefined;
  const targetCategory = (targetNode as WorkflowNode | undefined)?.data
    .category as NodeCategoryId | undefined;

  const highlighted = isEdgeHighlighted({
    selected,
    sourceSelected: sourceNode?.selected ?? false,
    targetSelected: targetNode?.selected ?? false,
  });

  return { highlighted, sourceCategory, targetCategory };
}
