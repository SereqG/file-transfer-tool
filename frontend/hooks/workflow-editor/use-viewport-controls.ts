import { useCallback } from "react";
import { useReactFlow } from "@xyflow/react";

import {
  INITIAL_VIEWPORT,
  VIEWPORT_TRANSITION_MS,
} from "@/lib/workflow-editor/constants";

export function useViewportControls() {
  const { zoomIn, zoomOut, setViewport } = useReactFlow();

  const handleZoomIn = useCallback(() => {
    void zoomIn({ duration: VIEWPORT_TRANSITION_MS });
  }, [zoomIn]);

  const handleZoomOut = useCallback(() => {
    void zoomOut({ duration: VIEWPORT_TRANSITION_MS });
  }, [zoomOut]);

  const resetViewport = useCallback(() => {
    void setViewport(INITIAL_VIEWPORT, { duration: VIEWPORT_TRANSITION_MS });
  }, [setViewport]);

  return { zoomIn: handleZoomIn, zoomOut: handleZoomOut, resetViewport };
}
