import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin", "korean"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "InfoDrop - AI 요약 도우미 | 복잡한 정보를 1초 만에",
  description:
    "링크, 문서, 영상까지 한 번에 정리해주는 AI 요약 도우미 인포드롭. 정보 소비 시간을 단축하고 생산성을 높이세요.",
  keywords: ["AI 요약", "정보 정리", "생산성 툴", "문서 요약", "영상 요약"],
  generator: "v0.app",
  openGraph: {
    title: "InfoDrop - AI 요약 도우미 | 복잡한 정보를 1초 만에",
    description:
      "링크, 문서, 영상까지 한 번에 정리해주는 AI 요약 도우미 인포드롭. 정보 소비 시간을 단축하고 생산성을 높이세요.",
    type: "website",
    siteName: "InfoDrop",
    images: [
      {
        url: "/hello.png",
        width: 1200,
        height: 630,
        alt: "InfoDrop - AI 요약 도우미",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
