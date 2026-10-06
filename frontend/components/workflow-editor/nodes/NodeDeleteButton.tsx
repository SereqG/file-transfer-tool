import { useReactFlow } from "@xyflow/react";
import { Trash2 } from "lucide-react";

interface NodeDeleteButtonProps {
  nodeId: string;
  visible: boolean;
}

export function NodeDeleteButton({ nodeId, visible }: NodeDeleteButtonProps) {
  const { deleteElements } = useReactFlow();

  return (
    <button
      type="button"
      aria-label="Delete node"
      onClick={(event) => {
        event.stopPropagation();
        void deleteElements({ nodes: [{ id: nodeId }] });
      }}
      className={`nodrag absolute -right-2 -top-2 z-10 flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-full border-2 border-red-500 bg-white text-red-500 shadow-md transition duration-150 hover:scale-125 hover:bg-red-500 hover:text-white hover:shadow-[0_0_12px_rgba(239,68,68,0.6)] group-hover:opacity-100 dark:bg-zinc-900 dark:hover:bg-red-500 motion-reduce:transition-none motion-reduce:hover:scale-100 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Trash2 size={11} aria-hidden />
    </button>
  );
}
