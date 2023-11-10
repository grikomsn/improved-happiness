import { collection, fields } from "@keystatic/core";

export const customPageSchema = collection({
  label: "Pages",
  slugField: "title",
  path: "content/pages/*",
  entryLayout: "content",
  format: {
    contentField: "content",
  },
  schema: {
    title: fields.slug({
      name: {
        label: "Title",
        description: "The title of the page",
        validation: {
          length: {
            min: 1,
          },
        },
      },
    }),
    description: fields.text({
      label: "Description",
      description: "The description of the page",
      validation: {
        length: {
          min: 1,
        },
      },
    }),
    updatedAt: fields.date({
      label: "Updated At",
      description: "The date the page was updated",
      validation: {
        isRequired: false,
      },
    }),
    content: fields.document({
      label: "Content",
      description: "The content of the article",
      formatting: true,
      dividers: true,
      links: true,
      images: {
        directory: "public/assets/pages",
        publicPath: "/assets/pages",
      },
      layouts: [[1], [1, 1], [1, 2], [2, 1]],
    }),
  },
  previewUrl: `${process.env.APP_URL}/{slug}`,
});
