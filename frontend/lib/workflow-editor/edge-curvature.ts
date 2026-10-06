const FORWARD_CURVATURE = 0.25;
const BACKWARD_CURVATURE = 0.9;

export function getEdgeCurvature(sourceX: number, targetX: number): number {
  return targetX >= sourceX ? FORWARD_CURVATURE : BACKWARD_CURVATURE;
}
