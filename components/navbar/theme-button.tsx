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
import { navbarItemClassNames } from "./styles";

type Props = ComponentPropsWithoutRef<"button">;

export function ThemeButton({ className, ...props }: Props) {
  const { setTheme, themes, theme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(navbarItemClassNames, className)}
          aria-label="Change theme"
          {...props}
        >
          <SunIcon className="h-4 w-4 dark:hidden" />
          <MoonIcon className="hidden h-4 w-4 dark:block" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8}>
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={setTheme}
        >
          {themes.map((t) => (
            <DropdownMenuRadioItem
              key={t}
              value={t}
              className="capitalize"
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
