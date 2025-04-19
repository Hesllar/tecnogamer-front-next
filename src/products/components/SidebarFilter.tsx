"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";
import { useUIStore } from "@/store/ui/ui-store";
import { SelectBrand } from "@/brands/components/SelectBrand";
import { Brand } from "@/brands/interfaces";
import * as productApi from "@/products/helpers";
import { identifyCategoryByURL } from "@/helper";

interface SidebarProps {
  isSideMenuOpen: boolean;
  closeMenu: () => void;
  brands: Brand[];
  pathname: string;
}

interface SidebarFilterProps {
  brands: Brand[];
}

const Sidebar = ({
  isSideMenuOpen,
  closeMenu,
  brands,
  pathname,
}: SidebarProps) => {
  const [maxValue, setMaxValue] = useState<number | undefined>(undefined);

  const [filterData, setFilterData] = useState({
    brandId: 0,
    price: 0,
  });

  const handleOnchange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFilterData((prev) => {
      return {
        ...prev,
        [target.name]: +target.value,
      };
    });
  };

  const handleSubmit = () => {
    closeMenu();
    handleReset();
  };

  const handleReset = () => {
    if (filterData.brandId === 0 && filterData.price === 0) return;
    setFilterData({
      brandId: 0,
      price: 0,
    });
  };

  const disabledButton = () => {
    if (filterData.brandId === 0 || maxValue === undefined) {
      return true;
    }
    return false;
  };

  {
    /* Obtengo el precio maximo de los productos */
  }
  useEffect(() => {
    const categoryId = identifyCategoryByURL(pathname);

    if (!categoryId) return;

    productApi
      .getPrice(categoryId)
      .then(({ price }) => {
        setMaxValue(price.max);
      })
      .catch(() => {
        setMaxValue(undefined);
      });
  }, [pathname]);

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
        onClick={() => {
          closeMenu();
          handleReset();
        }}
      />
      <div className="flex flex-col gap-8 justify-center mt-32">
        <div>
          {/* Componente de selector */}
          <SelectBrand
            brandId={filterData.brandId}
            brands={brands}
            handleOnchange={handleOnchange}
          />
        </div>
        <div>
          <span className="font-semibold text-white">
            Selecciona un rango de precio
          </span>
          <input
            type="range"
            min={0}
            max={maxValue}
            className="w-full"
            value={filterData.price}
            name="price"
            onChange={handleOnchange}
            disabled={maxValue === undefined}
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
          className={clsx(
            "bg-white w-full p-4 rounded-lg  font-semibold hover:shadow-l hover:bg-zinc-100",
            {
              "bg-gray-300 text-gray-500 cursor-not-allowed rounded font-medium shadow-sm opacity-75":
                disabledButton(),
            }
          )}
          disabled={disabledButton()}
        >
          Filtrar
        </button>
      </div>
    </div>
  );
};

export const SidebarFilter = ({ brands }: SidebarFilterProps) => {
  const pathname = usePathname();
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <>
      {pathname !== "/products" ? (
        <Sidebar
          isSideMenuOpen={isSideMenuOpen}
          closeMenu={closeMenu}
          brands={brands}
          pathname={pathname}
        />
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
