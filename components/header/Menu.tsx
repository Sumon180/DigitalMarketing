import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="hidden lg:flex items-center gap-10 text-[18px]">
      <div className="flex items-center gap-10 font-medium leading-[18.8px] text-[#292930]">
        <Link href="/home" className="border-b-2 border-[#5956E8]">
          Home
        </Link>
        <Link href="/home">About</Link>
        <Link href="/home">Services</Link>
        <Link href="/home">Pages</Link>
        <Link href="/home">Blog</Link>
      </div>
      <Link href="/home" className="font-medium text-[#292930]">
        Login
      </Link>
      <button className="px-5 py-2 rounded bg-[#292930] text-white font-medium">
        Get Started
      </button>
    </div>
  );
};

export default Menu;
