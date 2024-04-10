import { AdaptiveLink } from "@/components/adaptive-link";
import { ContainerSection } from "@/components/container-section";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import { SimpleTooltip } from "@/components/simple-tooltip";
import { links } from "@/constants/links";
import { getHomeSingleton } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import { DocumentRenderer } from "@keystatic/core/renderer";

export default async function Page() {
  const query = await getHomeSingleton();
  const content = await query.content();
  const renderers = getBasicRenderers();

  return (
    <ContainerSection className="relative flex flex-col items-start">
      <h1 className="mb-2 text-4xl font-bold">{defaultMetadata.title}</h1>
      <p className="mb-8 text-2xl">{defaultMetadata.description}</p>
      <div
        className={cn(
          "mb-16 space-y-4 text-zinc-700 dark:text-zinc-300",
          "[&_a:hover]:underline [&_a]:text-primary-600 dark:[&_a]:text-primary-500",
        )}
      >
        <DocumentRenderer
          document={content}
          renderers={renderers}
        />
      </div>
      <ul className="flex items-center space-x-4">
        {links.map(({ href, Icon, label }) => (
          <li key={label}>
            <SimpleTooltip
              label={label}
              _content={{ side: "bottom" }}
              delayDuration={0}
            >
              <AdaptiveLink
                href={href}
                rel="me"
                className="transition-colors hover:text-primary-600 dark:hover:text-primary-500"
              >
                <Icon
                  aria-label={label}
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </AdaptiveLink>
            </SimpleTooltip>
          </li>
        ))}
      </ul>
    </ContainerSection>
  );
}
