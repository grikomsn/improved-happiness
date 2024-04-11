import { cn } from "@/utils/ui";
import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, useMemo } from "react";

type Props = LinkProps & Omit<ComponentPropsWithoutRef<"a">, "href"> & { isExternal?: boolean };

export function AdaptiveLink({ className, href, isExternal, rel = "", target, ...props }: Props) {
  const isActuallyExternal = useMemo(() => {
    if (typeof isExternal === "boolean") {
      return isExternal;
    }
    if (typeof href === "string") {
      if (href.startsWith("mailto:")) {
        return false;
      }
      return href.startsWith("http");
    }
    if (typeof href === "object") {
      return href.href?.startsWith("http");
    }
  }, [href, isExternal]);

  const externalProps = useMemo(() => {
    if (!isActuallyExternal) return {};
    return {
      rel: mergeRelAttributes("noopener", "noreferrer", rel),
      target: target || "_blank",
    };
  }, [isActuallyExternal, rel, target]);

  return (
    <Link
      className={cn("data-[external=true]:cursor-ne-resize", className)}
      data-external={isActuallyExternal}
      href={href}
      {...externalProps}
      {...props}
    />
  );
}

function mergeRelAttributes(...args: string[]) {
  return [...new Set(args.join(" ").split(" "))].filter(Boolean).join(" ");
}
