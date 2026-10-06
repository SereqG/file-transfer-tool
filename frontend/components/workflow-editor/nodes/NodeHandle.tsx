import { Handle, Position } from "@xyflow/react";

const HANDLE_CLASS =
  "!h-6 !w-6 !border-0 !bg-transparent after:absolute after:left-1/2 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border-2 after:border-white after:bg-[var(--node-color)] after:transition-transform after:duration-150 hover:after:scale-150 [&.connectionindicator]:after:scale-150 dark:after:border-zinc-900 motion-reduce:after:transition-none";

interface NodeHandleProps {
  type: "source" | "target";
}

export function NodeHandle({ type }: NodeHandleProps) {
  return (
    <Handle
      type={type}
      position={type === "target" ? Position.Left : Position.Right}
      className={HANDLE_CLASS}
    />
  );
}
