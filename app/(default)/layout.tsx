import { Launchpad } from "@/components/launchpad";
import { MediaQuery } from "@/components/media-query";
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";
import styles from "./layout.module.css";
import Providers from "./providers";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className={styles.beams} />
      <main className="container relative max-w-screen-md flex-grow">{children}</main>
      <Navbar className="sticky bottom-0 left-0 z-50" />
      <MediaQuery query="(min-width: 640px)">
        <Launchpad />
      </MediaQuery>
    </Providers>
  );
}
