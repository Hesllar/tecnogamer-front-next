"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavItems } from "./NavItems";

export const Nav = () => {
  const [openNavItems, setOpenNavItems] = useState(false);
  const handleOnClick = () => {
    setOpenNavItems(!openNavItems);
  };
  return (
    <>
      <nav className=" h-14 top-0 w-full mx-auto drop-shadow-lg p-2 z-50 fixed bg-gradient-to-r from-cyan-500 via-green-400 to-white content-center md:px-10 md:static">
        <div className="flex flex-wrap justify-between items-center w-full">
          <Link href="/" className="flex items-center">
            <h1 className="block self-center text-2xl font-serif font-bold whitespace-nowrap text-white">
              Tecnogamer
            </h1>
          </Link>
          <IoMenu
            onClick={handleOnClick}
            size={30}
            className="block cursor-pointer text-black md:hidden"
          />
        </div>
      </nav>
      {openNavItems && <NavItems />}
    </>
  );
};
