import { Brand } from "@/brands/interfaces";
import { Category } from "@/categories/interfaces";

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
  namenormalized: string;
  price: number;
  status: string;
  images: string[];
  categoryId: number;
  brandId: number;
  specifications: { [key: string]: string | number } | null;
  description?: string;
  stock?: number;
  category?: Category;
  brand?: Brand;
  is_active: boolean;
}

export interface Price {
  price: {
    max: number | undefined;
  };
}
