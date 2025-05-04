import { notFound } from "next/navigation";

import { ProductSlideShow } from "@/products/components/product/ProductSlideShow";
import * as productAPI from "@/products/helpers";

interface Props {
  params: { slug: string };
}

export default async function ProcessorsSinglePage({ params }: Props) {
  const getProductByNameData = await productAPI.getProductByName(params.slug);

  if (!getProductByNameData) {
    notFound();
  }
  const { name, images } = getProductByNameData;
  return (
    <div className="flex flex-row h-[600px] mt-32 md:mt-0 gap-4 items-center max-[1090px]:flex-col min-[1090px]:gap-0">
      <ProductSlideShow images={images} />
      <div className="bg-red-600 w-2/4">
        <span>asd</span>
      </div>
    </div>
  );
}
