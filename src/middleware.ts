import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: async ({ token }) => {
      return true
    }
  }
})

export const config = {
  matcher: ["/((?!api|login|_next/static|_next/image|favicon.ico).*)"]
}
