import { collection, fields } from "@keystatic/core";

export const articleSchema = collection({
  label: "Articles",
  slugField: "title",
  path: "content/articles/*",
  entryLayout: "content",
  format: {
    contentField: "content",
  },
  schema: {
    cover: fields.image({
      label: "Cover",
      description: "The cover image for the article",
      directory: "public/assets/articles",
      publicPath: "/assets/articles",
      validation: {
        isRequired: false,
      },
    }),
    title: fields.slug({
      name: {
        label: "Title",
        description: "The title of the article",
        validation: {
          length: {
            min: 1,
          },
        },
      },
      slug: {
        // TODO: https://github.com/Thinkmill/keystatic/discussions/459
      },
    }),
    description: fields.text({
      label: "Description",
      description: "The description of the article",
      validation: {
        length: {
          min: 1,
        },
      },
    }),
    publishedAt: fields.date({
      label: "Published At",
      description: "The date the article was published",
      defaultValue: { kind: "today" },
      validation: {
        isRequired: true,
      },
    }),
    updatedAt: fields.date({
      label: "Updated At",
      description: "The date the article was updated",
      validation: {
        isRequired: false,
      },
    }),
    draft: fields.checkbox({
      label: "Mark as draft",
      description: "If enabled, the article will not be listed on the site but can still be accessed via the URL",
      defaultValue: false,
    }),
    redirect: fields.conditional(
      fields.checkbox({
        label: "Redirect to external URL",
        description: "If enabled, the article will redirect to an external URL",
        defaultValue: false,
      }),
      {
        false: fields.empty(),
        true: fields.object({
          url: fields.url({
            label: "Redirect URL",
            description: "The URL to redirect to",
            validation: {
              isRequired: true,
            },
          }),
        }),
      },
    ),
    content: fields.document({
      label: "Content",
      description: "The content of the article",
      formatting: true,
      dividers: true,
      links: true,
      images: {
        directory: "public/assets/articles",
        publicPath: "/assets/articles",
      },
      layouts: [[1], [1, 1], [1, 2], [2, 1]],
    }),
  },
  previewUrl: `${process.env.APP_URL}/articles/{slug}`,
});
