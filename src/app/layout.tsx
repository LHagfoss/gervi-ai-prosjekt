import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import { NextAuthProvider } from '@/providers/auth';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Video Platform for Business | Text to Video",
  description: "Create studio-quality videos with AI avatars and voiceovers",
  openGraph: {
    title: "AI Video Platform for Business | Text to Video",
    description: "Create studio-quality videos with AI avatars and voiceovers.",
    images: [
      {
        url: "/opengraph.png",
        width: 1280,
        height: 720,
        alt: "Omnigen AI - AI Video Platform for Business | Text to Video"
      }
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Omnigen AI - AI Video Platform for Business | Text to Video",
    description: "Create studio-quality videos with AI avatars and voiceovers.",
    images: ['/opengraph.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
