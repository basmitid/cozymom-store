import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "코지맘 | 사교육 없이도 우리 아이 공부 습관을 만들 수 있어요",
  description:
    "코지맘 전자책으로 논술·독해력·수행평가·독서습관까지 우리 집에 맞는 공부 루틴을 만드세요. 6,000부 판매, 후기 평점 5.0",
  openGraph: {
    title: "코지맘 | 사교육 없이 공부 습관 만들기",
    description: "현직 엄마가 만든 초등 공부 가이드북 15종",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
