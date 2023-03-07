import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.FIREBASE_WEB_CLIENT_ID!,
      clientSecret: process.env.FIREBASE_WEB_CLIENT_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
