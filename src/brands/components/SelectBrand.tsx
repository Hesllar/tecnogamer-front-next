"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Brand } from "../interfaces";
import { identifyCategoryIdByURL } from "@/util";
import * as brandAPI from "@/brands/helper";
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";

interface Props {
  handleOnchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  valueSelect: number | string;
}

export const SelectBrand = ({ handleOnchange, valueSelect }: Props) => {
  const { isSidebarFilterOpen } = useUIStore((state) => state.sidebarFilter);

  const pathname = usePathname();

  const [brands, setBrands] = useState<Brand[]>([
    {
      id: 0,
      name: "Todos las marcas",
    },
  ]);

  {
    /* Con este efecto consultamos las marcas de los productos relacionadas a la categoriía */
  }

  useEffect(() => {
    if (isSidebarFilterOpen && brands.length < 2) {
      const categoryId = identifyCategoryIdByURL(pathname);

      if (!categoryId) return;

      brandAPI
        .getBrands(categoryId)
        .then((brands) => {
          if (brands.length === 0) {
            setBrands([]);
            return;
          }

          setBrands((prev) => {
            brands.map((brand, index) => {
              return {
                id: index + 1,
                name: brand.name,
              };
            });
            return [...prev, ...brands];
          });
        })
        .catch(() => {
          setBrands([]);
        });
    }
  }, [isSidebarFilterOpen]);

  return (
    <select
      disabled={brands.length <= 2}
      name="brandId"
      onChange={handleOnchange}
      value={valueSelect}
      className={clsx(
        "w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  pr-10",
        {
          "cursor-not-allowed": brands.length <= 2,
          "cursor-pointer": brands.length > 2,
        }
      )}
    >
      <option value={""} disabled>
        Selecciona una marca
      </option>
      {brands.map((brand) => (
        <option key={brand.id} value={brand.id}>
          {brand.name}
        </option>
      ))}
    </select>
  );
};
