export enum EnumCategory {
  "All" = 0,
  "Procesadores" = 1,
  "TarjetasVideo" = 2,
  "PlacasMadre" = 3,
  "MemoriaRAM" = 4,
  "Almacenamiento" = 5,
  "Perifericos" = 6,
  "Refrigeracion" = 7,
  "FuentesPoder" = 8,
  "Monitores" = 9,
  "Laptops" = 10,
  "Gabinetes" = 11,
}

export interface Product {
  id: number;
  name: string;
  price: number;
  status: string;
  imageUrl: string;
  categoryId: number;
  brandId: number;
  description?: string;
  stock?: number;
}

export interface Price {
  price: {
    max: number | undefined;
  };
}

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
