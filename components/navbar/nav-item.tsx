"use client";

import { cn } from "@/utils/ui";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";
import { AdaptiveLink } from "../adaptive-link";
import { navbarItemClassNames } from "./styles";

type Props = ComponentPropsWithoutRef<"a">;

export function NavItem({ href = "#", className, ...props }: Props) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return (
    <AdaptiveLink
      href={href}
      className={cn(
        navbarItemClassNames,
        isActive && "!text-primary-600 dark:!text-primary-500",
        className,
        //
      )}
      {...props}
    />
  );
}
