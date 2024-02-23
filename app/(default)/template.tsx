"use client";

import { createTweenVars } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import SplitType from "split-type";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (visited.has(pathname)) return;
      {
        const els = document.querySelectorAll<HTMLElement>("[data-split-lines]");
        els.forEach((el) => {
          const text = new SplitType(el, { types: "lines" });
          gsap.fromTo(text.lines, tweenVars.from, tweenVars.to).then(() => visited.add(pathname));
        });
      }
      {
        const els = document.querySelectorAll<HTMLElement>("[data-stagger-children]");
        els.forEach((el) => {
          gsap.fromTo(el.children, tweenVars.from, tweenVars.to).then(() => visited.add(pathname));
        });
      }
    },
    {
      dependencies: [pathname],
    },
  );

  return <>{children}</>;
}

const visited = new Set<string>();

const tweenVars = createTweenVars({
  from: {
    opacity: 0,
    y: -4,
  },
  to: {
    opacity: 1,
    y: 0,
    stagger: { each: 0.05, ease: "power1.out" },
  },
});
