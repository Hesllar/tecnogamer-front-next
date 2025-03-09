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
    <div className="bg-white shadow-md rounded-lg max-w-xs  items-center dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full flex justify-center items-center">
        <Image
          src={image}
          alt="hola"
          height={300}
          className="rounded-t-lg p-4"
        />
      </div>

      {/* <img className="rounded-t-lg p-8" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image"> */}

      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h3>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
