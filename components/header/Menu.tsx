import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "../Button";

const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Pages",
    link: "/pages",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];
const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 text-[18px]">
      <div className="flex flex-col lg:flex-row items-center gap-10 font-medium leading-[18.8px] text-[#292930]">
        {menu.map((item) => (
          <Link
            key={item.name + 1}
            href={item.link}
            className={cn(
              "hover:text-[#5956E8]",
              pathname.includes(item.link) && "border-b-2 border-[#5956E8]"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <Link href="/home" className="font-medium text-[#292930]">
        Login
      </Link>
      <Button className="bg-[#292930] text-white">Get Started</Button>
    </div>
  );
};

export default Menu;
