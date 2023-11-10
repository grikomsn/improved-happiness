import { ContainerSection } from "@/components/container-section";
import { getArticleRenderers } from "@/components/keystatic/article-renderers";
import { ProseArticle } from "@/components/prose-article";
import { TopScroller } from "@/components/top-scroller";
import { getCustomPage, getCustomPages } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { formatLongDate } from "@/utils/intl";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { CalendarIcon } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<Props["params"][]> {
  const pages = await getCustomPages();
  return pages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getCustomPage(params.slug).catch(() => notFound());
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${defaultMetadata.url}/${params.slug}`,
    },
    authors: [
      {
        name: defaultMetadata.title,
        url: defaultMetadata.url,
      },
    ],
  };
}

export default async function Page({ params }: Props) {
  const page = await getCustomPage(params.slug).catch(() => notFound());
  const document = await page.content();
  const renderers = getArticleRenderers();
  return (
    <ContainerSection className="relative space-y-4">
      <h1 className="max-w-screen-sm text-4xl font-bold">{page.title}</h1>
      <p className="max-w-screen-sm space-y-4 text-neutral-700 dark:text-neutral-300">{page.description}</p>
      <div className="flex items-center gap-x-2 text-sm text-neutral-700 dark:text-neutral-300">
        <CalendarIcon
          className="h-3 w-3"
          aria-hidden="true"
        />
        {page.updatedAt && <time dateTime={page.updatedAt}>{formatLongDate(page.updatedAt)}</time>}
        <div className="flex-grow" />
      </div>
      <br />
      <br />
      <ProseArticle>
        <DocumentRenderer
          document={document}
          renderers={renderers}
        />
      </ProseArticle>
      <TopScroller className="container pointer-events-none fixed inset-x-0 bottom-4 z-10" />
    </ContainerSection>
  );
}
