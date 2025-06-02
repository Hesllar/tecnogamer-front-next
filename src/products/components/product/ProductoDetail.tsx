import React from "react";
import { ProductSpecification } from "./ProductSpecification";

interface Props {
  specefication: { [key: string]: string | number } | null;
}

export const ProductoDetail = ({ specefication }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center mt-20 ">
        <button className="bg-purple-700 p-6 rounded-s border-e-2 w-full sm:w-[220px] hover:bg-purple-950">
          <span className="text-white font-semibold text-xl">Descripcion</span>
        </button>
        <button className="bg-purple-700 p-6 rounded-e w-full sm:w-[220px] hover:bg-purple-950">
          <span className="text-white font-semibold text-xl">
            Especificaciones
          </span>
        </button>
      </div>

      {specefication && <ProductSpecification specefication={specefication} />}
    </div>
  );
};
