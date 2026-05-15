import { notFound } from "next/navigation";

import * as categoryAPI from "@/categories/helpers";
import * as productsAPI from "@/products/helpers";
import { ProductsGrid } from "@/products/components/ProductsGrid";
import { FilterDesktop } from "@/products/components/FilterDesktop";
import { SidebarFilter } from "@/products/components/SidebarFilter";

interface Props {
  params: { category: string };
}

export default async function ProductsByCategoryPage({ params }: Props) {
  let initialSubCategories: { id: string | undefined; name: string }[] = [];

  const { category } = params;

  const formattedCategory = category.replaceAll("-", " ");

  const getCategory = await categoryAPI.getCategoryByName(formattedCategory);

  if (!getCategory) notFound();

  const getProductsByCategory = await productsAPI.getProductsByParentCategoryId(
    +getCategory.id!
  );

  const subCategories = await categoryAPI.getSubCategoriesByParentId(
    +getCategory.id!
  );

  if (subCategories) {
    initialSubCategories = subCategories.map((subCategory) => ({
      id: subCategory.id,
      name: subCategory.name,
    }));
  }

  const productsMapper = getProductsByCategory.map((product) => {
    return {
      ...product,
      category: {
        id: getCategory.id,
        name: formattedCategory,
      },
    };
  });

  return (
    <div className="flex gap-4 pt-12 md:pt-8 justify-center xs:justify-normal">
      {/* <Filter />
      <SidebarFilter /> */}
      {/* Filtrador de productos en formato desktop */}
      {/* <FilterDesktop subCategories={initialSubCategories} /> */}
      <div className="flex flex-col items-center gap-8 ">
        <ProductsGrid products={productsMapper} />
      </div>
    </div>
  );
}
