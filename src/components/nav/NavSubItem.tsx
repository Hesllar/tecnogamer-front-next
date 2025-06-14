"use client";

import { useProductStore } from "@/store/products/product-store";

interface Props {
  id: number;
  name: string;
}

export const NavSubItem = ({ id, name }: Props) => {
  const { filterProduct, setFilterProduct, setApplyFilter } = useProductStore(
    (state) => state
  );

  const handleOnClick = () => {
    setFilterProduct({ ...filterProduct, categoryId: id });
    setApplyFilter(true);
  };

  return (
    <span
      className="text-white text-center font-semibold block px-4 py-2 text-sm uppercase hover:bg-cyan-500"
      onClick={handleOnClick}
    >
      {name}
    </span>
  );
};
