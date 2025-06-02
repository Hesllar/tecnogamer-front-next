import { notFound } from "next/navigation";

import * as categoryAPI from "@/categories/helpers";
import * as productsAPI from "@/products/helpers";
import { ProductsGrid } from "@/products/components/ProductsGrid";
import { Filter } from "@/products/components/Filter";
import { SidebarFilter } from "@/products/components/SidebarFilter";

interface Props {
  params: { category: string };
}

export default async function ProductsByCategoryPage({ params }: Props) {
  const { category } = params;

  const formattedCategory = category.replaceAll("-", " ");

  const getCategory = await categoryAPI.getCategoryByName(formattedCategory);

  if (!getCategory) notFound();

  const getProductsByCategory = await productsAPI.getProducts({
    categoryId: +getCategory.id,
  });

  return (
    <div className="flex flex-col">
      {/* <Filter />
      <SidebarFilter /> */}
      <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
        <h2 className="font-semibold text-3xl uppercase md:text-4xl dark:text-white">
          {formattedCategory}
        </h2>
        <ProductsGrid products={getProductsByCategory} />
      </div>
    </div>
  );
}
