"use client";

import imageAvatar from "@/app/icon.png";
import { defaultMetadata } from "@/site.config";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        <Image
          alt={defaultMetadata.title}
          className="pointer-events-none"
          src={imageAvatar}
        />
      </Link>
    </div>
  );
}
