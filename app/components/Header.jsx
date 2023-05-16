"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center border border-rosyBrown pt-4 pb-3 relative top-0 w-full">
      <div className="flex flex-col">
        <Link href="/">
          <h1 className="text-3xl p-1">Writing to Better Health</h1>
        </Link>
        <nav className="flex justify-around mx-[55px]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
