import { Launchpad } from "@/components/launchpad";
import { MediaQuery } from "@/components/media-query";
import { Navbar } from "@/components/navbar";
import { cn } from "@/utils/ui";
import { ReactNode } from "react";
import Providers from "./providers";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <main
        className={cn(
          "relative flex-grow overflow-x-hidden",
          "before:fixed before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full",

          "before:bg-[url(/beams.png)] before:bg-[-839px_-520px] before:bg-no-repeat",
          "before:transition-[background-position] before:duration-1000 before:ease-out",

          "motion-safe:before:[background-position:_var(--beams-x,-839px)_var(--beams-y,-520px)]",
          "motion-safe:before:animate-beams",
        )}
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
