// https://github.com/pmndrs/tunnel-rat/blob/main/src/utils.ts

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export function useMutableCallback<T>(fn: T) {
  const ref = useRef<T>(fn);
  useIsomorphicLayoutEffect(() => void (ref.current = fn), [fn]);
  return ref;
}
