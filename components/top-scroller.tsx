"use client";

import { cn } from "@/utils/ui";
import { ArrowUpIcon } from "lucide-react";
import { ComponentProps, useEffect, useRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type Props = ComponentProps<"div">;

export function TopScroller(props: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={cn(
              "z-10 float-right h-9 w-9 rounded-full data-[visible=true]:pointer-events-auto",
              "flex items-center justify-center",
              "border border-neutral-500/25 bg-neutral-100 shadow-lg hover:text-amber-600 dark:bg-neutral-800 dark:hover:text-amber-500",
              "opacity-0 data-[visible=true]:opacity-100",
              "translate-y-3 transform-gpu transition data-[visible=true]:translate-y-0",
            )}
            data-visible="false"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            ref={buttonRef}
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left">Back to top</TooltipContent>
      </Tooltip>
    </div>
  );
}
