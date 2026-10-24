export function clamp(value: number, [min, max]: [number, number]): number {
  return Math.min(Math.max(value, min), max);
}

/** Wrap a carousel index in either direction. Call only for a nonempty collection. */
export function wrapIndex(index: number, length: number): number {
  return ((index % length) + length) % length;
}
