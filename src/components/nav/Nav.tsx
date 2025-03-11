import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export const Nav = () => {
  return (
    <nav className=" h-14 top-0 w-full mx-auto drop-shadow-lg px-10 z-50  fixed bg-gray-500 content-center md:static">
      <div className="flex flex-wrap justify-between items-center w-full">
        <Link href="/" className="flex items-center">
          <h1 className="block self-center text-2xl font-serif font-bold whitespace-nowrap text-white">
            Tecnogamer
          </h1>
        </Link>
        <IoMenu
          size={30}
          className="block cursor-pointer text-white md:hidden"
        />
      </div>
    </nav>
  );
};
