import { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Our Team | E-Cell MIT Manipal - Meet the Innovators",
  description:
    "Meet the passionate team leaders behind E-Cell MIT Manipal driving entrepreneurship, innovation, and startup success across various departments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
