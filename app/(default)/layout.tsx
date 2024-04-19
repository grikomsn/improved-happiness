import { Launchpad } from "@/components/launchpad";
import { MediaQuery } from "@/components/media-query";
import { Navbar } from "@/components/navbar";
import { cn } from "@/utils/ui";
import { ReactNode } from "react";
import styles from "./layout.module.css";
import Providers from "./providers";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className={styles.beams} />
      <Navbar />
      <main
        className={cn(
          "pb-32 pt-8",
          "container relative isolate max-w-screen-md flex-grow",
          "before:pointer-events-none before:fixed before:inset-x-0 before:bottom-0 before:z-10 before:h-8 before:max-sm:hidden",
        )}
      >
        {children}
      </main>
      <MediaQuery query="(min-width: 640px)">
        <Launchpad />
      </MediaQuery>
    </Providers>
  );
}
