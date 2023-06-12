import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOLE_ID,
      clientSecret: process.env.GOOLE_SECRET,
    }),
    // ...add more providers here
  ],
});

export  { handler as GET, handler as POST }