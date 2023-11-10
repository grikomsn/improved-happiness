import imageAvatar from "@/public/assets/home/avatar.jpg";
import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { MobileSheetButton } from "./mobile-sheet-button";
import { NavItem } from "./nav-item";
import { routes } from "./routes";
import { navbarContainerClassNames } from "./styles";
import { ThemeButton } from "./theme-button";

type Props = ComponentPropsWithoutRef<"nav">;

export function Navbar({ className, ...props }: Props) {
  return (
    <nav
      className={cn(
        "container flex items-center gap-x-2 py-4 text-sm",
        "pointer-events-none [&>*]:pointer-events-auto",
        className,
      )}
      {...props}
    >
      <Link
        href="/"
        className="max-sm:hidden"
      >
        <Image
          src={imageAvatar}
          alt={defaultMetadata.title}
          className="h-9 w-9 rounded-full border border-neutral-500/25 shadow-md"
        />
      </Link>
      <ul className={navbarContainerClassNames}>
        {routes.map((route, i) => (
          <li
            key={i}
            className="max-sm:hidden"
          >
            <NavItem {...route} />
          </li>
        ))}
        <li className="sm:hidden">
          <MobileSheetButton />
        </li>
      </ul>
      <div className={cn(navbarContainerClassNames, "px-2")}>
        <ThemeButton />
      </div>
    </nav>
  );
}
