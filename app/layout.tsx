import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IT Scube",
  description: "IT導入を全力サポート!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <Hero title="日々の備忘録" sub="ITScube" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
