"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/utils/ui";
import { DropdownMenuItemIndicator } from "@radix-ui/react-dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ComponentPropsWithoutRef } from "react";
import { navbarItemClassNames } from "./classnames";

type Props = ComponentPropsWithoutRef<"button">;

export function ThemeButton({ className, ...props }: Props) {
  const { setTheme, themes, theme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Change theme"
          className={cn(navbarItemClassNames, className)}
          {...props}
        >
          <SunIcon className="h-4 w-4 dark:hidden" />
          <MoonIcon className="hidden h-4 w-4 dark:block" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="rounded-lg"
        sideOffset={16}
      >
        <DropdownMenuRadioGroup
          onValueChange={setTheme}
          value={theme}
        >
          {themes.map((t) => (
            <DropdownMenuRadioItem
              className="capitalize"
              key={t}
              value={t}
            >
              <DropdownMenuItemIndicator />
              {t}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
