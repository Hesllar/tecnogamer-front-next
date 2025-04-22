import * as productsApi from "@/products/helpers";

import { ProductsGrid } from "@/products/components/ProductsGrid";
import { EnumCategory } from "@/interfaces/products";

export default async function TowersPage() {
  const towers = await productsApi.getProducts({
    categoryId: EnumCategory.Gabinetes,
  });

  return (
    <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
      <h2 className="font-semibold text-3xl md:text-4xl dark:text-white">
        Gabinetes
      </h2>
      <ProductsGrid products={towers} />
    </div>
  );
}
