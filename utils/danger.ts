import type { CSSProperties } from "react";

export function as<T = any>(value: any) {
  return value as T;
}

export function style<T extends CSSProperties & Record<string, unknown>>(css: T) {
  return css as CSSProperties;
}
