"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AvatarImage } from "../avatar-image";
import * as styles from "./styles";

export function NavHome() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div
      className={styles.navbarHomeContainer}
      data-visible={!isHome}
    >
      <Link
        className={styles.navbarHomeItem}
        href="/"
      >
        <AvatarImage className="pointer-events-none" />
      </Link>
    </div>
  );
}
