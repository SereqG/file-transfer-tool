import { useCallback, useState } from "react";

export function useCollapsedToggle(initial = false) {
  const [collapsed, setCollapsed] = useState(initial);

  const toggle = useCallback(() => {
    setCollapsed((value) => !value);
  }, []);

  return { collapsed, toggle };
}
