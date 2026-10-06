interface ConnectionEnds {
  source: string;
  target: string;
}

export function isConnectionAllowed({ source, target }: ConnectionEnds): boolean {
  return source !== target;
}
