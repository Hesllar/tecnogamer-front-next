"use client";

import { FaArrowLeft } from "react-icons/fa";
import { SidebarMenuItem } from "./SidebarMenuItem";

import { IoMdCube, IoIosKeypad } from "react-icons/io";
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";

const sidebar = [
  {
    name: "Inicio",
    icon: <IoIosKeypad size={40} />,
    path: "/",
  },
  {
    name: "Productos",
    icon: <IoMdCube size={40} />,
    path: "/products",
  },
];

export const Sidebar = () => {
  const { isSideMenuOpen, toggleSideMenu } = useUIStore(
    (state) => state.sideMenuDesktop
  );

  return (
    <div
      id="sidebar"
      className={clsx(
        " bg-white h-screen w-0 block left-0 shadow-xl overflow-x-hidden transform transition-all duration-500 ease-in-out dark:bg-gradient-to-b from-black to-orange-300",
        {
          "-translate-x-52 md:w-0 px-0": !isSideMenuOpen,
          "w-0 px-0 md:w-80 md:px-3": isSideMenuOpen,
        }
      )}
      x-show="sidenav"
    >
      <div className="w-full flex justify-end items-center mt-4 ">
        <FaArrowLeft
          size={35}
          className="text-white cursor-pointer"
          onClick={toggleSideMenu}
        />
      </div>
      <div className="space-y-6 md:space-y-10 mt-10">
        <div id="profile" className="space-y-3">
          <img
            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Avatar user"
            className="w-10 md:w-16 rounded-full mx-auto"
          />
          <div>
            <h2 className="font-medium text-xs md:text-xl text-center text-teal-500">
              Eduard Pantazi
            </h2>
            <p className="text-md text-gray-500 text-center">Administrator</p>
          </div>
        </div>
        <div id="menu" className="flex flex-col gap-4 space-y-2">
          {sidebar.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
