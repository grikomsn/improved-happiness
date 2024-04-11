import imageAvatar from "@/app/apple-icon.png";
import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import Image from "next/image";
import Link from "next/link";
import { navbarContainerClassNames } from "./classnames";
import { MobileDrawerButton } from "./mobile-drawer-button";
import { NavItem } from "./nav-item";
import { routes } from "./routes";
import { ThemeButton } from "./theme-button";

export function Navbar() {
  return (
    <div className="pointer-events-none sticky inset-x-0 z-10 max-md:fixed max-md:bottom-0 md:top-0">
      {Array(10)
        .fill(1)
        .map((v, i) => {
          const blurDef = `blur(${v + i}px)`;
          const maskDef = `linear-gradient(to top, rgba(0,0,0,0) ${i * 10}%, rgba(0,0,0,1) ${(v + i) * 10}%)`;
          return (
            <div
              key={i}
              className="absolute inset-0 h-full w-full max-md:rotate-180"
              style={{
                backdropFilter: blurDef,
                WebkitBackdropFilter: blurDef,
                maskImage: maskDef,
                WebkitMaskImage: maskDef,
              }}
            />
          );
        })}
      <nav
        className={cn(
          "isolate flex items-center justify-center gap-x-2 py-4 text-sm",
          "pointer-events-none [&>*]:pointer-events-auto",
        )}
      >
        <Link
          href="/"
          className={cn(
            "group overflow-hidden max-sm:hidden",
            "h-9 w-9 rounded-full border border-zinc-500/25 shadow-md",
            "bg-zinc-500/25 transition hover:bg-primary-500/50",
          )}
          role="group"
        >
          <Image
            src={imageAvatar}
            alt={defaultMetadata.title}
            className="pointer-events-none"
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
            <MobileDrawerButton />
          </li>
          <li className="h-4 w-px bg-zinc-500/50" />
          <ThemeButton />
        </ul>
      </nav>
    </div>
  );
}
