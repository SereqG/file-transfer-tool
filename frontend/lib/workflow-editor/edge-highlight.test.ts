import { describe, expect, it } from "vitest";

import { isEdgeHighlighted } from "./edge-highlight";

const idle = { selected: false, sourceSelected: false, targetSelected: false };

describe("isEdgeHighlighted", () => {
  it("is not highlighted when nothing is selected", () => {
    expect(isEdgeHighlighted(idle)).toBe(false);
  });

  it("is highlighted when the edge itself is selected", () => {
    expect(isEdgeHighlighted({ ...idle, selected: true })).toBe(true);
  });

  it("is highlighted when its source node is selected", () => {
    expect(isEdgeHighlighted({ ...idle, sourceSelected: true })).toBe(true);
  });

  it("is highlighted when its target node is selected", () => {
    expect(isEdgeHighlighted({ ...idle, targetSelected: true })).toBe(true);
  });
});
