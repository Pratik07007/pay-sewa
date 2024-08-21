import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },
      // TODO: User credentials type from next-aut
      async authorize(credentials: any) {
        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET || "secret",
  
});

export { handler as GET, handler as POST };
