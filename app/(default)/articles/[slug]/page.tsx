import { ContainerSection } from "@/components/container-section";
import { getArticleRenderers } from "@/components/keystatic/article-renderers";
import { ProseArticle } from "@/components/prose-article";
import { Signature } from "@/components/signature";
import { TopScroller } from "@/components/top-scroller";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getArticle, getSortedArticles } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { formatLongDate } from "@/utils/intl";
import { cn } from "@/utils/ui";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { ArrowLeftIcon, CalendarIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<Props["params"][]> {
  const articles = await getSortedArticles();
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const articles = await getArticle(params.slug).catch(() => notFound());
  if (articles.redirect.discriminant) redirect(articles.redirect.value.url);
  return {
    title: articles.title,
    description: articles.description,
    openGraph: {
      title: articles.title,
      description: articles.description,
      url: `${defaultMetadata.url}/articles/${params.slug}`,
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
  const articles = await getArticle(params.slug).catch(() => notFound());
  const document = await articles.content();
  const renderers = getArticleRenderers();
  return (
    <ContainerSection
      className="relative space-y-4"
      enableNavShadow
    >
      {articles.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={articles.cover}
          alt="article cover image"
          className="mb-8 aspect-video w-full max-w-screen-sm rounded bg-neutral-500 object-cover"
        />
      )}
      <div className="relative">
        <h1 className="max-w-screen-sm text-4xl font-bold">{articles.title}</h1>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/articles"
              className={cn(
                "absolute inset-y-1 -left-8 max-lg:hidden",
                "z-10 h-8 w-8 rounded-full",
                "flex items-center justify-center",
                "hover:text-amber-600 dark:hover:text-amber-500",
              )}
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={0}
          >
            Back to articles
          </TooltipContent>
        </Tooltip>
      </div>
      <p className="max-w-screen-sm space-y-4 text-neutral-700 dark:text-neutral-300">{articles.description}</p>
      <div className="flex items-center gap-x-2 text-sm text-neutral-700 dark:text-neutral-300">
        <CalendarIcon
          className="h-3 w-3"
          aria-hidden="true"
        />
        <time dateTime={articles.publishedAt}>{formatLongDate(articles.publishedAt)}</time>
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
      <Signature
        className={cn(
          "w-36 max-w-xs",
          "stroke-4 fill-current stroke-current",
          "-rotate-6 transform-gpu",
          //
        )}
      />
      <TopScroller className="container pointer-events-none fixed inset-x-0 bottom-4 z-10" />
    </ContainerSection>
  );
}
