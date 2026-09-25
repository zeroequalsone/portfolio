import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sebastian Götze • Junior Frontend Web Developer",
  description:
    "Portfolio von Sebastian Götze — Junior Frontend Web Developer (100% Remote). Spezialisiert auf Next.js, React, TypeScript und Tailwind CSS.",
  openGraph: {
    title: "Sebastian Götze • Junior Frontend Web Developer",
    description:
      "Portfolio von Sebastian Götze — Junior Frontend Web Developer (100% Remote). Spezialisiert auf Next.js, React, TypeScript und Tailwind CSS.",
    url: "https://portfolio-ivory-nine-h5k6lbfmqv.vercel.app/",
    siteName: "Sebastian Götze Portfolio",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
