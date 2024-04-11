import "@/styles/global.css";
import "@fontsource-variable/figtree/index.css";

import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { Metadata, Viewport } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(defaultMetadata.url),
  title: {
    template: `%s ⋅ ${defaultMetadata.title}`,
    absolute: defaultMetadata.title,
  },
  description: defaultMetadata.description,
  openGraph: {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    type: "website",
    siteName: defaultMetadata.title,
    images: [`${defaultMetadata.url}/social.png`],
    url: defaultMetadata.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: defaultMetadata.x.creator,
    creatorId: defaultMetadata.x.creatorId,
    site: defaultMetadata.x.creator,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          "overflow-x-hidden overflow-y-scroll font-sans antialiased",
          "relative flex min-h-screen flex-col items-stretch",
          "bg-zinc-50 dark:bg-zinc-900",
          "text-zinc-900 dark:text-zinc-50",
          GeistMono.variable,
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
