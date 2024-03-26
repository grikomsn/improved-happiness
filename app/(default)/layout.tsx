import { Launchpad } from "@/components/launchpad";
import { MediaQuery } from "@/components/media-query";
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";
import styles from "./layout.module.css";
import Providers from "./providers";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: noscriptStyles }} />
      </noscript>
      <div className={styles.beams} />
      <main
        className="relative flex-grow overflow-x-hidden"
        style={{ opacity: 0 }}
      >
        {children}
      </main>
      <Navbar className="sticky bottom-0 left-0 z-50" />
      <MediaQuery query="(min-width: 640px)">
        <Launchpad />
      </MediaQuery>
    </Providers>
  );
}

const css = String.raw;

const noscriptStyles = css`
  main {
    opacity: 1;
  }
`;
