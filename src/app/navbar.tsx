import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex bg-gray-500 py-5 px-5">
      <h1 className="text-white">Navigation Bar</h1>
      <ul className="flex ml-5">
        <Link href="/">
          <li className="mr-3 text-blue-500 cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="mr-3 text-blue-500 cursor-pointer">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="mr-3 text-blue-500 cursor-pointer">Profile</li>
        </Link>
      </ul>
    </nav>
  );
}
