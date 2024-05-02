"use client";

import { Signature } from "@/components/signature";
import imageCover from "@/public/assets/about/cover.jpg";
import { cn } from "@/utils/ui";
import Image from "next/image";
import { ComponentProps } from "react";
import { create } from "zustand";

export function Polaroid({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative",
        "rounded bg-zinc-50 p-4 pb-16",
        "shadow-lg shadow-zinc-300 dark:shadow-zinc-700",
        className,
      )}
      {...props}
    >
      <div className="bg-zinc-500">
        <Image
          alt="cover"
          className={cn(
            "rounded object-contain object-center",
            "aspect-square opacity-0 blur-sm",
            "data-[loaded=true]:scale-100 data-[loaded=true]:opacity-100 data-[loaded=true]:blur-none",
            "transition-all duration-1000 ease-out-quint",
          )}
          data-loaded={useStore()}
          fill={false}
          onLoad={() => useStore.setState(true)}
          src={imageCover}
        />
      </div>
      <Signature
        className={cn(
          "absolute bottom-6 right-6 w-36 max-w-full",
          "fill-zinc-800 stroke-zinc-800 stroke-2",
          "-rotate-6",
        )}
      />
    </div>
  );
}

const useStore = create(() => false);
