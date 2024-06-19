"use client";

import Image from "next/image";

import React, { useEffect, useState } from "react";
import logo from "@/public/Logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { cn } from "@/lib/utils";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [scrollClass, setScrollClass] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <>
      <div
        className={cn(
          "fixed left-0 right-0 z-50",
          scrollClass ? "bg-white" : "bg-transparent"
        )}
      >
        <div className="section-wrapper h-[81px] flex items-center justify-between">
          <Image src={logo} alt="logo" className="w-[170px] h-[81.16]" />
          <div className="hidden lg:block">
            <Menu />
          </div>
          <button onClick={() => setMobileMenu(true)} className="lg:hidden">
            <HiMenuAlt3 size={25} />
          </button>
        </div>
      </div>
      <MobileMenu
        mobileMenu={mobileMenu}
        closemenu={() => setMobileMenu(false)}
      />
    </>
  );
};

export default Header;
