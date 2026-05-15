"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { Category } from "@/categories/interfaces";
import { NavSubItem } from "./NavSubItem";

interface Props {
  id?: string;
  name?: string;
  image?: string;
  is_active?: boolean;
  subCategories?: Category[];
}

export const NavItems = ({ id, name, subCategories = [] }: Props) => {
  const formattedName = `/products/${name!.replaceAll(" ", "-").toLowerCase()}`;

  const [itemActive, setItemActive] = useState<number | null>(null);

  return (
    <div
      className="relative inline-block p-5 cursor-pointer hover:shadow-2xl hover:backdrop-blur-3xl"
      onMouseEnter={() => setItemActive(+id!)}
      onMouseLeave={() => setItemActive(null)}
    >
      <Link
        className="font-semibold text-lg text-white uppercase max-[891px]:text-sm"
        href={formattedName}
      >
        {name}
      </Link>

      {/* Dropdown de subcategorías */}
      {subCategories.length > 0 && (
        <div
          className={clsx(
            "absolute left-0 top-full w-full min-w-max z-10 transition-all duration-300 ease-in-out",
            "bg-gradient-to-b from-cyan-800 to-cyan-900",
            "border border-cyan-700 rounded-b-lg shadow-xl shadow-cyan-900/50",
            "backdrop-blur-sm",
            {
              "opacity-100 visible translate-y-0": itemActive === +id!,
              "opacity-0 invisible -translate-y-2": itemActive !== +id!,
            }
          )}
        >
          <div className="py-2">
            {subCategories.map(({ id, name }) => (
              <NavSubItem
                key={+id!}
                id={+id!}
                name={name}
                url={formattedName}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
