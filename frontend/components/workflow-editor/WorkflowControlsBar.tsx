import { useViewportControls } from "@/hooks/workflow-editor/use-viewport-controls";

const BUTTON_CLASS =
  "flex h-8 w-8 items-center justify-center rounded-full text-base font-medium text-zinc-700 transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:text-zinc-200 dark:hover:bg-violet-400/10 dark:hover:text-violet-300";

export function WorkflowControlsBar() {
  const { zoomIn, zoomOut, resetViewport } = useViewportControls();

  return (
    <div className="flex items-center gap-1 rounded-full border border-blue-200/60 bg-white/90 px-2 py-1.5 shadow-sm backdrop-blur dark:border-violet-900/60 dark:bg-black/90">
      <button
        type="button"
        onClick={zoomOut}
        aria-label="Zoom out"
        className={BUTTON_CLASS}
      >
        −
      </button>
      <button
        type="button"
        onClick={resetViewport}
        aria-label="Reset view"
        className={BUTTON_CLASS}
      >
        ⟲
      </button>
      <button
        type="button"
        onClick={zoomIn}
        aria-label="Zoom in"
        className={BUTTON_CLASS}
      >
        +
      </button>
    </div>
  );
}
