import { notFound } from "next/navigation";

import { ProductSlideShow } from "@/products/components/product/ProductSlideShow";
import * as productAPI from "@/products/helpers";
import { ButtonAddCart } from "@/products/components/product/ButtonAddCart";
import { formatCLP } from "@/util";

interface Props {
  params: { slug: string };
}

export default async function VideoCardSinglePage({ params }: Props) {
  const getProductByNameData = await productAPI.getProductByName(params.slug);

  if (!getProductByNameData) {
    notFound();
  }
  const { name, images, brand, stock, price, id } = getProductByNameData;
  return (
    <div className="flex flex-row h-[600px] mt-32 md:mt-0 gap-4 max-[1090px]:flex-col min-[1090px]:gap-0">
      <ProductSlideShow images={images} />
      <div className=" flex flex-col gap-2 bg-gradient-to-r from-gray-300 via-white to-gray-300 w-1/4 rounded-lg p-5 max-h-fit">
        <h1 className="text-lg font-bold capitalize">{brand?.name ?? ""}</h1>
        <h2 className="text-2xl font-bold capitalize">{name}</h2>
        <p className="text-lg font-semibold">
          Stock:<span className="font-normal ml-1">{stock} unidades</span>
        </p>
        <p className="text-2xl font-semibold">{formatCLP(price)}</p>
        <ButtonAddCart id={id} name={name} />
      </div>
    </div>
  );
}
