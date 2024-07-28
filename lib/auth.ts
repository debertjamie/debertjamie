import { type Session } from "@auth/core/types";
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

import { adminEmail, discordId, discordSecret, googleId, googleSecret, publicUrl } from "@/app/env.mjs";

function isAdmin(email?: string | null) {
  if (!email) return false;
  if (adminEmail instanceof Array) {
    return adminEmail.includes(email);
  } else {
    return adminEmail === email;
  }
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  theme: {
    colorScheme: "auto",
    brandColor: "",
    logo: `${publicUrl}${publicUrl.endsWith("/" ? "" : "/")}static/icon.png`,
  },
  providers: [
    DiscordProvider({
      clientId: discordId,
      clientSecret: discordSecret,
    }),
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
  ],
  callbacks: {
    session: ({ session }: { session: Session }) => ({
      ...session,
      user: {
        ...session.user,
        isAdmin: isAdmin(session.user?.email),
      },
    }),
  },
});
