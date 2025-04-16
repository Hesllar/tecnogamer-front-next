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
