import { AdaptiveLink } from "@/components/adaptive-link";
import { ContainerSection } from "@/components/container-section";
import { wholeLinks } from "@/constants/links";
import { cn } from "@/utils/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: "Here are links to other platforms where you can find me.",
};

export default async function Page() {
  return (
    <ContainerSection
      className="relative space-y-4"
      enableNavShadow
      data-stagger-children
    >
      <h1 className="max-w-screen-sm text-4xl font-bold">Links</h1>
      <p className="!mb-16 max-w-screen-sm space-y-4 text-zinc-700 dark:text-zinc-300">
        Here are links to other platforms where you can find me. Might not be active on all of them. Not promising
        anything.
      </p>
      <ul
        className={cn(
          "grid grid-cols-1 gap-8",
          "sm:max-w-screen-sm sm:grid-cols-3",
          //
        )}
        data-stagger-children
      >
        {wholeLinks.map(({ href, Icon, label }, i) => (
          <li
            key={i}
            className={cn(
              "group relative text-sm",
              "flex-col items-start sm:flex",
              "before:absolute before:-z-10 before:transition-[opacity,inset]",
              "before:rounded-lg before:bg-zinc-500/5 dark:before:bg-zinc-500/10",
              "before:opacity-0 hover:before:opacity-100",
              "before:-inset-1 hover:before:-inset-4",
            )}
          >
            <AdaptiveLink
              href={href}
              className={cn(
                "h-full w-full sm:px-4 sm:py-8",
                "flex flex-row items-center justify-start gap-4 hover:underline",
                "sm:flex-col sm:justify-center sm:text-center",
                "group-hover:text-primary-600 group-hover:dark:text-primary-500",
                "before:absolute before:-inset-4",
              )}
              rel="me"
            >
              <Icon
                className="h-6 w-6 sm:h-8 sm:w-8"
                aria-label={label}
                aria-hidden="true"
              />
              <span className="flex-grow sm:flex-grow-0">{label}</span>
            </AdaptiveLink>
          </li>
        ))}
      </ul>
    </ContainerSection>
  );
}
