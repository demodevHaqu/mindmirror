import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mindmirror - 당신의 불안, 다음 단계 지능의 설계도",
  description: "인지 패턴 기반 아트 변환 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

