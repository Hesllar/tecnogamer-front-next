import * as productsApi from "@/products/helpers";

import { ProductsGrid } from "@/products/components/ProductsGrid";

export default async function Home() {
  const featuredProducts = await productsApi.getFeaturedProducts();

  return (
    <div className="flex flex-col h-full items-center gap-8">
      <h2 className="font-semibold text-3xl md:text-4xl dark:text-white">
        Productos destacados
      </h2>
      <ProductsGrid products={featuredProducts} />
    </div>
  );
}
