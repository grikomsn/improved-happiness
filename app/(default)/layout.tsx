import { Launchpad } from "@/components/launchpad";
import { MediaQuery } from "@/components/media-query";
import { Navbar } from "@/components/navbar";
import { cn } from "@/utils/ui";
import { ReactNode } from "react";
import Providers from "./providers";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: noscriptStyles }} />
      </noscript>
      <div
        className={cn(
          "fixed left-0 top-0 z-[-1] h-full w-full",
          "bg-[url(/beams.png)] bg-[-839px_-520px] bg-no-repeat",
          "transition-[background-position] duration-1000 ease-out",
          "motion-safe:[background-position:_var(--beams-x,-839px)_var(--beams-y,-520px)]",
          "motion-safe:animate-beams",
        )}
      />
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
    opacity: 1 !important;
  }
`;
