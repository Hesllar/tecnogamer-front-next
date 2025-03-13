import { highProducts } from "../data/products.json";

import { Products } from "@/components/Products/Products";

import {
  amdRyzen5800,
  amdRyzen9900,
  intelCore11400,
  intelCoreUltra265K,
} from "../../public/index";

export default function Home() {
  const imagesData: { [key: number]: any } = {
    0: amdRyzen5800,
    1: amdRyzen9900,
    2: intelCore11400,
    3: intelCoreUltra265K,
  };

  const highProductsMapper = highProducts.map((product, index) => ({
    ...product,
    image: imagesData[index],
  }));

  return (
    <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
      <h2 className="font-semibold text-3xl md:text-4xl">
        Productos destacados
      </h2>
      <Products products={highProductsMapper} />
    </div>
  );
}
