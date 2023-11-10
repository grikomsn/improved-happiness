import { defaultMetadata } from "@/site.config";
import { toSearchString } from "@/utils/string";

export interface ArticleLayoutProps {
  title: string;
  description: string;
  imgSrc?: string;
  path?: string;
}

export function getArticleLayoutSearchParams(sp: URLSearchParams): ArticleLayoutProps {
  return {
    title: sp.get("title") || defaultMetadata.title,
    description: sp.get("description") || defaultMetadata.description,
    imgSrc: sp.get("imgSrc") || undefined,
    path: sp.get("path") || undefined,
  };
}

export function getArticleLayoutSearchString(props: ArticleLayoutProps): string {
  const { title, description, imgSrc = "", path = "" } = props;
  return toSearchString({ title, description, imgSrc, path });
}
