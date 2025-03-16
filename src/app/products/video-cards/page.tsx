import dataJson from "../../../data/products.json";
import { Products } from "@/components/Products/Products";
import gpu1 from "../../../../public/image/tarjetasVideo/gpu1.webp";
import gpu2 from "../../../../public/image/tarjetasVideo/gpu2.webp";
import gpu3 from "../../../../public/image/tarjetasVideo/gpu3.webp";
import gpu4 from "../../../../public/image/tarjetasVideo/gpu4.webp";
import gpu5 from "../../../../public/image/tarjetasVideo/gpu5.webp";

export default function VideoCardsPage() {
  const imagesData: { [key: number]: any } = {
    0: gpu1,
    1: gpu2,
    2: gpu3,
    3: gpu4,
    4: gpu5,
  };
  const videoCardsMapper = dataJson.videoCards.map((videoCard, index) => ({
    ...videoCard,
    image: imagesData[index],
  }));
  return (
    <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
      <h2 className="font-semibold text-3xl md:text-4xl dark:text-white">
        Tarjetas de video
      </h2>
      <Products products={videoCardsMapper} />
    </div>
  );
}
