interface EdgeSelectionState {
  selected: boolean;
  sourceSelected: boolean;
  targetSelected: boolean;
}

export function isEdgeHighlighted({
  selected,
  sourceSelected,
  targetSelected,
}: EdgeSelectionState): boolean {
  return selected || sourceSelected || targetSelected;
}
