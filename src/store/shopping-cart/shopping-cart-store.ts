import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ProductsInCart {
  id: number;
  name: string;
  quantity: number;
}

export interface ShoppingCartStore {
  productsInCart: ProductsInCart[];
  removeProductFromCart: (id: number) => void;
  addProductToCart: (id: number, name: string) => void;
}

export const useShoppingCartStore = create<ShoppingCartStore>()(
  devtools(
    (set, get) => ({
      productsInCart: [],
      removeProductFromCart: (id) => {
        let { productsInCart } = get();

        const existsProductInCart = productsInCart.find(
          (product) => product.id === id
        );

        if (!existsProductInCart) return;

        if (existsProductInCart.quantity === 1) {
          productsInCart = productsInCart.filter(
            (product) => product.id !== id
          );
          set({ productsInCart });
          return;
        }

        productsInCart = productsInCart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        });

        set({ productsInCart });
      },
      addProductToCart: (id, name) => {
        let { productsInCart } = get();

        const existsProductInCart = productsInCart.some(
          (product) => product.id === id
        );

        if (!existsProductInCart) {
          productsInCart = [...productsInCart, { id, name, quantity: 1 }];
          set({ productsInCart });
          return;
        }
        productsInCart = productsInCart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });

        set({ productsInCart });
      },
    }),

    {
      name: "useShoppingCartStore",
    }
  )
);
