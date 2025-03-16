import dataJson from "../../../data/products.json";
import { Products } from "@/components/Products/Products";
import memoriaRam1 from "../../../../public/image/memoriasRam/ram1.webp";
import memoriaRam2 from "../../../../public/image/memoriasRam/ram2.webp";
import memoriaRam3 from "../../../../public/image/memoriasRam/ram3.webp";
import memoriaRam4 from "../../../../public/image/memoriasRam/ram4.webp";
import memoriaRam5 from "../../../../public/image/memoriasRam/ram5.webp";

export default function RamMemoryPage() {
  const imagesData: { [key: number]: any } = {
    0: memoriaRam1,
    1: memoriaRam2,
    2: memoriaRam3,
    3: memoriaRam4,
    4: memoriaRam5,
  };

  const ramMemoryMapper = dataJson.ramMemory.map((ramMemory, index) => ({
    ...ramMemory,
    image: imagesData[index],
  }));
  return (
    <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
      <h2 className="font-semibold text-3xl md:text-4xl dark:text-white">
        Memorias Ram
      </h2>
      <Products products={ramMemoryMapper} />
    </div>
  );
}
