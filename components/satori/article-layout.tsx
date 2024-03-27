import "server-only";

import { backgroundImage } from "@/constants/satori.image";
import { defaultMetadata } from "@/site.config";
import { clsx } from "clsx";
import { ArticleLayoutProps } from "./types";

export function ArticleLayout({ title, description, imgSrc = "", path = defaultMetadata.url }: ArticleLayoutProps) {
  if (imgSrc.startsWith("/assets/")) {
    imgSrc = defaultMetadata.url + imgSrc;
  }
  return (
    <div
      tw="flex h-full w-full p-16 text-zinc-50 bg-zinc-900"
      style={{ backgroundImage }}
    >
      {imgSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgSrc}
          alt={title}
          tw="rounded-xl mr-16 h-full"
          style={{ objectFit: "cover", width: 400 }}
        />
      )}
      <div
        tw="flex flex-col"
        style={imgSrc ? { width: 600 } : {}}
      >
        <div
          tw={clsx("mb-8 font-bold", title.length < 20 ? "text-7xl" : "text-5xl")}
          style={{ overflowWrap: "break-word" }}
        >
          {title}
        </div>
        <div
          tw="text-3xl"
          style={{ overflowWrap: "break-word" }}
        >
          {description}
        </div>
        <div tw="flex-grow" />
        {path && (
          <div
            tw="opacity-70 text-xl"
            style={{ overflowWrap: "break-word" }}
          >
            {path}
          </div>
        )}
      </div>
    </div>
  );
}
