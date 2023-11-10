import "@/styles/global.css";
import "@fontsource-variable/figtree/index.css";

import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { Metadata } from "next";
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

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          "overflow-y-scroll font-sans antialiased",
          "relative flex min-h-screen flex-col items-stretch",
          "bg-neutral-50 dark:bg-neutral-900",
          "text-neutral-900 dark:text-neutral-50",
          GeistMono.variable,
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
