import { ProductStore } from "@/interfaces/products";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useProductStore = create<ProductStore>()(
  devtools(
    (set, get) => ({
      filterProduct: {
        categoryId: 0,
        brandId: "",
        rangePrice: 0,
        maxPrice: undefined,
      },
      isLoading: false,
      applyFilter: false,
      setFilterProduct: (filterProduct) => set({ filterProduct }),
      resetFilterProduct: () => {
        const { filterProduct } = get();
        set({
          filterProduct: {
            ...filterProduct,
            brandId: "",
            rangePrice: 0,
          },
        });
      },
      setApplyFilter: (applyFilter) => set({ applyFilter }),
      setIsLoading: (isLoading) => set({ isLoading }),
    }),

    {
      name: "ProductStore",
    }
  )
);
