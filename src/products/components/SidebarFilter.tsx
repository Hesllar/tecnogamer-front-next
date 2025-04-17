"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useUIStore } from "@/store/ui/ui-store";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

interface SidebarProps {
  isSideMenuOpen: boolean;
  closeMenu: () => void;
}

const Sidebar = ({ isSideMenuOpen, closeMenu }: SidebarProps) => {
  const [filterData, setFilterData] = useState({
    categoryId: 0,
    price: 0,
  });

  const handleOnchange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFilterData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const handleSubmit = () => {
    closeMenu();
  };

  return (
    <div
      className={clsx(
        "fixed p-5 right-0 top-0 w-[350px] h-screen bg-amber-700 z-20 shadow-2xl transition-transform duration-300 ease-in-out",
        {
          "translate-x-full": !isSideMenuOpen,
        }
      )}
    >
      <FaArrowRight
        size={40}
        className="text-white cursor-pointer"
        onClick={closeMenu}
      />
      <div className="flex flex-col gap-8 justify-center mt-32">
        <div>
          <select
            name="categoryId"
            onChange={handleOnchange}
            value={filterData.categoryId}
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer pr-10"
          >
            <option value={0} disabled>
              Selecciona una categoría
            </option>
            <option value="">Price</option>
            <option value="category">Category</option>
            <option value="brand">Brand</option>
          </select>
        </div>
        <div>
          <span className="font-semibold text-white">
            Selecciona un rango de precio
          </span>
          <input
            type="range"
            min={0}
            max={1000}
            className="w-full"
            value={filterData.price}
            name="price"
            onChange={handleOnchange}
          />
          <div className="flex justify-center">
            <span className="text-white font-semibold">{`$ ${filterData.price}`}</span>
          </div>
        </div>
      </div>
      <div className="w-full border border-solid border-x-white mt-16 shadow-xl" />
      <div className="flex justify-center mt-16">
        <button
          onClick={handleSubmit}
          className="bg-white w-full p-4 rounded-lg  font-semibold hover:shadow-l hover:bg-zinc-100"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
};

export const SidebarFilter = () => {
  const pathname = usePathname();
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <>
      {pathname !== "/products" ? (
        <Sidebar isSideMenuOpen={isSideMenuOpen} closeMenu={closeMenu} />
      ) : null}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}
    </>
  );
};
