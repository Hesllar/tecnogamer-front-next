import dataJson from "../../../data/products.json";
import { Products } from "@/components/Products/Products";
import gabinete1 from "../../../../public/image/gabinetes/gabinete1.webp";
import gabinete2 from "../../../../public/image/gabinetes/gabinete2.webp";
import gabinete3 from "../../../../public/image/gabinetes/gabinete3.webp";
import gabinete4 from "../../../../public/image/gabinetes/gabinete4.webp";
import gabinete5 from "../../../../public/image/gabinetes/gabinete5.webp";

export default function TowersPage() {
  const imagesData: { [key: number]: any } = {
    0: gabinete1,
    1: gabinete2,
    2: gabinete3,
    3: gabinete4,
    4: gabinete5,
  };

  const towersMapper = dataJson.towers.map((tower, index) => ({
    ...tower,
    image: imagesData[index],
  }));
  return (
    <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
      <h2 className="font-semibold text-3xl md:text-4xl">Gabinetes</h2>
      <Products products={towersMapper} />
    </div>
  );
}
