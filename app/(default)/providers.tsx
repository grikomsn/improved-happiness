"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect } from "react";

gsap.registerPlugin(useGSAP);

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
        <RegisterGsap />
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

      root.style.setProperty("--beams-x", `${(-839 + x * 32).toFixed(0)}px`);
      root.style.setProperty("--beams-y", `${(-520 + y * 32).toFixed(0)}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}

function RegisterGsap() {
  useGSAP(() => {
    const el = document.querySelector("main");
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, ease: "power1.out", onComplete: () => el.removeAttribute("style") },
      //
    );
  });

  return null;
}
