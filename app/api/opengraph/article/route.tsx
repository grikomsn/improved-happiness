import { ArticleLayout } from "@/components/satori/article-layout";
import { getArticleLayoutSearchParams } from "@/components/satori/types";
import { defaultSize } from "@/constants/satori";
import { getFonts } from "@/server/satori";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET({ nextUrl }: NextRequest) {
  const props = getArticleLayoutSearchParams(nextUrl.searchParams);
  const fonts = await getFonts();

  return new ImageResponse(<ArticleLayout {...props} />, {
    width: defaultSize.width,
    height: defaultSize.height,
    fonts,
  });
}
