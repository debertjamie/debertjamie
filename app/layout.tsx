import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Footer } from "@/ui/footer";
import { Header } from "@/ui/header";
import { inter } from "@/ui/fonts";
import { ThemedHTML } from "@/ui/components";
import { publicUrl } from "./env.mjs";

// Default metadata
const title = "Debert Jamie Chanderson";
const description = "Heya 👋😀 I'm Debert Jamie";

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  authors: [{ name: "Debert Jamie Chanderson" }],
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
  themeColor: "#0369A1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemedHTML>
      <body className="mx-auto max-w-5xl bg-zinc-100 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-100 selection:bg-violet-950 selection:text-zinc-100">
        <div
          className={`${inter.className} mt-8 mx-4 flex flex-col min-h-screen`}
        >
          <Header />
          <div className="mt-2 mb-8 min-h-screen">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </ThemedHTML>
  );
}
