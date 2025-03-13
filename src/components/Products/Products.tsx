import { Products as Iproducts } from "@/interfaces/products";

import { ProductItem } from "./ProductItem";

interface Props {
  products: Iproducts[];
}

export const Products = ({ products = [] }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          category={product.category}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};
