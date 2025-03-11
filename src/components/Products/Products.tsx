import { Products as Iproducts } from "@/interfaces/products";
import {
  amdRyzen5800,
  amdRyzen9900,
  intelCore11400,
  intelCoreUltra265K,
} from "../../../public/index";

import { ProductItem } from "./ProductItem";

interface Props {
  products: Iproducts[];
}

const imageData: { [key: number]: any } = {
  0: amdRyzen5800,
  1: amdRyzen9900,
  2: intelCore11400,
  3: intelCoreUltra265K,
};

export const Products = ({ products = [] }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          category={product.category}
          price={product.price}
          image={imageData[index]}
        />
      ))}
    </div>
  );
};
