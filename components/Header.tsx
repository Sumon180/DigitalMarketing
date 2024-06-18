"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../public/Logo.png";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrollClass, setScrollClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setScrollClass("after-scroll-navbar");
      } else {
        setScrollClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-50",
        scrollClass ? "bg-white" : "bg-transparent"
      )}
    >
      <div className="section-wrapper h-[81px] flex items-center justify-between">
        <div>
          <Image src={logo} alt="logo" className="w-[170px] h-[81.16]" />
        </div>
        <div className="flex items-center gap-10 text-[18px]">
          <ul className="flex items-center gap-10 font-medium leading-[18.8px] text-[#292930]">
            <li className="border-b-2 border-[#5956E8]">
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/home">About</Link>
            </li>
            <li>
              <Link href="/home">Services</Link>
            </li>
            <li>
              <Link href="/home">Pages</Link>
            </li>
            <li>
              <Link href="/home">Blog</Link>
            </li>
          </ul>
          <Link href="/home" className="font-medium text-[#292930]">
            Login
          </Link>
          <button className="px-5 py-2 rounded bg-[#292930] text-white font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
