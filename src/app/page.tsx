import dataJson from "../data/products.json";

import { Products } from "@/components/Products/Products";
import amdRyzen5800 from "../../public/image/procesadores/AMD_RYZEN_7_5800X.webp";
import amdRyzen9900 from "../../public/image/procesadores/AMD_REYZEN_9_9900X.webp";
import intelCore11400 from "../../public/image/procesadores/INTEL_CORE_5_11400.webp";
import intelCoreUltra265K from "../../public/image/procesadores/INTEL_CORE_ULTRA_7_265K.webp";

export default function Home() {
  const imagesData: { [key: number]: any } = {
    0: amdRyzen5800,
    1: amdRyzen9900,
    2: intelCore11400,
    3: intelCoreUltra265K,
  };

  const highProductsMapper = dataJson.highProducts.map((product, index) => ({
    ...product,
    image: imagesData[index],
  }));

  return (
    <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
      <h2 className="font-semibold text-3xl md:text-4xl">
        Productos destacados
      </h2>
      <Products products={highProductsMapper} />
    </div>
  );
}
