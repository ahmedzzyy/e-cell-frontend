import { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Register for IPC | E-Cell MIT Manipal",
  description:
    "Register your entrepreneurship club for Innovation Policy Consortium (IPC)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
