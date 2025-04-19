import * as productsApi from "@/products/helpers";

import { ProductsGrid } from "@/products/components/ProductsGrid";
import { EnumCategory } from "@/interfaces/products";

export default async function Home() {
  const products = await productsApi.getProducts(EnumCategory.All);

  // let uniqueValues: number[] = [];

  // const randomItems = () => {
  //   do {
  //     uniqueValues = arrayFivePosition.map(() => {
  //       return Math.floor(Math.random() * joinDataJson.length) + 1;
  //     });
  //   } while (new Set(uniqueValues).size < 5);

  //   return uniqueValues;
  // };

  // randomItems();

  // const getDataRandom = uniqueValues.map(
  //   (value) => joinDataJson.find((item) => item.id === value)!
  // );

  return (
    <div className="flex flex-col items-center gap-8 p-12 md:p-8">
      <h2 className="font-semibold text-3xl md:text-4xl dark:text-white">
        Productos destacados
      </h2>
      <ProductsGrid products={products} />
    </div>
  );
}
