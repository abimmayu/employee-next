"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();

  const { status }: { status: string } = useSession();
  console.log("🚀 ~ NavBar ~ status:", status);

  return (
    <nav className="flex bg-gray-500 py-2 px-5 justify-between">
      <div className="flex">
        <h1 className="text-white">Navigation Bar</h1>
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-3 ${
                pathName === "/" ? "text-blue-500" : "text-white"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 ${
                pathName === "/about" ? "text-blue-500" : "text-white"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/employee">
            <li
              className={`mr-3 ${
                pathName === "/employee" ? "text-blue-500" : "text-white"
              } cursor-pointer`}
            >
              Employee
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <button
            className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
            onClick={() => signOut()}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
