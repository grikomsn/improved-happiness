"use client";

import { Signature } from "@/components/signature";
import imageCover from "@/public/assets/about/cover.jpg";
import { cn } from "@/utils/ui";
import Image from "next/image";
import { ComponentProps } from "react";
import { create } from "zustand";

type Props = ComponentProps<"div">;

const store = create(() => ({ animated: false }));

export function Polaroid({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "relative max-w-sm",
        "rounded bg-neutral-50 p-4 pb-16",
        "rotate-1 transform-gpu motion-safe:data-[animated=false]:animate-polaroid-enter",
        "shadow-lg shadow-neutral-300 dark:shadow-neutral-700",
        className,
      )}
      data-animated={store((state) => state.animated)}
      onAnimationEnd={() => store.setState({ animated: true })}
      {...props}
    >
      <div className="bg-neutral-500">
        <Image
          src={imageCover}
          alt="cover"
          fill={false}
          onLoadingComplete={(ref) => ref.setAttribute("data-loaded", "true")}
          className={cn(
            "aspect-square rounded object-contain object-center",
            "opacity-0 transition-opacity duration-1000 data-[loaded=true]:opacity-100",
          )}
        />
      </div>
      <Signature
        className={cn(
          "absolute bottom-6 right-6 w-36 max-w-full",
          "fill-neutral-800 stroke-neutral-800 stroke-2",
          "-rotate-6 transform-gpu",
        )}
      />
    </div>
  );
}
