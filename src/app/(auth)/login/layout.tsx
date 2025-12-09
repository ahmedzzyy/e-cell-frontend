import { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Login | E-Cell MIT Manipal",
  description: "Login to your account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
