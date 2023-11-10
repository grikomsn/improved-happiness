import { config } from "@keystatic/core";
import { BrandMark } from "./components/keystatic/brand-mark";
import { aboutSchema } from "./schema/about";
import { articleSchema } from "./schema/articles";
import { customPageSchema } from "./schema/custom-pages";
import { homeSchema } from "./schema/home";
import { projectSchema } from "./schema/projects";
import { defaultMetadata } from "./site.config";

/** @see https://keystatic.com/docs/configuration */
export default config({
  storage: process.env.NEXT_PUBLIC_VERCEL_ENV
    ? {
        kind: "github",
        repo: {
          owner: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER || defaultMetadata.github.username,
          name: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG || defaultMetadata.github.repository,
        },
      }
    : {
        kind: "local",
      },
  collections: {
    articles: articleSchema,
    pages: customPageSchema,
  },
  singletons: {
    home: homeSchema,
    about: aboutSchema,
    projects: projectSchema,
  },
  ui: {
    brand: {
      name: defaultMetadata.title,
      mark: BrandMark,
    },
    navigation: {
      Content: ["articles", "pages", "projects"],
      Settings: ["home", "about"],
    },
  },
});
