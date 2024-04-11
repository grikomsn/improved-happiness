"use client";

import imageAvatar from "@/app/apple-icon.png";
import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavHome() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div
      className={cn(
        "relative h-9 transition-all duration-300 ease-out max-sm:hidden",
        isHome ? "mr-0 w-0 opacity-0" : "mr-2 w-9 opacity-100",
        //
      )}
    >
      <Link
        className={cn(
          "block h-9 w-9 overflow-hidden transition",
          "bg-zinc-100/80 backdrop-blur-sm dark:bg-zinc-900/80",
          "hover:bg-primary-500/50 dark:hover:bg-primary-500/50",
          "rounded-full border border-zinc-500/25 shadow-md",
        )}
        href="/"
      >
        <Image
          alt={defaultMetadata.title}
          className="pointer-events-none"
          src={imageAvatar}
        />
      </Link>
    </div>
  );
}
