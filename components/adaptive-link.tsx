import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, useMemo } from "react";

type Props = LinkProps & Omit<ComponentPropsWithoutRef<"a">, "href"> & { isExternal?: boolean };

export function AdaptiveLink({ href, isExternal, ...props }: Props) {
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
        target: "_blank",
        rel: "noopener noreferrer",
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
