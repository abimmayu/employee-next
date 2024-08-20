"use client";

import NavBar from "./navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {!disableNavbar.includes(pathName) && <NavBar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
