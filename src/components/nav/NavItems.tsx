"use client";

import { Category } from "@/categories/interfaces";
import clsx from "clsx";

import { useRouter } from "next/navigation";
import { NavSubItem } from "./NavSubItem";
import { useState } from "react";

interface Props {
  id: string;
  name: string;
  image: string;
  is_active: boolean;
  subCategories?: Category[];
}

export const NavItems = ({ id, name, subCategories = [] }: Props) => {
  const router = useRouter();

  const formattedName = `/products/${name.replaceAll(" ", "-").toLowerCase()}`;

  const [itemActive, setItemActive] = useState<number | null>(null);

  const handleClick = () => {
    router.push(formattedName);
  };

  return (
    <div
      className="relative inline-block p-5 cursor-pointer hover:shadow-2xl hover:backdrop-blur-3xl"
      onMouseEnter={() => setItemActive(+id)}
      onMouseLeave={() => setItemActive(null)}
      onClick={handleClick}
    >
      <span
        className={`font-semibold text-lg text-white uppercase max-[891px]:text-sm`}
      >
        {name}
      </span>

      {subCategories.length > 0 && (
        <div
          className={clsx(
            "absolute right-0 z-10 mt-5 w-full origin-top-right rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ",
            {
              "block bg-cyan-900": itemActive, // Show the dropdown if the item is active
              hidden: !itemActive, // Hide the dropdown if the item is not active
            }
          )}
          id="dropdown1"
        >
          <div className="py-1" role="none">
            {subCategories.map(({ id, name }) => (
              <NavSubItem key={+id} id={+id} name={name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
