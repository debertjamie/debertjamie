import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Footer } from "@/ui/footer";
import { Header } from "@/ui/header";
import { inter } from "@/ui/fonts";
import { ThemedHTML } from "@/ui/header";
import { publicUrl } from "./env.mjs"

const title = "Debert Jamie";
const description = "Heya 👋😀 I'm Debert Jamie";

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  authors: [{ name: "Debert Jamie Chanderson" }],
  title: {
    default: "Debert Jamie",
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
    card: "summary_large_image",
    creator: "@debertjamie",
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
    { media: "(prefers-color-scheme: light)", color: "#ECFEFF" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemedHTML>
      <body className="mx-auto max-w-3xl bg-cyan-50 dark:bg-zinc-950 text-zinc-950 dark:text-cyan-50 selection:bg-violet-950 selection:text-cyan-50">
        <div
          className={inter.className + " mt-8 mx-4 flex flex-col min-h-screen"}
        >
          <Header />
          <div className="mt-2 mb-8">{children}</div>
          <Footer />
        </div>
      </body>
    </ThemedHTML>
  );
}
