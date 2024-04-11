import { cn } from "@/utils/ui";
import { navbarContainerClassNames } from "./classnames";
import { MobileDrawerButton } from "./mobile-drawer-button";
import { NavHome } from "./nav-home";
import { NavItem } from "./nav-item";
import { routes } from "./routes";
import { ThemeButton } from "./theme-button";

export function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10">
      {Array(10)
        .fill(1)
        .map((v, i) => {
          const blurDef = `blur(${v + i}px)`;
          const maskDef = `linear-gradient(to bottom, rgba(0,0,0,0) ${i * 10}%, rgba(0,0,0,1) ${(v + i) * 10}%)`;
          return (
            <div
              className="absolute inset-0 h-full w-full"
              key={i}
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
          "isolate flex items-center justify-center py-4 text-sm",
          "pointer-events-none [&>*]:pointer-events-auto",
        )}
      >
        <NavHome />
        <ul className={navbarContainerClassNames}>
          {routes.slice(1).map((route, i) => (
            <li
              className="max-sm:hidden"
              key={i}
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
