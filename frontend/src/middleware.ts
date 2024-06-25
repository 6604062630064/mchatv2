import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const { SERVER_URL } = process.env;
// This function can be marked `async` if using `await` inside

export async function middleware(req: NextRequest) {
  const web_session = req.cookies.get("web_session")?.value;
  const path = req.nextUrl.pathname;

  if (path === "/" && !web_session) {
    return NextResponse.next();
  }

  const response = await fetch(`${SERVER_URL}/auth/loggedin`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Cookie: "web_session=" + web_session,
    },
    credentials: "include",
  });

  const isAuthenticated = response.ok;

  if (path === "/" && isAuthenticated) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  if (!isAuthenticated) {
    const response = NextResponse.redirect(new URL("/", req.url));
    response.cookies.delete("web_session");
    return response;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
