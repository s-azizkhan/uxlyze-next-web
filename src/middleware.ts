export { default } from "next-auth/middleware"
import { NextResponse, type NextRequest } from "next/server";
import { getToken, JWT } from "next-auth/jwt";

// Protect all routes under "/dashboard/*"
const protectedRoutes = ["/dashboard"];

export interface ExtendedNextRequest extends NextRequest {
  user?: JWT | null;
}

export async function middleware(request: ExtendedNextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // If no token and user tries to access a protected route, redirect to login
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", request.url); // Return the user to the intended page after login
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/dashboard/:path*",
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
