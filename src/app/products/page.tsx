import Image from "next/image";
import Link from "next/link";

import gabinete from "../../../public/image/productos/gabinete.webp";
import gpu from "../../../public/image/productos/gpus.webp";
import ramMemory from "../../../public/image/productos/ram_memory.webp";
import procesador from "../../../public/image/productos/procesadores.webp";

export default function ProductPage() {
  return (
    <div className="flex flex-col gap-8 items-center pt-12 md:pt-8">
      <h1 className="text-4xl font-bold text-center dark:text-white">
        Productos
      </h1>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-28 items-center">
        <div className="shadow-2xl rounded-lg max-w-sm md:max-w-md items-center cursor-pointer">
          <Link href="/products/towers">
            <div className="w-full flex justify-center items-center">
              <Image src={gabinete} alt="gabinete" className="w-full" />
            </div>
            <div className=" text-center">
              <button className="w-full rounded-b-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir a gabinetes
              </button>
            </div>
          </Link>
        </div>
        <div className="shadow-2xl rounded-lg max-w-sm md:max-w-md  items-center cursor-pointer">
          <Link href="/products/video-cards">
            <div className="w-full flex justify-center items-center">
              <Image src={gpu} alt="gpu" className="w-full" />
            </div>
            <div className=" text-center">
              <button className="w-full rounded-b-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir a tarjetas gráficas
              </button>
            </div>
          </Link>
        </div>
        <div className="shadow-2xl rounded-lg max-w-sm md:max-w-md  items-center cursor-pointer">
          <Link href="/products/ram-memory">
            <div className="w-full flex justify-center items-center">
              <Image src={ramMemory} alt="ramMemory" className="w-full" />
            </div>
            <div className=" text-center">
              <button className="w-full rounded-b-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir a memorias RAM
              </button>
            </div>
          </Link>
        </div>
        <div className="shadow-2xl rounded-lg max-w-sm md:max-w-md  items-center cursor-pointer">
          <Link href="/products/processors">
            <div className="w-full flex justify-center items-center">
              <Image src={procesador} alt="procesador" className="w-full" />
            </div>
            <div className=" text-center">
              <button className="w-full rounded-b-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir a procesadores
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
