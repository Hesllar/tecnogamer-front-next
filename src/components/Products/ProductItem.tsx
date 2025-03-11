import Image, { StaticImageData } from "next/image";

interface Props {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  precio: number;
  image: StaticImageData;
}

export const ProductItem = ({
  id,
  nombre,
  descripcion,
  categoria,
  precio,
  image,
}: Props) => {
  return (
    <div className=" bg-white shadow-md rounded-lg max-w-xs items-center ">
      <div className="w-full flex justify-center items-center">
        <Image
          src={image}
          alt={nombre}
          height={300}
          className="rounded-t-lg p-4"
        />
      </div>
      <div className="flex flex-col gap-3 px-5 pb-5">
        <h3 className="text-gray-900 font-semibold text-lg tracking-tight ">
          {descripcion.length > 50
            ? descripcion.slice(0, 50) + "..."
            : descripcion}
        </h3>
        <div className="flex flex-col gap-2 items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 ">${precio}</span>
          <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
