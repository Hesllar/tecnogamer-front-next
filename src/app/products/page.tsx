import Image from "next/image";
import Link from "next/link";

import * as categoryAPI from "@/categories/helpers";
import { notFound } from "next/navigation";

export default async function ProductPage() {
  const getCategories = await categoryAPI.getCategories();

  if (getCategories.length === 0) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 items-center pt-12 md:pt-8">
      <h1 className="text-4xl font-bold text-center dark:text-white">
        Productos
      </h1>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-28 items-center">
        {getCategories.map(({ id, name, image }) => (
          <div
            key={id}
            className="shadow-2xl rounded-lg max-w-sm md:max-w-md items-center cursor-pointer"
          >
            <Link href={`/products/${name.replaceAll(" ", "-").toLowerCase()}`}>
              <div className="w-full flex justify-center items-center">
                <Image
                  src={image ?? ""}
                  alt={name}
                  width={450}
                  height={450}
                  className="w-full h-[280px]"
                />
              </div>
              <div className=" text-center">
                <button className="w-full rounded-b-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Ir a {name}
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
