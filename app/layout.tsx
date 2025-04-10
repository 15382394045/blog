import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import MusicPlayer from '@/components/MusicPlayer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "我的博客",
  description: "个人博客网站",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
} 