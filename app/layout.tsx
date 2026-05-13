import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexusTally — Tally Certified 5-Star Partner | TallyPrime Solutions",
  description:
    "Premier TallyPrime Sales, Implementation, Customization, Training & Support. Certified 5-Star Tally Partner serving 2000+ businesses across India.",
  keywords:
    "TallyPrime, Tally Partner, Tally Customization, Tally Sales, Tally Support, Tally Training, accounting software, business management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
