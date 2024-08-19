"use client";

import NavBar from "./navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ["/login", "/register"];

// export const metadata = {
//   title: "Create Next App",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [state, setState] = useState(0);
  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(pathName) && <NavBar />}
        {children}
      </body>
    </html>
  );
}
