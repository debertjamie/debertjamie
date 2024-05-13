import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Footer } from "@/ui/footer";
import { Header } from "@/ui/header";
import { inter } from "@/ui/fonts";
import { ThemedHTML } from "@/wrapper";

export const metadata: Metadata = {
  title: "Debert Jamie",
  description: "Heya 👋😀 I'm Debert Jamie",
  openGraph: {
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@debertjamie",
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EBEBFF' },
    { media: '(prefers-color-scheme: dark)', color: '#01001E' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemedHTML>
      <body className="mx-auto max-w-3xl bg-brand-50 dark:bg-brand-950 text-brand-950 dark:text-brand-50 selection:bg-brand-800 selection:text-brand-50">
        <div
          className={
            inter.className + " mt-8 mx-4 flex flex-col min-h-screen"
          }
        >
          <Header />
          <div className="mt-2 mb-8">{children}</div>
          <Footer />
        </div>
      </body>
    </ThemedHTML>
  );
}
