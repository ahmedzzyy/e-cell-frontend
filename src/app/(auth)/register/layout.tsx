import { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Register Account | E-Cell MIT Manipal - Meet the Innovators",
  description: "Register your account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
