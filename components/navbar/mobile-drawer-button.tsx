"use client";

import { cn } from "@/utils/ui";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { AdaptiveLink } from "../adaptive-link";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { routes } from "./routes";
import { navbarRouteItem } from "./styles";

type Props = ComponentPropsWithoutRef<"button">;

export function MobileDrawerButton({ className, ...props }: Props) {
  const [state, setState] = useState(() => false);
  const close = () => setState(false);

  const pathname = usePathname();
  useEffect(() => close(), [pathname]);

  return (
    <Drawer
      dismissible
      fixed
      modal
      onOpenChange={setState}
      open={state}
      preventScrollRestoration
      shouldScaleBackground={false}
    >
      <DrawerTrigger asChild>
        <button
          className={cn(navbarRouteItem, className)}
          {...props}
        >
          Open Menu
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <ul
          className={cn(
            "mx-auto w-full max-w-sm py-8",
            "flex flex-col items-center justify-center text-center",
            "text-xl [&_a]:block [&_a]:p-4",
          )}
        >
          {routes.map((route, i) => (
            <li key={i}>
              <AdaptiveLink
                {...route}
                className={cn(
                  (route.exact ? pathname === route.href : pathname.startsWith(route.href)) &&
                    "!text-primary-600 dark:!text-primary-500",
                )}
                onClick={close}
              />
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
