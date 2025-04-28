"use client";

import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { NavItems } from "./NavItems";
import clsx from "clsx";
import { useUIStore } from "@/store/ui/ui-store";

const items = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Productos",
    path: "/products",
  },
];

export const Nav = () => {
  const { sideMenuMobile } = useUIStore((state) => state);

  const { sideMenuDesktop } = useUIStore((state) => state);

  const handleOnClick = () => {
    sideMenuMobile.toggleSideMenu();
  };
  return (
    <>
      <nav className=" h-14 top-0 w-full mx-auto drop-shadow-lg p-2 z-50 fixed bg-gradient-cyan-via-green content-center md:px-10 md:static dark:bg-gradient-sunset">
        <div className="flex flex-wrap justify-between items-center w-full">
          <div className="flex items-center justify-between gap-4">
            {!sideMenuDesktop.isSideMenuOpen && (
              <IoMenu
                onClick={sideMenuDesktop.toggleSideMenu}
                size={30}
                className="block cursor-pointer text-black max-[768px]:hidden dark:text-white"
              />
            )}

            <Link href="/" className="flex items-center">
              <h1 className="block self-center text-2xl font-serif font-bold whitespace-nowrap text-white">
                Tecnogamer
              </h1>
            </Link>
          </div>

          <IoMenu
            onClick={handleOnClick}
            size={30}
            className="block cursor-pointer text-black md:hidden dark:text-white"
          />
        </div>
      </nav>
      <div
        className={clsx(
          "flex flex-col fixed w-full -top-10 text-center transform transition-all duration-300 md:hidden",
          {
            "translate-y-24": sideMenuMobile.isSideMenuOpen,
          }
        )}
      >
        {items.map((item) => (
          <NavItems
            index={items.indexOf(item)}
            key={item.name}
            path={item.path}
            name={item.name}
            itemsLength={items.length}
          />
        ))}
      </div>
    </>
  );
};
