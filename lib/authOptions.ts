import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/db";
import { usersTable } from "@/db/schema/user.schema";
import { eq } from "drizzle-orm";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await db.query.usersTable.findFirst({
          where: eq(usersTable.email, credentials?.email as string),
        });
        if (!user) {
          return null;
        }

        const bcrypt = require("bcrypt");

        const passwordCorrect = await bcrypt.compare(
          credentials?.password,
          user.password
        );

        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token, trigger, session }) => {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },

    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
};
