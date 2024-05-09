import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/ui/footer";
import { inter } from "@/ui/fonts";
import { ThemedHTML } from "@/wrapper";

export const metadata: Metadata = {
  title: "Debert Jamie",
  description: "Heya 👋😀 I'm Debert Jamie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemedHTML>
      <body className="mx-auto max-w-5xl bg-brand-50 dark:bg-brand-950 text-brand-950 dark:text-brand-50 selection:bg-brand-800 selection:text-brand-50">
        <div
          className={
            inter.className + " mt-8 mx-4 lg:mt-12 flex flex-col min-h-screen"
          }
        >
          <div className="mb-12">{children}</div>
          <Footer />
        </div>
      </body>
    </ThemedHTML>
  );
}
