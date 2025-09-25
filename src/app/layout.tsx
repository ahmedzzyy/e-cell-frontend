import type React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Cell MIT | Entrepreneurship Cell, MIT Manipal",
  description:
    "E-Cell MIT Manipal fosters entrepreneurship by supporting startups, mentoring aspiring entrepreneurs, and building a strong entrepreneurial ecosystem. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
