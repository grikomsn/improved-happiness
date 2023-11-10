// https://github.com/pmndrs/tunnel-rat/blob/main/src/utils.ts

import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" && (window.document?.createElement || window.navigator?.product === "ReactNative")
    ? useLayoutEffect
    : useEffect;
