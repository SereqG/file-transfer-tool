import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { useCollapsedToggle } from "@/hooks/workflow-editor/use-collapsed-toggle";
import { CATEGORIES } from "@/lib/workflow-editor/node-catalog";

import { ToolboxCategorySection } from "./ToolboxCategorySection";

export function WorkflowToolbox() {
  const { collapsed, toggle } = useCollapsedToggle();

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label="Expand nodes panel"
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-white/40 bg-white/30 text-blue-600 shadow-xl backdrop-blur-xl transition-transform duration-200 ease-out hover:scale-110 active:scale-95 dark:border-white/10 dark:bg-black/30 dark:text-violet-400"
      >
        <PanelLeftOpen size={18} aria-hidden />
      </button>
    );
  }

  return (
    <aside className="absolute left-4 top-1/2 z-10 flex max-h-[70vh] w-20 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/30 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/30">
      <button
        type="button"
        onClick={toggle}
        aria-label="Collapse nodes panel"
        className="flex h-7 w-full shrink-0 items-center justify-center border-b border-white/20 text-zinc-500 transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-violet-400/10 dark:hover:text-violet-300"
      >
        <PanelLeftClose size={14} aria-hidden />
      </button>
      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-2.5">
        {CATEGORIES.map((category) => (
          <ToolboxCategorySection key={category.id} category={category} />
        ))}
      </div>
    </aside>
  );
}
