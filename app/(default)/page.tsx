import { AdaptiveLink } from "@/components/adaptive-link";
import { ContainerSection } from "@/components/container-section";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { links } from "@/constants/links";
import { getHomeSingleton, getSortedArticles } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const query = await getHomeSingleton();
  const content = await query.content();
  const renderers = getBasicRenderers();

  const [firstArticle] = await getSortedArticles();

  return (
    <ContainerSection className="relative flex flex-col items-start">
      <h1 className="mb-2 text-4xl font-bold">{defaultMetadata.title}</h1>
      <p className="mb-8 text-2xl">{defaultMetadata.description}</p>
      <div
        className={cn(
          "mb-16 max-w-screen-sm space-y-4 text-neutral-700 dark:text-neutral-300",
          "[&_a]:text-primary-600 dark:[&_a]:text-primary-500 [&_a:hover]:underline",
        )}
      >
        <DocumentRenderer
          document={content}
          renderers={renderers}
        />
      </div>
      <ul className="[&_a:hover]:text-primary-600 dark:[&_a:hover]:text-primary-500 flex items-center gap-x-4">
        {links.map(({ href, Icon, label }) => (
          <li key={label}>
            <Tooltip disableHoverableContent>
              <TooltipTrigger asChild>
                <AdaptiveLink
                  href={href}
                  rel="me"
                >
                  <Icon
                    aria-label={label}
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </AdaptiveLink>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>{label}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
      {firstArticle && (
        <Link
          href={`/articles/${firstArticle.slug}`}
          className={cn(
            "flex items-center space-x-2 rounded-full px-2 py-1 pr-3 text-sm",
            "-order-1 mb-8",
            "border border-neutral-500/25 hover:border-neutral-500/50",
            "bg-neutral-500/10",
            "text-neutral-700 dark:text-neutral-300",
          )}
        >
          <span
            className={cn(
              "rounded-full px-2 py-px",
              "text-xs font-semibold text-neutral-200",
              "bg-primary-500/50",
              //
            )}
          >
            New Article
          </span>
          <span>{firstArticle.entry.title}</span>
          <ArrowRightIcon className="h-3 w-3" />
        </Link>
      )}
    </ContainerSection>
  );
}
