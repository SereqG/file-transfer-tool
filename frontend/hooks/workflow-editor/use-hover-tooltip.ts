import { useCallback, useRef, useState } from "react";

interface TooltipPosition {
  top: number;
  left: number;
}

export function useHoverTooltip<T extends HTMLElement>() {
  const anchorRef = useRef<T | null>(null);
  const [position, setPosition] = useState<TooltipPosition | null>(null);

  const show = useCallback(() => {
    const rect = anchorRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({ top: rect.top + rect.height / 2, left: rect.right + 10 });
  }, []);

  const hide = useCallback(() => {
    setPosition(null);
  }, []);

  return { anchorRef, position, show, hide };
}
