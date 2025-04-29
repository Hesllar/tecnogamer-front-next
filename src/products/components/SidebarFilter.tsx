"use client";

import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";

import { useUIStore } from "@/store/ui/ui-store";
import { useProductStore } from "@/store/products/product-store";
import { SelectBrand } from "@/brands/components/SelectBrand";
import { InputRangePrice } from "./InputRangePrice";

const Sidebar = () => {
  {
    /*Gestor de estados de productos */
  }
  const {
    filterProduct,
    setApplyFilter,
    setFilterProduct,
    resetFilterProduct,
  } = useProductStore((state) => state);

  {
    /*Gestor de estados de UI */
  }
  const { isSidebarFilterOpen, toggleSideFilterMenu } = useUIStore(
    (state) => state.sidebarFilter
  );

  const handleOnchange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFilterProduct({
      ...filterProduct,
      [target.name]: +target.value,
    });
  };

  const handleSubmit = () => {
    setApplyFilter(true);
    toggleSideFilterMenu();
  };

  const handleReset = () => {
    if (filterProduct.brandId === "" && filterProduct.rangePrice === 0) return;

    resetFilterProduct();
  };

  const disabledButton = () => {
    if (filterProduct.brandId === "" || filterProduct.maxPrice === undefined) {
      return true;
    }
    return false;
  };

  return (
    <>
      {/* Blur */}
      {isSidebarFilterOpen && (
        <div
          onClick={() => {
            toggleSideFilterMenu();
            handleReset();
          }}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      <div
        className={clsx(
          "fixed p-5 right-0 top-0 w-[350px] h-screen bg-amber-700 z-20 shadow-2xl transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isSidebarFilterOpen,
          }
        )}
      >
        <FaArrowRight
          size={40}
          className="text-white cursor-pointer"
          onClick={() => {
            toggleSideFilterMenu();
            handleReset();
          }}
        />
        <div className="flex flex-col gap-8 justify-center mt-32">
          <div>
            {/* Componente de selector de marcas */}
            <SelectBrand
              valueSelect={filterProduct.brandId}
              handleOnchange={handleOnchange}
            />
          </div>

          {/* Componente rango de precio*/}
          <InputRangePrice
            handleOnchange={handleOnchange}
            rangePrice={filterProduct.rangePrice}
          />
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
    </>
  );
};

export const SidebarFilter = () => {
  const pathname = usePathname();

  return pathname !== "/products" ? <Sidebar /> : null;
};
