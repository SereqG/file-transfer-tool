import { describe, expect, it } from "vitest";

import { isConnectionAllowed } from "./connection-rules";

describe("isConnectionAllowed", () => {
  it("rejects a node connected to itself", () => {
    expect(isConnectionAllowed({ source: "a", target: "a" })).toBe(false);
  });

  it("accepts a connection between two different nodes", () => {
    expect(isConnectionAllowed({ source: "a", target: "b" })).toBe(true);
  });

  it("accepts a backward connection", () => {
    expect(isConnectionAllowed({ source: "b", target: "a" })).toBe(true);
  });
});
