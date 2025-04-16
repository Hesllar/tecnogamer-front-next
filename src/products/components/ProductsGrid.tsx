import { Product } from "@/interfaces/products";

import { ProductItem } from "./ProductItem";

interface Props {
  products: Product[];
}

export const ProductsGrid = ({ products = [] }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};
