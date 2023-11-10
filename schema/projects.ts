import { fields, singleton } from "@keystatic/core";

export const projectSchema = singleton({
  label: "Projects",
  path: "content/projects",
  format: "json",
  schema: {
    entries: fields.array(
      fields.object({
        iconUrl: fields.image({
          label: "Icon",
          description: "The icon for the project",
          directory: "public/assets/projects",
          publicPath: "/assets/projects",
          validation: {
            isRequired: false,
          },
        }),
        name: fields.text({
          label: "Name",
          description: "The name of the project",
          validation: {
            length: {
              min: 1,
            },
          },
        }),
        description: fields.text({
          label: "Description",
          description: "The description of the project",
          validation: {
            length: {
              min: 1,
            },
          },
        }),
        subtitle: fields.text({
          label: "Subtitle",
          description: "The subtitle of the project",
          validation: {
            length: {
              min: 1,
            },
          },
        }),
        link: fields.conditional(
          fields.checkbox({
            label: "Include project link",
            description: "Whether to include a link to the project",
          }),
          {
            false: fields.empty(),
            true: fields.object({
              href: fields.url({
                label: "Project URL",
                description: "The URL of the project",
                validation: {
                  isRequired: true,
                },
              }),
              label: fields.text({
                label: "Project URL Label",
                description: "The label for the project URL",
              }),
            }),
          },
        ),
      }),
      {
        label: "Project entries",
        description: "List of projects (see https://github.com/Thinkmill/keystatic/discussions/459)",
        itemLabel: (props) => props.fields.name.value,
      },
    ),
  },
  previewUrl: `${process.env.APP_URL}/projects`,
});
