import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvides from "next-auth/providers/credentials";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOLE_ID,
      clientSecret: process.env.GOOLE_SECRET,
    }),
    CredentialsProvides({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //Check if the user exists.
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("user not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    // ...add more providers here
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
