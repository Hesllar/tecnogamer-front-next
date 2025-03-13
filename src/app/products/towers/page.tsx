import { towers } from "../../../data/products.json";
import { Products } from "@/components/Products/Products";
import {
  gabinete1,
  gabinete2,
  gabinete3,
  gabinete4,
  gabinete5,
} from "../../../../public/index";

export default function TowersPage() {
  const imagesData: { [key: number]: any } = {
    0: gabinete1,
    1: gabinete2,
    2: gabinete3,
    3: gabinete4,
    4: gabinete5,
  };

  const towersMapper = towers.map((tower, index) => ({
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
