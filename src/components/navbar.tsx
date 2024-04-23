import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <div className="fixed right-0 left-0 top-0 px-4 py-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-2xl font-bold">Auto</p>
        <Image
          src="/logo.svg"
          width={15}
          height={15}
          alt="Logo"
          className="shadow-sm"
        />
        <p className="text-2xl font-bold">Builder</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#"> Home </Link>
          </li>
          <li>
            <Link href="#"> Pricing </Link>
          </li>
          <li>
            <Link href="#"> Docs </Link>
          </li>
          <li>
            <Link href="#"> Resources </Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link href="/dashboard">Dashboard</Link>
      </aside>
    </div>
  );
};

export default Navbar;
