import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface State {
  filterProduct: {
    categoryId: number;
    brandId: number | string;
    rangePrice: number;
  };
  applyFilter: boolean;
  isLoading: boolean;
  setFilterProduct: (filterProduct: State["filterProduct"]) => void;
  resetFilterProduct: (categoryId?: number) => void;
  setApplyFilter: (applyFilter: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useProductStore = create<State>()(
  devtools(
    (set, get) => ({
      filterProduct: {
        categoryId: 0,
        brandId: "",
        rangePrice: 0,
        isLoading: false,
      },
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
