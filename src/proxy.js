import { NextResponse } from "next/server";

export async function proxy(request) {
  try {
    // Fetch the session from better-auth API endpoint
    const response = await fetch(
      `${request.nextUrl.origin}/api/auth/get-session`,
      {
        headers: {
          // Pass the cookie along so better-auth knows who is making the request
          cookie: request.headers.get("cookie") || "",
        },
      },
    );

    // Check if the response is ok
    if (!response.ok) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Parse the session data
    const sessionData = await response.json();

    // If there is no active session, redirect to login page
    if (!sessionData || !sessionData.session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // User is logged in, allow the request to proceed
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware auth check failed:", error);
    // If there's an error fetching the session, default to redirecting to login to be safe
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/animaldetails/:path*",
};
