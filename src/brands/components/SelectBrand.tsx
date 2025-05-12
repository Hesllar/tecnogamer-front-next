"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

import { Brand } from "../interfaces";
import { useUIStore } from "@/store/ui/ui-store";
import { useProductStore } from "@/store/products/product-store";
import * as brandAPI from "@/brands/helper";
import { ErrorComponent } from "@/components";

interface Props {
  handleOnchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  valueSelect: number | string;
}

export const SelectBrand = ({ handleOnchange, valueSelect }: Props) => {
  const { isSidebarFilterOpen } = useUIStore((state) => state.sidebarFilter);

  const { filterProduct } = useProductStore((state) => state);

  const [retryBrands, setRetryBrands] = useState(false);

  const [brands, setBrands] = useState<Brand[]>([]);

  const [isLoading, setIsloading] = useState(false);

  const [isError, setIsError] = useState(false);

  const onClickRetryBrands = () => {
    setRetryBrands(!retryBrands);
  };

  {
    /* Con este efecto consultamos las marcas de los productos relacionadas a la categoriía */
  }

  useEffect(() => {
    if (
      isSidebarFilterOpen &&
      brands.length === 0 &&
      filterProduct.categoryId
    ) {
      setIsError(false);
      setIsloading(true);
      brandAPI
        .getBrands(filterProduct.categoryId!)
        .then((brands) => {
          if (brands.length === 0) {
            setBrands([]);
            return;
          }

          const mapperBrands = brands.map((brand) => {
            return {
              id: brand.id,
              name: brand.name,
            };
          });
          setBrands([
            {
              id: 0,
              name: "Todos las marcas",
            },
            ...mapperBrands,
          ]);
        })
        .catch(() => {
          setIsError(true);
        })
        .finally(() => setIsloading(false));
    }
  }, [filterProduct.categoryId, retryBrands]);

  return (
    <div className="flex flex-col gap-4">
      {isError && !isLoading && (
        <ErrorComponent
          message="Error al cargar las marcas"
          details="No pudimos conectar con el servidor. Verifica tu conexión a internet e intenta nuevamente."
          onRetry={onClickRetryBrands}
        />
      )}
      <select
        disabled={brands.length <= 2 || isError}
        name="brandId"
        onChange={handleOnchange}
        value={valueSelect}
        className={clsx(
          "w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  pr-10",
          {
            "cursor-not-allowed": brands.length <= 2 || isError,
            "cursor-pointer": brands.length > 2 || !isError,
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
    </div>
  );
};
