import { ChevronDown } from "lucide-react";

import { useCollapsedToggle } from "@/hooks/workflow-editor/use-collapsed-toggle";
import { NODE_CATEGORY_STYLES } from "@/lib/workflow-editor/node-category-styles";
import type { CategoryDefinition } from "@/lib/workflow-editor/types";

import { ToolboxNodeCard } from "./ToolboxNodeCard";

interface ToolboxCategorySectionProps {
  category: CategoryDefinition;
}

export function ToolboxCategorySection({
  category,
}: ToolboxCategorySectionProps) {
  const { collapsed, toggle } = useCollapsedToggle();
  const style = NODE_CATEGORY_STYLES[category.id];

  return (
    <section className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={!collapsed}
        className={`flex w-full flex-col items-center gap-0.5 rounded-md py-1 text-zinc-600 transition-colors dark:text-zinc-300 ${style.accentText}`}
      >
        <span className="flex max-w-full items-center gap-1">
          <span aria-hidden className={`h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} />
          <span className="truncate text-[9px] font-semibold uppercase tracking-tight">
            {category.label}
          </span>
        </span>
        <ChevronDown
          size={12}
          aria-hidden
          className={`transition-transform duration-200 ${
            collapsed ? "-rotate-90" : ""
          }`}
        />
      </button>
      {!collapsed && (
        <div className="flex flex-col items-center gap-2">
          {category.nodes.map((definition) => (
            <ToolboxNodeCard key={definition.id} definition={definition} />
          ))}
        </div>
      )}
    </section>
  );
}
