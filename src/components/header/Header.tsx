"use client";

import { useUIStore } from "@/store/ui/ui-store";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export const Header = () => {
  const { toggleSideMenu } = useUIStore((state) => state.sideMenuDesktop);

  return (
    <header className="fixed flex justify-center h-14 top-0 w-full mx-auto drop-shadow-lg z-20 bg-gradient-cyan-via-green content-center px-6 md:px-0 dark:bg-gradient-sunset">
      <div className="flex justify-between w-full md:w-10/12 2xl:w-full 2xl:max-w-[1360px]">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <h1 className="block self-center text-2xl font-serif font-bold whitespace-nowrap text-white">
              Tecnogamer
            </h1>
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          <IoMenu
            onClick={toggleSideMenu}
            size={30}
            className="block cursor-pointer text-black md:hidden dark:text-white"
          />
          <FaShoppingCart
            size={25}
            className="block cursor-pointer text-black  dark:text-white"
          />
        </div>
      </div>
    </header>
  );
};
