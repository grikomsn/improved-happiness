import { customMetadata } from "@/site.config";

export async function GET() {
  const response = await fetch(`${customMetadata.keybaseUrl}/pgp_keys.asc`);
  const body = await response.text();
  return new Response(body, {
    headers: {
      "cache-control": "public, max-age=86400, immutable",
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
