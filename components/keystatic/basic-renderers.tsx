import { DocumentRendererProps } from "@keystatic/core/renderer";
import { AdaptiveLink } from "../adaptive-link";

export function getBasicRenderers(): DocumentRendererProps["renderers"] {
  return {
    block: {
      //
    },
    inline: {
      link: AdaptiveLink,
    },
  };
}
