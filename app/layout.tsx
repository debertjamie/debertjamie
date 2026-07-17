import {ReactNode} from "react";
import type {Metadata, Viewport} from "next";
import "@/styles/globals.css";
import {Footer} from "@/ui/footer";
import {Header} from "@/ui/header";
import {inter} from "@/ui/fonts/fonts";
import {ThemedHTML} from "@/ui/components";
import {publicUrl} from "./env.mjs";

// Default metadata
const title = "Debert Jamie Chanderson";
const description = "Heya 👋😀 I'm Debert Jamie";

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  authors: [{ name: "Debert Jamie Chanderson", url: "humans.txt" }],
  title: {
    default: title,
    template: "%s | Debert Jamie",
  },
  description,
  openGraph: {
    title,
    description,
    url: publicUrl,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title,
    description,
    site: "@debertjamie",
    creator: "@debertjamie",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/static/favicon.ico",
    apple: "/static/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/static/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/static/favicon-16x16.png",
      },
    ],
  },
  manifest: "/static/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    {media: "(prefers-color-scheme: dark)", color: "#0F0F1A"},
    {media: "(prefers-color-scheme: light)", color: "#F5F8F7"}
  ],
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <ThemedHTML>
      <body className="text-steel-grey dark:text-porcelain box-border selection:bg-spicy-mix selection:text-steel-grey dark:selection:bg-spicy-mix-dark dark:selection:text-porcelain">
        <div className={`${inter.className} flex bg-porcelain dark:bg-steel-grey-dark flex-col`}>
          <Header/>
          <div className="mx-auto w-screen md:max-w-3xl px-4 mt-2 min-h-[calc(100vh-15.5rem)]">{children}</div>
          <Footer/>
        </div>
      </body>
    </ThemedHTML>
  );
}
