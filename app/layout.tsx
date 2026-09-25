import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Sebastian Götze • Junior Frontend Web Developer",
    template: "%s | Sebastian Götze Portfolio",
  },
  description:
    "Portfolio von Sebastian Götze — Junior Frontend Web Developer (100% Remote). Spezialisiert auf Next.js, React, TypeScript und Tailwind CSS.",
  openGraph: {
    title: "Sebastian Götze • Junior Frontend Web Developer",
    description:
      "Portfolio von Sebastian Götze — Junior Frontend Web Developer (100% Remote). Spezialisiert auf Next.js, React, TypeScript und Tailwind CSS.",
    url: "https://sgoetze.vercel.app/",
    siteName: "Sebastian Götze Portfolio",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
