import { MobileDrawerButton } from "./mobile-drawer-button";
import { NavHome } from "./nav-home";
import { NavItem } from "./nav-item";
import { routes } from "./routes";
import * as styles from "./styles";
import { ThemeButton } from "./theme-button";

export function Navbar() {
  return (
    <div className={styles.navbarRoot}>
      {Array(10)
        .fill(1)
        .map((v, i) => {
          const blurDef = `blur(${v + i}px)`;
          const maskDef = `linear-gradient(to bottom, rgba(0,0,0,0) ${i * 10}%, rgba(0,0,0,1) ${(v + i) * 10}%)`;
          return (
            <div
              className={styles.navbarBlurItem}
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
      <nav className={styles.navbarContainer}>
        <NavHome />
        <ul className={styles.navbarRoutesContainer}>
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
          <div className="my-2 w-px rounded-full bg-zinc-500/25" />
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}
