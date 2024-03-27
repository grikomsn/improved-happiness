import { ContainerSection } from "@/components/container-section";
import { getArticleRenderers } from "@/components/keystatic/article-renderers";
import { ProseArticle } from "@/components/prose-article";
import { getArticleLayoutSearchString } from "@/components/satori/types";
import { TopScroller } from "@/components/top-scroller";
import { getCustomPage, getCustomPages } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { formatLongDate } from "@/utils/intl";
import { cn } from "@/utils/ui";
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
  const search = getArticleLayoutSearchString(
    {
      title: page.title,
      description: page.description,
      imgSrc: page.cover || undefined,
      path: `/${params.slug}`,
    },
    { encoded: true },
  );
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${defaultMetadata.url}/${params.slug}`,
      images: [`${defaultMetadata.url}/api/opengraph/article?${search}`],
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
    <ContainerSection
      className="relative space-y-4"
      data-stagger-children
    >
      {page.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={page.cover}
          alt="article cover image"
          className="mb-8 aspect-video w-full max-w-screen-sm rounded bg-zinc-500 object-cover"
        />
      )}
      <h1 className="max-w-screen-sm text-4xl font-bold">{page.title}</h1>
      <p className="max-w-screen-sm space-y-4 text-zinc-700 dark:text-zinc-300">{page.description}</p>
      <div className="!mb-16 flex items-center gap-x-2 text-sm text-zinc-700 dark:text-zinc-300">
        <CalendarIcon
          className="h-3 w-3"
          aria-hidden="true"
        />
        {page.updatedAt && <time dateTime={page.updatedAt}>{formatLongDate(page.updatedAt)}</time>}
        <div className="flex-grow" />
      </div>
      <ProseArticle>
        <DocumentRenderer
          document={document}
          renderers={renderers}
        />
      </ProseArticle>
      <div
        className={cn(
          "container pointer-events-none fixed inset-x-0 bottom-4 z-10",
          "flex justify-end",
          //
        )}
      >
        <TopScroller />
      </div>
    </ContainerSection>
  );
}
