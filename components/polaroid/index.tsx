"use client";

import { Signature } from "@/components/signature";
import imageCover from "@/public/assets/about/cover.jpg";
import { cn } from "@/utils/ui";
import Image from "next/image";
import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

export function Polaroid({ className, ...props }: Props) {
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
          src={imageCover}
          alt="cover"
          fill={false}
          className="aspect-square rounded object-contain object-center"
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
