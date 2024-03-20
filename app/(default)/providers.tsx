"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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
        {/* <RegisterLenis /> */}
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
      { opacity: 0, scale: 1.025 },
      {
        opacity: 1,
        scale: 1,
        ease: "power1.out",
        onComplete: () => {
          el.removeAttribute("style");
        },
      },
    );
  });

  return null;
}

// https://stackblitz.com/edit/react-ts-uuwfed?file=App.tsx
function RegisterLenis() {
  const scrollRef = useRef<Lenis>();

  useEffect(() => {
    scrollRef.current = new Lenis({
      autoResize: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      gestureOrientation: "vertical",
      infinite: false,
      orientation: "vertical",
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 2,
    });

    scrollRef.current.on("scroll", ScrollTrigger.update);

    const updateFn: gsap.TickerCallback = (time) => {
      scrollRef.current?.raf(time * 1000);
    };

    gsap.ticker.add(updateFn, /* once */ false, /* prioritize */ true);

    return () => {
      gsap.ticker.remove(updateFn);
      scrollRef.current?.destroy();
    };
  }, []);

  return null;
}
