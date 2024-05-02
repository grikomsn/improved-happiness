"use client";

import imageIcon from "@/app/icon.jpg";
import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import Image from "next/image";
import { ComponentProps } from "react";
import { create } from "zustand";

type Props = Omit<ComponentProps<typeof Image>, "src" | "alt">;

export function AvatarImage({ className, ...props }: Props) {
  return (
    <Image
      alt={defaultMetadata.title}
      className={cn(
        "aspect-square scale-x-110 opacity-0 blur-sm",
        "data-[loaded=true]:scale-100 data-[loaded=true]:opacity-100 data-[loaded=true]:blur-none",
        "transition-all duration-1000 ease-out-quint",
        className,
      )}
      data-loaded={useStore()}
      onLoad={() => useStore.setState(true)}
      src={imageIcon}
      {...props}
    />
  );
}

const useStore = create(() => false);
