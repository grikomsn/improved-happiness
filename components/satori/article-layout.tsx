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
      style={{ backgroundImage }}
      tw="flex h-full w-full p-16 text-zinc-50 bg-zinc-900"
    >
      {imgSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={title}
          src={imgSrc}
          style={{ objectFit: "cover", width: 400 }}
          tw="rounded-xl mr-16 h-full"
        />
      )}
      <div
        style={imgSrc ? { width: 600 } : {}}
        tw="flex flex-col"
      >
        <div
          style={{ overflowWrap: "break-word" }}
          tw={clsx("mb-8 font-bold", title.length < 20 ? "text-7xl" : "text-5xl")}
        >
          {title}
        </div>
        <div
          style={{ overflowWrap: "break-word" }}
          tw="text-3xl"
        >
          {description}
        </div>
        <div tw="flex-grow" />
        {path && (
          <div
            style={{ overflowWrap: "break-word" }}
            tw="opacity-70 text-xl"
          >
            {path}
          </div>
        )}
      </div>
    </div>
  );
}
