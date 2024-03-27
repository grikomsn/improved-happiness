import { cn } from "@/utils/ui";
import { ComponentProps } from "react";

type Props = ComponentProps<"section"> & {
  enableNavShadow?: boolean;
};

export function ContainerSection({ enableNavShadow = false, className, ...props }: Props) {
  return (
    <section
      className={cn(
        "container py-8 lg:py-16",
        enableNavShadow
          ? [
              "before:fixed before:inset-x-0 before:bottom-0 before:z-10 before:h-24",
              "before:bg-gradient-to-t before:from-zinc-50 before:to-transparent dark:before:from-zinc-900",
              "before:pointer-events-none",
            ]
          : null,
        className,
      )}
      {...props}
    />
  );
}
