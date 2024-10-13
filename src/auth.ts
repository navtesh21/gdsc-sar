import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "text", placeholder: "@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          let user = { email: "hh", password: "jh" };

          const { email, password } = credentials;

          // logic to verify if the user exists

          if (!user) {
            return null;
          }

          // return JSON object with the user data
          return user;
        } catch (error) {
          if (error) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
          return null;
        }
      },
    }),
  ],
});
