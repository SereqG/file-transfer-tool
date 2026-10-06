import { useCallback, useRef, useState } from "react";

interface TooltipPosition {
  top: number;
  left: number;
}

export type TooltipPlacement = "right" | "top";

export function useHoverTooltip<T extends HTMLElement>(
  placement: TooltipPlacement = "right",
) {
  const anchorRef = useRef<T | null>(null);
  const [position, setPosition] = useState<TooltipPosition | null>(null);

  const show = useCallback(() => {
    const rect = anchorRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(
      placement === "top"
        ? { top: rect.top - 8, left: rect.left + rect.width / 2 }
        : { top: rect.top + rect.height / 2, left: rect.right + 10 },
    );
  }, [placement]);

  const hide = useCallback(() => {
    setPosition(null);
  }, []);

  return { anchorRef, position, show, hide };
}
