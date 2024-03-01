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
      const els = document.querySelectorAll<HTMLElement>(
        "[data-stagger-lines], [data-stagger-children], [data-stagger]",
      );
      const newEls: Element[] = [];
      const revertFns: Function[] = [];
      els.forEach((el) => {
        if (el.dataset.staggerChildren) {
          newEls.push(...el.children);
        }
        if (el.dataset.staggerLines) {
          const splits = new SplitType(el, { types: "lines" });
          splits.lines && (newEls.push(...splits.lines), revertFns.push(splits.revert));
        }
        if (el.dataset.stagger) {
          newEls.push(el);
        }
      });
      tl.current.fromTo(newEls, tweenVars.from, tweenVars.to).then(() => {
        revertFns.forEach((fn) => fn());
        visited.add(pathname);
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
