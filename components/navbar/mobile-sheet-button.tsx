"use client";

import { cn } from "@/utils/ui";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { AdaptiveLink } from "../adaptive-link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { routes } from "./routes";
import { navbarItemClassNames } from "./styles";

type Props = ComponentPropsWithoutRef<"button">;

export function MobileSheetButton({ className, ...props }: Props) {
  const [state, setState] = useState(() => false);
  const close = () => setState(false);

  const pathname = usePathname();
  useEffect(() => close(), [pathname]);

  return (
    <Sheet
      open={state}
      onOpenChange={setState}
    >
      <SheetTrigger asChild>
        <button
          className={cn(navbarItemClassNames, className)}
          {...props}
        >
          Open Menu
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full !border-none !bg-opacity-90"
      >
        <ul
          className={cn(
            "h-full w-full",
            "flex flex-col items-center justify-center text-center",
            "text-xl [&_a]:block [&_a]:p-4",
          )}
        >
          <li>
            <AdaptiveLink
              href="/"
              onClick={close}
            >
              Home
            </AdaptiveLink>
          </li>
          {routes.map((route, i) => (
            <li key={i}>
              <AdaptiveLink
                {...route}
                className={cn(pathname.startsWith(route.href) && "!text-primary-600 dark:!text-primary-500")}
                onClick={close}
              />
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
