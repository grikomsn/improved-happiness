"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { tinykeys } from "tinykeys";
import { create } from "zustand";
import { routes } from "./navbar/routes";

export function Launchpad() {
  const { open } = useStore();
  useEffect(() => {
    return tinykeys(window, {
      "Meta+k": (event) => launchpad.open(),
    });
  }, []);

  const router = useRouter();

  return (
    <CommandDialog
      open={open}
      onOpenChange={launchpad.set}
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {routesWithHome.map((route, i) => (
            <CommandItem
              key={`route-${i}`}
              onSelect={() => (router.push(route.href), launchpad.close())}
            >
              <ArrowRightIcon className="mr-2" />
              <span>{route.children}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

const routesWithHome = [{ children: "Home", href: "/" }, ...routes];

const useStore = create(() => ({
  open: false,
}));

export const launchpad = {
  open: () => useStore.setState({ open: true }),
  close: () => useStore.setState({ open: false }),
  toggle: () => useStore.setState((state) => ({ open: !state.open })),
  set: (open: boolean) => useStore.setState({ open }),
};
