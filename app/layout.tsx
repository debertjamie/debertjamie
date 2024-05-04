import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/ui/footer";
import { inter } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Debert Jamie",
  description: "Heya 👋😀 I'm Debert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-5xl">
        <div className={inter.className + " mt-8 mx-4 lg:mt-12 flex flex-col min-h-screen"}>
          <div className="mb-12">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
