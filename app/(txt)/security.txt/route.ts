import { customMetadata, defaultMetadata } from "@/site.config";

export async function GET() {
  return new Response(content.trim(), {
    headers: {
      "cache-control": "public, max-age=86400, immutable",
      "content-type": "text/plain; charset=utf-8",
    },
  });
}

const expires = new Date(Date.now() + 31536000000).toUTCString();

const content = `
Contact: ${customMetadata.emailUrl}
Expires: ${expires}
Encryption: ${defaultMetadata.url}/pgp.txt
Preferred-Languages: en, id
Canonical: ${defaultMetadata.url}/.well-known/security.txt
`;
