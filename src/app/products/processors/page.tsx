import dataJson from "../../../data/products.json";
import { Products } from "@/components/Products/Products";
import cpu1 from "../../../../public/image/procesadores/AMD_RYZEN_7_5800X.webp";
import cpu2 from "../../../../public/image/procesadores/AMD_REYZEN_9_9900X.webp";
import cpu3 from "../../../../public/image/procesadores/INTEL_CORE_5_11400.webp";
import cpu4 from "../../../../public/image/procesadores/INTEL_CORE_ULTRA_7_265K.webp";

export default function ProcessorsPage() {
  const imagesData: { [key: number]: any } = {
    0: cpu1,
    1: cpu2,
    2: cpu3,
    3: cpu4,
  };

  const processorsMapper = dataJson.processors.map((processor, index) => ({
    ...processor,
    image: imagesData[index],
  }));
  return (
    <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
      <h2 className="font-semibold text-3xl md:text-4xl dark:text-white">
        Procesadores
      </h2>
      <Products products={processorsMapper} />
    </div>
  );
}
