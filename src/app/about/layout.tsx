import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-11 h-screen w-60 bg-gray-500">
        <ul className="text-white p-2">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
