import { cn } from "@/utils/ui";

export const navbarContainerClassNames = cn(
  "flex items-center justify-center px-4",
  "bg-zinc-100/80 backdrop-blur-[2px] dark:bg-zinc-900/80",
  "rounded-full border border-zinc-500/25 shadow-md",
);

export const navbarItemClassNames = cn(
  "relative block h-9 p-2",
  "transition-colors hover:text-primary-600 dark:hover:text-primary-500",

  "before:absolute before:inset-x-2 before:h-px before:rounded-t-full",
  "before:-bottom-px hover:before:bottom-0",
  "before:opacity-0 hover:before:opacity-100",
  "before:transition-all before:duration-200 before:ease-out",

  "hover:before:bg-primary-600 dark:hover:before:bg-primary-500",
  "before:shadow-[0_1px_4px] before:shadow-primary-600 dark:before:shadow-primary-500",

  "after:absolute after:inset-0 hover:after:-inset-1",
);
