import { notFound } from "next/navigation";

import { ProductSlideShow } from "@/products/components/product/ProductSlideShow";
import * as productAPI from "@/products/helpers";
import { ButtonAddCart } from "@/products/components/product/ButtonAddCart";
import { formatCLP } from "@/util";
import { Carrousel } from "@/components";
import { ProductoDetail } from "@/products/components/product/ProductoDetail";

interface Props {
  params: { slug: string };
}
export async function generateStaticParams() {
  const getAllProducts = await productAPI.getProducts({});

  return getAllProducts.map((product) => ({ slug: product.name }));
}

export default async function ProductSinglePage({ params }: Props) {
  const getProductByNameData = await productAPI.getProductByName(params.slug);

  if (!getProductByNameData) notFound();

  const { name, images, brand, stock, price, id } = getProductByNameData;
  return (
    <>
      <div className="flex flex-col items-center mt-32 gap-4 md:mt-9 sm:flex-row sm:items-start">
        {/* Versión desktop */}
        <ProductSlideShow images={images} />
        {/* Versión mobile */}
        <Carrousel images={images} />
        <div className=" flex flex-col gap-2 bg-gradient-to-r from-gray-300 via-white to-gray-300 w-full sm:w-2/4 lg:w-1/4 rounded-lg p-5 max-h-fit">
          <h1 className="text-lg font-bold capitalize">{brand?.name ?? ""}</h1>
          <h2 className="text-2xl font-bold capitalize">{name}</h2>
          <p className="text-lg font-semibold">
            Stock:<span className="font-normal ml-1">{stock} unidades</span>
          </p>
          <p className="text-2xl font-semibold">{formatCLP(price)}</p>
          <ButtonAddCart id={id} name={name} />
        </div>
      </div>

      <ProductoDetail specefication={getProductByNameData.specifications} />
    </>
  );
}
