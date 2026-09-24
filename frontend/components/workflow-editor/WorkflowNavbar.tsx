import { Workflow } from "lucide-react";

export function WorkflowNavbar() {
  return (
    <header className="flex h-14 w-full shrink-0 items-center gap-2 border-b border-black/[.08] bg-gradient-to-r from-blue-600 to-violet-600 px-4 text-white shadow-sm dark:border-white/[.145]">
      <Workflow size={18} aria-hidden />
      <span className="text-sm font-semibold tracking-wide">
        Workflow Editor
      </span>
    </header>
  );
}
