"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { tinykeys } from "@/lib/tinykeys";
import slugify from "@sindresorhus/slugify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { create } from "zustand";
import { routeGroups } from "./routes";

export function Launchpad() {
  const { open } = useStore();
  useEffect(() => {
    if (open) return;
    return tinykeys(window, {
      "Meta+K": (event) => launchpad.open(),
      "Shift+Space": (event) => (event.preventDefault(), launchpad.open()),
    });
  }, [open]);

  const router = useRouter();

  return (
    <CommandDialog
      open={open}
      onOpenChange={launchpad.set}
      _command={{
        loop: true,
      }}
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {routeGroups.map(({ heading, items }) => (
          <CommandGroup
            key={heading}
            heading={heading}
          >
            {items.map(({ Icon, children, href }) => {
              const key = slugify(children);
              return (
                <CommandItem
                  key={key}
                  onSelect={() => (router.push(href), launchpad.close())}
                  value={key}
                >
                  <Icon className="mr-2" />
                  <span>{children}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}

const useStore = create(() => ({
  open: false,
}));

export const launchpad = {
  open: () => useStore.setState({ open: true }),
  close: () => useStore.setState({ open: false }),
  toggle: () => useStore.setState((state) => ({ open: !state.open })),
  set: (open: boolean) => useStore.setState({ open }),
};
