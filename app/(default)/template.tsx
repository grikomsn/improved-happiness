"use client";

import { createTweenVars } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { ReactNode, useRef } from "react";
import SplitType from "split-type";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const tl = useRef(gsap.timeline());

  useGSAP(
    () => {
      if (visited.has(pathname)) return;
      if (tl.current.isActive()) {
        tl.current.kill();
        tl.current = gsap.timeline();
      }
      const els = document.querySelectorAll<HTMLElement>("[data-stagger-lines], [data-stagger-children]");
      els.forEach((el) => {
        if (el.dataset.staggerChildren) {
          tl.current.fromTo(el.children, tweenVars.from, tweenVars.to).then(() => {
            visited.add(pathname);
          });
        }
        if (el.dataset.staggerLines) {
          const splits = new SplitType(el, { types: "lines" });
          tl.current.fromTo(splits.lines, tweenVars.from, tweenVars.to).then(() => {
            splits.revert();
            visited.add(pathname);
          });
        }
      });
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
