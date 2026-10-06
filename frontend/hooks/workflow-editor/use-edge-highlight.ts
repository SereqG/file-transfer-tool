import { useStore } from "@xyflow/react";

import { isEdgeHighlighted } from "@/lib/workflow-editor/edge-highlight";
import type { NodeCategoryId } from "@/lib/workflow-editor/types";

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
  const sourceCategory = useStore(
    (s) =>
      s.nodeLookup.get(source)?.data.category as NodeCategoryId | undefined,
  );
  const targetCategory = useStore(
    (s) =>
      s.nodeLookup.get(target)?.data.category as NodeCategoryId | undefined,
  );
  const sourceSelected = useStore(
    (s) => s.nodeLookup.get(source)?.selected ?? false,
  );
  const targetSelected = useStore(
    (s) => s.nodeLookup.get(target)?.selected ?? false,
  );

  const highlighted = isEdgeHighlighted({
    selected,
    sourceSelected,
    targetSelected,
  });

  return { highlighted, sourceCategory, targetCategory };
}
