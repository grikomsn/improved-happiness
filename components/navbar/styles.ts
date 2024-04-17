import { cn } from "@/utils/ui";

export const navbarHomeContainer = cn(
  "ease-out-quint h-9 transition-all duration-500 max-sm:hidden",
  "mr-0 w-0 opacity-0 blur-md",
  "data-[visible=true]:mr-2 data-[visible=true]:w-9 data-[visible=true]:opacity-100 data-[visible=true]:blur-none",
);

export const navbarHomeItem = cn(
  "relative block h-9 w-9 overflow-hidden transition-colors",
  "shadow-md backdrop-blur-sm",
  "rounded-full border border-zinc-500/25",
  "hover:border-primary-600 dark:hover:border-primary-500",
);

export const navbarRoot = cn(
  "fixed inset-x-0 z-10",
  "max-sm:bottom-0 sm:top-0",
  //
);

export const navbarContainer = cn(
  "isolate flex items-center justify-center py-4 text-sm",
  //
);

export const navbarRoutesContainer = cn(
  "flex h-9 items-stretch justify-center space-x-2 px-4 transition-colors max-sm:px-2",
  "bg-zinc-100/90 shadow-md backdrop-blur-sm dark:bg-zinc-900/90",
  "rounded-full border border-zinc-500/25",
);

export const navbarRouteItem = cn(
  "relative flex h-full items-center px-2",
  "transition-colors hover:text-primary-600 dark:hover:text-primary-500",

  "before:absolute before:inset-x-0 before:h-px before:rounded-t-full",
  "before:-bottom-px hover:before:bottom-0",
  "before:opacity-0 hover:before:opacity-100",
  "before:ease-out-quint before:transition-all before:duration-200",

  "hover:before:bg-primary-600 dark:hover:before:bg-primary-500",
  "before:shadow-[0_1px_4px] before:shadow-primary-600 dark:before:shadow-primary-500",

  "after:absolute after:inset-0 hover:after:-inset-1",
);

export const navbarBlurItem = cn(
  "absolute inset-0 h-full w-full sm:rotate-180",
  //
);
