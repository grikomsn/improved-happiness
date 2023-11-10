import { ArticleLayout } from "@/components/satori/article-layout";
import { defaultSize } from "@/constants/satori";
import { getCustomPage } from "@/server/keystatic";
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
  const page = await getCustomPage(params.slug).catch(() => notFound());
  const fonts = await getFonts();

  return new ImageResponse(
    (
      <ArticleLayout
        title={page.title}
        description={page.description}
        path={`/${params.slug}`}
      />
    ),
    { ...size, fonts },
  );
}
