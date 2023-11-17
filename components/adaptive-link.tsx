import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, useMemo } from "react";

type Props = LinkProps & Omit<ComponentPropsWithoutRef<"a">, "href"> & { isExternal?: boolean };

export function AdaptiveLink({ href, isExternal, rel = "", target, ...props }: Props) {
  const isActuallyExternal = useMemo(() => {
    if (typeof isExternal === "boolean") {
      return isExternal;
    }
    if (typeof href === "string") {
      return href.startsWith("http");
    }
    if (typeof href === "object") {
      return href.href?.startsWith("http");
    }
  }, [href, isExternal]);

  const externalProps = isActuallyExternal
    ? {
        target: target || "_blank",
        rel: [...new Set(["noopener", "noreferrer", ...rel.split(" ")])].filter(Boolean).join(" "),
      }
    : {};

  return (
    <Link
      href={href}
      {...externalProps}
      {...props}
    />
  );
}
