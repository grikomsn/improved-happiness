import { cn } from "@/utils/ui";
import { DocumentRendererProps } from "@keystatic/core/renderer";
import { AdaptiveLink } from "../adaptive-link";
import { Shiki } from "../shiki";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function getArticleRenderers(): DocumentRendererProps["renderers"] {
  return {
    block: {
      code: ({ children: code, language = "plain" }) => {
        return (
          <ScrollArea
            className={cn(
              "not-prose relative rounded-lg text-sm",
              "border border-zinc-500/25",
              //
            )}
          >
            <Shiki
              code={code}
              language={language}
              className="[&>pre]:p-4"
            />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        );
      },
      image: (props) => {
        return (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img {...props} />
            <figcaption>
              {props.title && <strong>{props.title}:&nbsp;</strong>}
              {props.alt}
            </figcaption>
          </figure>
        );
      },
    },
    inline: {
      link: AdaptiveLink,
    },
  };
}
