"use client";

import { useShoppingCartStore } from "@/store/shopping-cart/shopping-cart-store";

interface Props {
  id: number;
  name: string;
}

export const ButtonAddCart = ({ id, name }: Props) => {
  const {
    productsInCart = [],
    removeProductFromCart,
    addProductToCart,
  } = useShoppingCartStore((state) => state);

  const handleSubtract = () => {
    removeProductFromCart(id);
  };

  const handleAdd = () => {
    addProductToCart(id, name);
  };
  return (
    <div className=" flex w-full justify-center">
      <div className="flex w-2/4">
        <button
          onClick={handleSubtract}
          className="cursor-pointer bg-gray-400 w-2/4 rounded-l-md"
        >
          -
        </button>
        <span className="p-2 bg-slate-300 text-black">
          {productsInCart.find((product) => product.id === id)?.quantity ?? 0}
        </span>
        <button
          onClick={handleAdd}
          className="cursor-pointer bg-gray-400 w  w-2/4 rounded-r-md"
        >
          +
        </button>
      </div>
    </div>
  );
};
