"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { identifyCategoryIdByURL } from "@/util";
import * as productApi from "@/products/helpers";
import { useProductStore } from "@/store/products/product-store";
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";

interface Props {
  rangePrice: number;
  handleOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRangePrice = ({ rangePrice, handleOnchange }: Props) => {
  const pathname = usePathname();

  const { isSidebarFilterOpen } = useUIStore((state) => state.sidebarFilter);

  const { filterProduct, setFilterProduct } = useProductStore((state) => state);

  {
    /* Obtengo el precio maximo de los productos */
  }
  useEffect(() => {
    if (isSidebarFilterOpen && filterProduct.maxPrice === undefined) {
      const categoryId = identifyCategoryIdByURL(pathname);

      if (!categoryId) return;

      productApi
        .getPrice(categoryId)
        .then(({ price }) => {
          setFilterProduct({
            ...filterProduct,
            maxPrice: price.max,
          });
        })
        .catch(() => {
          setFilterProduct({
            ...filterProduct,
            maxPrice: undefined,
          });
        });
    }
  }, [isSidebarFilterOpen]);
  return (
    <div>
      <span className="font-semibold text-white">
        Selecciona un rango de precio
      </span>
      <input
        type="range"
        min={0}
        max={filterProduct.maxPrice}
        className={clsx("w-full", {
          "cursor-not-allowed": filterProduct.maxPrice === undefined,
          " cursor-pointer": filterProduct.maxPrice !== undefined,
        })}
        value={rangePrice}
        name="rangePrice"
        onChange={handleOnchange}
        disabled={filterProduct.maxPrice === undefined}
      />
      <div className="flex justify-center">
        <span className="text-white font-semibold">{`$ ${rangePrice}`}</span>
      </div>
    </div>
  );
};
