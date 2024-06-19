import { cn } from "@/lib/utils";
import React from "react";
import Menu from "./Menu";
import { RxCross2 } from "react-icons/rx";

const MobileMenu = ({
  mobileMenu,
  closemenu,
}: {
  mobileMenu: boolean;
  closemenu: () => void;
}) => {
  return (
    <>
      {mobileMenu && (
        <div
          onClick={closemenu}
          className="fixed inset-0 lg:hidden bg-black/50 z-[99]"
        />
      )}
      <div
        className={cn(
          "fixed lg:hidden -right-full top-0 bottom-0 bg-white max-w-80 w-full h-screen z-[100] duration-300",
          mobileMenu && "right-0"
        )}
      >
        <button
          onClick={closemenu}
          className="p-2 bg-[#292930] text-white m-2 rounded"
        >
          <RxCross2 size={24} />
        </button>
        <Menu />
      </div>
    </>
  );
};

export default MobileMenu;
