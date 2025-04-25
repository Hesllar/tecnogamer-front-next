import * as productsApi from "@/products/helpers";

import { ProductsGrid } from "@/products/components/ProductsGrid";
import { EnumCategory } from "@/interfaces/products";

export default async function Home() {
  const products = await productsApi.getFeaturedProducts();

  return (
    <div className="flex flex-col items-center gap-8 p-12 md:p-8">
      <h2 className="font-semibold text-3xl md:text-4xl dark:text-white">
        Productos destacados
      </h2>
      <ProductsGrid products={products} />
    </div>
  );
}
