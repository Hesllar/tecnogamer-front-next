import { StaticImageData } from "next/image";

import dataJson from "../data/products.json";

import { Products } from "@/components/Products/Products";

import amdRyzen5800 from "../../public/image/procesadores/AMD_RYZEN_7_5800X.webp";
import amdRyzen9900 from "../../public/image/procesadores/AMD_REYZEN_9_9900X.webp";
import intelCore11400 from "../../public/image/procesadores/INTEL_CORE_5_11400.webp";
import intelCoreUltra265K from "../../public/image/procesadores/INTEL_CORE_ULTRA_7_265K.webp";
import memoriaRam1 from "../../public/image/memoriasRam/ram1.webp";
import memoriaRam2 from "../../public/image/memoriasRam/ram2.webp";
import memoriaRam3 from "../..//public/image/memoriasRam/ram3.webp";
import memoriaRam4 from "../../public/image/memoriasRam/ram4.webp";
import memoriaRam5 from "../..//public/image/memoriasRam/ram5.webp";
import gabinete1 from "../../public/image/gabinetes/gabinete1.webp";
import gabinete2 from "../../public/image/gabinetes/gabinete2.webp";
import gabinete3 from "../../public/image/gabinetes/gabinete3.webp";
import gabinete4 from "../../public/image/gabinetes/gabinete4.webp";
import gabinete5 from "../../public/image/gabinetes/gabinete5.webp";
import gpu1 from "../..//public/image/tarjetasVideo/gpu1.webp";
import gpu2 from "../../public/image/tarjetasVideo/gpu2.webp";
import gpu3 from "../../public/image/tarjetasVideo/gpu3.webp";
import gpu4 from "../../public/image/tarjetasVideo/gpu4.webp";
import gpu5 from "../../public/image/tarjetasVideo/gpu5.webp";

export default function Home() {
  const { processors, ramMemory, towers, videoCards } = dataJson;

  const arrayFivePosition = new Array(5).fill(null);

  const imagesData: { [key: number]: StaticImageData } = {
    0: amdRyzen5800,
    1: amdRyzen9900,
    2: intelCore11400,
    3: intelCoreUltra265K,
    4: memoriaRam1,
    5: memoriaRam2,
    6: memoriaRam3,
    7: memoriaRam4,
    8: memoriaRam5,
    9: gabinete1,
    10: gabinete2,
    11: gabinete3,
    12: gabinete4,
    13: gabinete5,
    14: gpu1,
    15: gpu2,
    16: gpu3,
    17: gpu4,
    18: gpu5,
  };

  const joinDataJson = processors
    .concat(ramMemory)
    .concat(towers)
    .concat(videoCards)
    .map((item, index) => {
      return {
        ...item,
        image: imagesData[index],
        id: index + 1,
      };
    });

  let uniqueValues: number[] = [];

  const randomItems = () => {
    do {
      uniqueValues = arrayFivePosition.map(() => {
        return Math.floor(Math.random() * joinDataJson.length) + 1;
      });
    } while (new Set(uniqueValues).size < 5);

    return uniqueValues;
  };

  randomItems();

  const getDataRandom = uniqueValues.map(
    (value) => joinDataJson.find((item) => item.id === value)!
  );

  return (
    <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
      <h2 className="font-semibold text-3xl md:text-4xl">
        Productos destacados
      </h2>
      <Products products={getDataRandom} />
    </div>
  );
}
