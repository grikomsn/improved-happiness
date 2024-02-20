import { getArticlesFeed } from "@/server/feed";

export const revalidate = false;

export async function GET() {
  const feed = await getArticlesFeed();
  const body = feed.atom1();
  return new Response(body, {
    headers: {
      "cache-control": "s-maxage=2592000, stale-while-revalidate", // 30 days
      "content-type": "application/xml",
    },
  });
}
