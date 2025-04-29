import Image from "next/image";
import { Product } from "@/interfaces/products";
import { formatCLP, mapperCategoryName } from "@/util";
import ImageNotFound from "../../../public/imagen_no_encontrada.webp";
import Link from "next/link";
import clsx from "clsx";

export const ProductItem = ({ id, name, price, images, category }: Product) => {
  const categoryName = mapperCategoryName(category.name);

  return (
    <Link
      href={
        categoryName
          ? `${categoryName}/${name.toLowerCase().replaceAll(" ", "-")}`
          : "#"
      }
      className={clsx(
        "flex flex-col justify-between bg-white shadow-md rounded-lg max-w-xs items-center h-[450px]  dark:bg-zinc-800",
        {
          "cursor-pointer": categoryName,
          "cursor-not-allowed": !categoryName,
        }
      )}
    >
      <div className="w-full flex justify-center items-center h-[250px]">
        <Image
          src={images.length > 0 ? images[0] : ImageNotFound}
          alt={name}
          height={150}
          width={250}
          className="w-[250px] h-full p-5"
        />
      </div>
      <div className="flex flex-col gap-3 px-5 pb-5">
        <h2 className="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
          {name.toUpperCase()}
        </h2>
        <div className="flex flex-col gap-2 items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {formatCLP(price)}
          </span>
          <button className="w-full cursor-not-allowed text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Añadir al carrito
          </button>
        </div>
      </div>
    </Link>
  );
};
