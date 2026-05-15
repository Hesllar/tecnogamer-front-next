"use client";

import { FaMemory } from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { PiComputerTower } from "react-icons/pi";
import clsx from "clsx";

import { useUIStore } from "@/store/ui/ui-store";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { Category } from "@/categories/interfaces";

interface Props {
  categories: {
    id?: string;
    name: string;
    image?: string;
    is_active?: boolean;
    subCategory?: Category[];
  }[];
}

const icons = {
  2: { id: 2, icon: <BsGpuCard /> },
  1: { id: 1, icon: <GiProcessor /> },
  11: { id: 11, icon: <PiComputerTower /> },
  4: { id: 4, icon: <FaMemory /> },
};

export const Sidebar = ({ categories }: Props) => {
  const { isSideMenuOpen, toggleSideMenu } = useUIStore(
    (state) => state.sideMenuDesktop
  );

  const categoriesMapper = categories.map((category) => {
    const parserID = Number(category.id);
    if (parserID === icons[parserID as keyof typeof icons].id) {
      return {
        ...category,
        icon: icons[parserID as keyof typeof icons].icon,
      };
    }
    return {
      ...category,
      icon: null,
    };
  });

  return (
    <>
      {isSideMenuOpen && (
        <div
          onClick={toggleSideMenu}
          className="fade-in fixed w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      <div
        className={clsx(
          "fixed overflow-hidden p-5 left-0 top-14 w-[350px] h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-400 z-30 transition-transform duration-200 ease-in-out",
          {
            "translate-x-[-100%] shadow-[0px_0_0px_0_rgba(15,194,205)]":
              !isSideMenuOpen,
            "shadow-[6px_0_6px_0_rgba(15,194,205)]": isSideMenuOpen,
          }
        )}
      >
        <div className=" flex flex-col gap-2 space-y-6 md:space-y-10 mt-10">
          {categoriesMapper.map((category) => (
            <SidebarMenuItem key={category.id} {...category} />
          ))}
          {/* <div id="menu" className="flex flex-col gap-4 space-y-2">
          {sidebar.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))}
        </div> */}
        </div>
      </div>
    </>
  );
};
