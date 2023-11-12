import { defaultMetadata } from "@/site.config";
import { toSearchString } from "@/utils/string";
import { z } from "zod";

/* #__PURE__ */
export const articleLayoutSchema = z.object({
  title: z.string(),
  description: z.string(),
  imgSrc: z.string().optional(),
  path: z.string().optional(),
});

export type ArticleLayoutProps = z.infer<typeof articleLayoutSchema>;

export function getArticleLayoutSearchParams(usp: URLSearchParams): ArticleLayoutProps {
  const encoded = usp.get("encoded");
  if (encoded) {
    try {
      const decoded = Buffer.from(encoded, "base64").toString("utf-8");
      const parsed = articleLayoutSchema.parse(JSON.parse(decoded));
      return parsed;
    } catch (error) {
      console.error(error);
    }
  }
  return {
    title: usp.get("title") || defaultMetadata.title,
    description: usp.get("description") || defaultMetadata.description,
    imgSrc: usp.get("imgSrc") || undefined,
    path: usp.get("path") || undefined,
  };
}

export function getArticleLayoutSearchString(props: ArticleLayoutProps, { encoded = false } = {}): string {
  const { title, description, imgSrc = "", path = "" } = props;
  if (encoded) {
    return `encoded=${Buffer.from(JSON.stringify({ title, description, imgSrc, path })).toString("base64")}`;
  }
  return toSearchString({ title, description, imgSrc, path });
}
