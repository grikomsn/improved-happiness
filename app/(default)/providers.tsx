"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="system"
      enableSystem
    >
      <TooltipProvider>
        {children}
        <RegisterCoordinates />
      </TooltipProvider>
    </ThemeProvider>
  );
}

function RegisterCoordinates() {
  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      const root = document.documentElement;
      const { clientWidth, offsetWidth, offsetHeight } = root;

      if (clientWidth < 640) return;

      const x = (clientX - offsetWidth / 2) / offsetWidth;
      const y = (clientY - offsetHeight / 2) / offsetHeight;

      root.style.setProperty("--x", `${x.toFixed(2)}`);
      root.style.setProperty("--y", `${y.toFixed(2)}`);

      root.style.setProperty("--beams-x", `${(-100 + x * 64).toFixed(0)}px`);
      root.style.setProperty("--beams-y", `${(-520 + y * 64).toFixed(0)}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
