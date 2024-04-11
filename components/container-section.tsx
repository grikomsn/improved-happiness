import { cn } from "@/utils/ui";
import { ComponentProps } from "react";

export function ContainerSection({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn("pt-8", className)}
      {...props}
    />
  );
}
