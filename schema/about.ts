import { fields, singleton } from "@keystatic/core";

export const aboutSchema = singleton({
  label: "About",
  path: "content/about",
  entryLayout: "content",
  format: {
    contentField: "content",
  },
  schema: {
    cover: fields.image({
      label: "Cover",
      directory: "public/assets/about",
      publicPath: "/assets/about",
      validation: {
        isRequired: true,
      },
    }),
    content: fields.document({
      label: "Content",
      dividers: true,
      formatting: true,
      links: true,
    }),
  },
  previewUrl: `${process.env.APP_URL}/about`,
});
