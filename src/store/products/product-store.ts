import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface ProductStore {
  filterProduct: {
    categoryId: number;
    brandId: string | number;
    rangePrice: number;
    maxPrice: number | undefined;
  };
  applyFilter: boolean;
  isLoading: boolean;
  setFilterProduct: (filterProduct: ProductStore["filterProduct"]) => void;
  resetFilterProduct: (categoryId?: number) => void;
  setApplyFilter: (applyFilter: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

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
