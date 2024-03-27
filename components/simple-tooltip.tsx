import type { TooltipContentProps, TooltipProps, TooltipTriggerProps } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type Props = TooltipProps & {
  label?: ReactNode;
  _content?: TooltipContentProps;
  _trigger?: TooltipTriggerProps;
};

export function SimpleTooltip({ children, label, _trigger, _content, ...props }: Props) {
  if (!label) {
    return children;
  }
  return (
    <Tooltip {...props}>
      <TooltipTrigger
        asChild
        {..._trigger}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent
        sideOffset={16}
        className="max-md:hidden"
        {..._content}
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
