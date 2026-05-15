import * as categoryAPI from "@/categories/helpers";
import { ProductsGrid } from "@/products/components/ProductsGrid";

import * as productAPI from "@/products/helpers";

interface Props {
  params: { ["sub-category"]: string; category: string };
}
export async function generateStaticParams() {
  const getSubCategories = await categoryAPI.getSubCategoriesByParentId(0);

  return getSubCategories!.map((subCategory) => ({
    subCategory: subCategory.name.replace(/\s+/g, "-").toLowerCase(),
  }));
}

export default async function SubCategoryPage({ params }: Props) {
  const { category, ["sub-category"]: subCategory } = params;

  const getProductsBySubCategory = await productAPI.getProductsBySubCategory(
    subCategory
  );

  const productsMapper = getProductsBySubCategory.map((product) => {
    return {
      ...product,
      category: {
        name: category,
      },
    };
  });

  return (
    <div>
      <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
        <ProductsGrid products={productsMapper} />
      </div>
    </div>
  );
}
