"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { IoIosKeypad, IoMdCube } from "react-icons/io";

interface Props {
  setOpenNavItems: Dispatch<SetStateAction<boolean>>;
}

const items = [
  {
    name: "Inicio",
    icon: <IoIosKeypad size={10} />,
    path: "/",
  },
  {
    name: "Productos",
    icon: <IoMdCube size={10} />,
    path: "/products",
  },
];
export const NavItems = ({ setOpenNavItems }: Props) => {
  return (
    <div className="flex flex-col fixed w-full top-14 bg-slate-600 text-center transform transition-all duration-300 translate-y-[0%] md:hidden">
      {items.map((item, index) => (
        <Link
          onClick={() => setOpenNavItems(false)}
          href={item.path}
          key={item.name}
          className={`h-10 content-center ${
            items.length - (index + 1) !== 0
              ? "border-b-2 border-black"
              : undefined
          }`}
        >
          <span className="text-white text-lg font-semibold">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};
