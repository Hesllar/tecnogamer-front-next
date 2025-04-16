import * as productsApi from "@/products/helpers";

import { ProductsGrid } from "@/products/components/ProductsGrid";
import { Filter } from "@/products/components/Filter";

export default async function RamMemoryPage() {
  const ramMemories = await productsApi.getProducts(4);

  return (
    <>
      <Filter />

      <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
        <h2 className="font-semibold text-3xl md:text-4xl dark:text-white">
          Memorias Ram
        </h2>
        <ProductsGrid products={ramMemories} />
      </div>
    </>
  );
}
