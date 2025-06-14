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

  const getProductsByCategory = await productsAPI.getProductsByParentCategoryId(
    +getCategory.id
  );

  return (
    <div className="flex gap-4 pt-12 md:pt-8">
      {/* <Filter />
      <SidebarFilter /> */}
      {/* Filtrador de productos en formato desktop */}
      <div className="bg-red-500 w-[300px] h-screen rounded-md"></div>
      <div className="flex flex-col items-center gap-8 ">
        <ProductsGrid products={getProductsByCategory} />
      </div>
    </div>
  );
}
