import { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Dashboard | E-Cell MIT Manipal",
  description: "Your dashboard overview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
