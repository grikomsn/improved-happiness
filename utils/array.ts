export function range<T>(length: number, fn: (i: number) => T) {
  return Array.from({ length }, (_, i) => fn(i));
}
