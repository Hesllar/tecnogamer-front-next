import { StaticImageData } from "next/image";

export interface Products {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: StaticImageData;
  stock?: number;
}
