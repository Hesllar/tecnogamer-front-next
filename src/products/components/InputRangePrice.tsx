"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { identifyCategoryByURL } from "@/helper";
import * as productApi from "@/products/helpers";
import { useProductStore } from "@/store/products/product-store";
import { useUIStore } from "@/store/ui/ui-store";

interface Props {
  rangePrice: number;
  handleOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRangePrice = ({ rangePrice, handleOnchange }: Props) => {
  const pathname = usePathname();

  const { isSideMenuOpen } = useUIStore((state) => state);

  const { filterProduct, setFilterProduct } = useProductStore((state) => state);

  {
    /* Obtengo el precio maximo de los productos */
  }
  useEffect(() => {
    if (isSideMenuOpen && filterProduct.maxPrice === 0) {
      const categoryId = identifyCategoryByURL(pathname);

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
  }, [isSideMenuOpen]);
  return (
    <div>
      <span className="font-semibold text-white">
        Selecciona un rango de precio
      </span>
      <input
        type="range"
        min={0}
        max={filterProduct.maxPrice}
        className="w-full"
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
