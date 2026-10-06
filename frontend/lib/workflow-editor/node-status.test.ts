import { describe, expect, it } from "vitest";

import { getNodeStatus, getNodeStatusHint } from "./node-status";

describe("getNodeStatus", () => {
  it("has no status for an input node", () => {
    expect(getNodeStatus("input", 0)).toBeNull();
  });

  it("marks a transform node without incoming edges as disconnected", () => {
    expect(getNodeStatus("transform", 0)).toBe("disconnected");
  });

  it("marks an output node without incoming edges as disconnected", () => {
    expect(getNodeStatus("output", 0)).toBe("disconnected");
  });

  it("marks a node with one incoming edge as connected", () => {
    expect(getNodeStatus("transform", 1)).toBe("connected");
  });

  it("keeps a node with several incoming edges connected", () => {
    expect(getNodeStatus("output", 3)).toBe("connected");
  });
});

describe("getNodeStatusHint", () => {
  it("tells a disconnected node how to get an input", () => {
    expect(getNodeStatusHint("disconnected", 0)).toContain("Drag a connection");
  });

  it("confirms the source count for a connected node", () => {
    expect(getNodeStatusHint("connected", 1)).toBe(
      "Receiving data from 1 node.",
    );
    expect(getNodeStatusHint("connected", 3)).toBe(
      "Receiving data from 3 nodes.",
    );
  });
});
