import { ArticleLayout } from "@/components/satori/article-layout";
import { defaultSize } from "@/constants/satori";
import { getArticle } from "@/server/keystatic";
import { getFonts } from "@/server/satori";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

export const size = { width: defaultSize.width, height: defaultSize.height };
export const contentType = "image/png";

interface Props {
  params: {
    slug: string;
  };
}

export default async function OpengraphImage({ params }: Props) {
  const article = await getArticle(params.slug).catch(() => notFound());
  const fonts = await getFonts();

  return new ImageResponse(
    (
      <ArticleLayout
        description={article.description}
        imgSrc={article.cover || ""}
        path={`/articles/${params.slug}`}
        title={article.title}
      />
    ),
    { ...size, fonts },
  );
}
