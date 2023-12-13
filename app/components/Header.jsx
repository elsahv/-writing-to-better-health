"use client";

import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="flex justify-center border border-rosyBrown pt-4 pb-3 relative top-0 w-full">
      <div className="flex flex-col">
        <Link href="/">
          <h1 className="text-3xl p-1">Writing to Better Health</h1>
        </Link>
        <nav className="flex justify-around mx-[55px]">
          {links.map((link) => (
            <Link key={link.href} className="" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
