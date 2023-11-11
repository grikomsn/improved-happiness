import { createClient } from "@vercel/edge-config";
import { StatusCodes } from "http-status-codes";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico))",
    "/((?!about|articles|projects|keystatic))",
    "/([a-zA-Z0-9]+)",
  ],
};

export async function middleware(req: NextRequest) {
  if (process.env.NEXT_PUBLIC_REDIRECT_HOST && process.env.REDIRECT_EDGE_CONFIG) {
    if (!req.headers.get("host")?.endsWith(process.env.NEXT_PUBLIC_REDIRECT_HOST)) return;

    const slug = req.nextUrl.pathname.split("/")[1];
    if (!slug) return;

    const url = await createClient(process.env.REDIRECT_EDGE_CONFIG).get(slug);
    if (!(typeof url === "string" && url)) return;

    return NextResponse.redirect(url, { status: StatusCodes.TEMPORARY_REDIRECT });
  }
}
