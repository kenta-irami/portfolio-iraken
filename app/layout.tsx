// app/layout.tsx
import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "伊良皆 健太 | Web制作・Web開発フリーランス",
    template: "%s | 伊良皆 健太",
  },
  description:
    "小さな会社のための Web サイト制作と、問い合わせフォーム・スプレッドシート連携などのミニ自動化を行うフリーランスエンジニアのポートフォリオサイトです。",
  openGraph: {
    title: "伊良皆 健太 | Web制作・Web開発フリーランス",
    description:
      "小さな会社のための Web サイト制作と、問い合わせフォーム・スプレッドシート連携などのミニ自動化を行うフリーランスエンジニアのポートフォリオサイトです。",
    url: baseUrl,
    siteName: "伊良皆 健太 ポートフォリオ",
    locale: "ja_JP",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja" // ← ここだけ en → ja に変更
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
