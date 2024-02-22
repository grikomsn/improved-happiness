"use client";

import { ReactNode, useEffect, useState } from "react";

interface Props {
  query: string;
  children: ReactNode | ((args: { matches: boolean }) => ReactNode);
  defaultState?: boolean;
}

export function MediaQuery({ query, children, defaultState = false }: Props) {
  const [matches, setMatches] = useState(() => defaultState);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    function stateListener(event: MediaQueryListEvent) {
      return setMatches(event.matches);
    }

    media.addEventListener("change", stateListener);
    return () => {
      media.removeEventListener("change", stateListener);
    };
  }, [query]);

  if (typeof children === "function") {
    return <>{children({ matches })}</>;
  }

  return <>{matches && children}</>;
}
