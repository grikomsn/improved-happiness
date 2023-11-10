import { fields } from "@keystatic/core";

export const contentField = fields.document({
  label: "Content",
  description: "The content of the article",
  formatting: true,
  dividers: true,
  links: true,
  images: {
    directory: "public/assets",
    publicPath: "/assets",
  },
  layouts: [[1], [1, 1], [1, 2], [2, 1]],
});
