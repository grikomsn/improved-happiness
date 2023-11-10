import "server-only";

import { getSortedArticles } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { Feed } from "feed";
import { cache, createElement as h } from "react";

export const getArticlesFeed = cache(async () => {
  const author = {
    name: defaultMetadata.title,
    email: defaultMetadata.email,
    link: defaultMetadata.url,
  };

  const feed = new Feed({
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    author: author,
    id: defaultMetadata.url,
    link: defaultMetadata.url,
    image: `${defaultMetadata.url}/favicon.ico`,
    favicon: `${defaultMetadata.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${defaultMetadata.url}/feed.xml`,
      json: `${defaultMetadata.url}/feed.json`,
      atom: `${defaultMetadata.url}/atom.xml`,
    },
  });

  const articles = await getSortedArticles();

  for await (const article of articles) {
    if (article.entry.draft) continue;

    // https://github.com/vercel/next.js/discussions/57631
    const { renderToString } = await import("react-dom/server");

    const document = await article.entry.content();
    const html = renderToString(h(DocumentRenderer, { document }));

    const url = `${defaultMetadata.url}/articles/${article.slug}`;

    feed.addItem({
      title: article.entry.title,
      id: url,
      link: url,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.entry.updatedAt || article.entry.publishedAt),
      published: new Date(article.entry.publishedAt),
    });
  }

  return feed;
});
