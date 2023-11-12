import { createClient } from "@vercel/edge-config";
import { StatusCodes } from "http-status-codes";
import { NextRequest, NextResponse } from "next/server";
import { ignoreAssert, ignoreNullable, ignoreSymbol } from "./utils/assert";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico))",
    "/((?!about|articles|projects|keystatic))",
    "/([a-zA-Z0-9]+)",
  ],
};

export async function middleware(req: NextRequest) {
  try {
    const host = ignoreNullable(req.headers.get("host"));
    const redirectHost = ignoreNullable(process.env.NEXT_PUBLIC_REDIRECT_HOST);
    ignoreAssert(host.includes(redirectHost));

    const edgeConfig = ignoreNullable(process.env.REDIRECT_EDGE_CONFIG);
    const slug = ignoreNullable(req.nextUrl.pathname.split("/")[1]);
    const url = await createClient(edgeConfig).get(slug);
    ignoreAssert(typeof url === "string" && url);

    return NextResponse.redirect(url, { status: StatusCodes.TEMPORARY_REDIRECT });
  } catch (error) {
    if (error === ignoreSymbol) return;
    console.error(error);
  }
}
