"use client";

import { Signature } from "@/components/signature";
import imageCover from "@/public/assets/about/cover.jpg";
import { cn } from "@/utils/ui";
import Image from "next/image";
import { ComponentProps } from "react";
import { create } from "zustand";
import styles from "./index.module.css";

type Props = ComponentProps<"div">;

const store = create(() => ({ animated: false }));

export function Polaroid({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "relative max-w-sm",
        "rounded bg-zinc-50 p-4 pb-16",
        "shadow-lg shadow-zinc-300 dark:shadow-zinc-700",
        styles.polaroid,
        className,
      )}
      data-animated={store((state) => state.animated)}
      onAnimationEnd={() => store.setState({ animated: true })}
      {...props}
    >
      <div className="bg-zinc-500">
        <Image
          src={imageCover}
          alt="cover"
          fill={false}
          onLoad={(event) => event.currentTarget.setAttribute("data-loaded", "true")}
          className={cn(
            "aspect-square rounded object-contain object-center",
            "opacity-0 transition-opacity duration-1000 data-[loaded=true]:opacity-100",
          )}
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
