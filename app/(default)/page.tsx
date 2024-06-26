import { AdaptiveLink } from "@/components/adaptive-link";
import { AvatarImage } from "@/components/avatar-image";
import { ContainerSection } from "@/components/container-section";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import { navbarHomeItem } from "@/components/navbar/styles";
import { SimpleTooltip } from "@/components/simple-tooltip";
import { links } from "@/constants/links";
import { getHomeSingleton } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import { DocumentRenderer } from "@keystatic/core/renderer";
import Link from "next/link";

export default async function Page() {
  const query = await getHomeSingleton();
  const content = await query.content();
  const renderers = getBasicRenderers();

  return (
    <ContainerSection className="relative flex flex-col items-start">
      <Link
        className={cn(navbarHomeItem, "mb-8 h-32 w-32")}
        href="/about"
      >
        <AvatarImage />
      </Link>
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
              _content={{ side: "bottom" }}
              label={label}
            >
              <AdaptiveLink
                className="transition-colors hover:text-primary-600 dark:hover:text-primary-500"
                href={href}
                rel="me"
              >
                <Icon
                  aria-hidden="true"
                  aria-label={label}
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
