"use client";

import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { NavItems } from "./NavItems";
import clsx from "clsx";
import { useUIStore } from "@/store/ui/ui-store";
import { FaShoppingCart } from "react-icons/fa";

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
  const { sideMenuMobile, sideMenuDesktop, sidebarFilter } = useUIStore(
    (state) => state
  );

  const handleOnClick = () => {
    sideMenuMobile.toggleSideMenu();
  };
  return (
    <>
      {/* Versión Desktop */}
      <nav
        className={clsx(
          "fixed h-14 top-0 w-full mx-auto drop-shadow-lg p-2 z-50 bg-gradient-cyan-via-green content-center md:px-10 dark:bg-gradient-sunset"
        )}
      >
        <div className="flex justify-center">
          <div className="flex justify-between xl:w-[1360px]">
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

            <div className="flex gap-2 items-center">
              <IoMenu
                onClick={handleOnClick}
                size={30}
                className="block cursor-pointer text-black md:hidden dark:text-white"
              />
              <FaShoppingCart
                size={25}
                className="block cursor-pointer text-black  dark:text-white"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap justify-between items-center">
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
        </div> */}
      </nav>

      {/* Versión Mobile */}
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
