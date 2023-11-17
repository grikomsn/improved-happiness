import { AdaptiveLink } from "@/components/adaptive-link";
import { ContainerSection } from "@/components/container-section";
import { MastodonIcon } from "@/components/icons/mastodon";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getReader } from "@/server/keystatic";
import { customMetadata, defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { CloudIcon, GithubIcon, LinkedinIcon } from "lucide-react";

const socialLinks = [
  { href: customMetadata.blueskyUrl, Icon: CloudIcon, label: "Bluesky" },
  { href: customMetadata.githubUrl, Icon: GithubIcon, label: "GitHub" },
  { href: customMetadata.linkedInUrl, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: customMetadata.mastodonUrl, Icon: MastodonIcon, label: "Mastodon" },
];

export default async function Page() {
  const query = await getReader().singletons.home.readOrThrow();
  const content = await query.content();
  const renderers = getBasicRenderers();
  return (
    <ContainerSection className="relative">
      <h1 className="mb-2 text-4xl font-bold">{defaultMetadata.title}</h1>
      <p className="mb-8 text-2xl">{defaultMetadata.description}</p>
      <div
        className={cn(
          "mb-16 max-w-screen-sm space-y-4 text-neutral-700 dark:text-neutral-300",
          "[&_a:hover]:underline [&_a]:text-amber-600 dark:[&_a]:text-amber-500",
        )}
      >
        <DocumentRenderer
          document={content}
          renderers={renderers}
        />
      </div>
      <ul className="flex items-center gap-x-4 [&_a:hover]:text-amber-600 dark:[&_a:hover]:text-amber-500">
        {socialLinks.map(({ href, Icon, label }) => (
          <li key={label}>
            <Tooltip disableHoverableContent>
              <TooltipTrigger asChild>
                <AdaptiveLink href={href}>
                  <Icon
                    aria-label={label}
                    className="h-5 w-5"
                  />
                </AdaptiveLink>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>{label}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </ContainerSection>
  );
}
