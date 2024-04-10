"use client";

import { cn } from "@/utils/ui";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { navbarContainerClassNames, navbarItemClassNames } from "./navbar/classnames";

export function TopScroller() {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!buttonRef.current) return;
      if (window.scrollY > 0) {
        buttonRef.current.dataset.visible = "true";
      } else {
        buttonRef.current.dataset.visible = "false";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-10",
        "opacity-0 data-[visible=true]:opacity-100",
        "translate-y-3 transform-gpu transition data-[visible=true]:translate-y-0",
      )}
      data-visible="false"
      ref={buttonRef}
    >
      <div className="pointer-events-auto isolate flex items-center justify-center py-4 text-sm">
        <div className={navbarContainerClassNames}>
          <button
            className={cn(navbarItemClassNames, "flex items-center space-x-1 text-sm")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span>Back to top</span>
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
