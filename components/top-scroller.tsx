"use client";

import { cn } from "@/utils/ui";
import { ArrowUpIcon } from "lucide-react";
import { ComponentProps, useEffect, useRef } from "react";
import { navbarContainerClassNames, navbarItemClassNames } from "./navbar/styles";

type Props = ComponentProps<"div">;

export function TopScroller(props: Props) {
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
    <div {...props}>
      <div
        className={cn(
          navbarContainerClassNames,
          "px-2",
          "data-[visible=true]:pointer-events-auto",
          "opacity-0 data-[visible=true]:opacity-100",
          "translate-y-3 transform-gpu transition data-[visible=true]:translate-y-0",
        )}
        ref={buttonRef}
        data-visible="false"
      >
        <button
          className={cn(navbarItemClassNames, "flex items-center space-x-1 text-sm")}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Back to top</span>
          <ArrowUpIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
