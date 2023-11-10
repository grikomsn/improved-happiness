"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

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
        {/*  */}
      </TooltipProvider>
    </ThemeProvider>
  );
}
