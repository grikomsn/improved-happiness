import { cn } from "@/utils/ui";

export const navbarHomeContainer = cn(
  "h-9 transition-all duration-300 ease-out max-sm:hidden",
  "mr-0 w-0 opacity-0",
  "data-[visible=true]:mr-4 data-[visible=true]:w-9 data-[visible=true]:opacity-100",
);

export const navbarHomeItem = cn(
  "relative block h-9 w-9 overflow-hidden transition",
  "bg-zinc-100/90 backdrop-blur-sm dark:bg-zinc-900/90",
  "rounded-full border border-zinc-500/25 shadow-md",
  "hover:border-primary-600/50 dark:hover:border-primary-500/50",
);

export const navbarRoot = cn(
  "pointer-events-none fixed inset-x-0 z-10",
  "max-sm:bottom-0 sm:top-0",
  //
);

export const navbarContainer = cn(
  "isolate flex items-center justify-center py-4 text-sm",
  "pointer-events-none [&>*]:pointer-events-auto",
);

export const navbarRoutesContainer = cn(
  "flex h-9 items-stretch justify-center space-x-2 px-4 transition-colors max-sm:px-2",
  "bg-zinc-100/90 backdrop-blur-sm dark:bg-zinc-900/90",
  "rounded-full border border-zinc-500/25 shadow-md",
);

export const navbarRouteItem = cn(
  "relative flex h-full items-center px-2",
  "transition-colors hover:text-primary-600 dark:hover:text-primary-500",

  "before:absolute before:inset-x-0 before:h-px before:rounded-t-full",
  "before:-bottom-px hover:before:bottom-0",
  "before:opacity-0 hover:before:opacity-100",
  "before:transition-all before:duration-200 before:ease-out",

  "hover:before:bg-primary-600 dark:hover:before:bg-primary-500",
  "before:shadow-[0_1px_4px] before:shadow-primary-600 dark:before:shadow-primary-500",

  "after:absolute after:inset-0 hover:after:-inset-1",
);

export const navbarBlurItem = cn(
  "absolute inset-0 h-full w-full sm:rotate-180",
  //
);