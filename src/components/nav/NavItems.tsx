"use client";

import { Category } from "@/categories/interfaces";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = ({ name }: Category) => {
  const pathname = usePathname();
  const formattedName = `/products/${name.replaceAll(" ", "-").toLowerCase()}`;

  const isActive = pathname === formattedName;
  return (
    <Link
      href={formattedName}
      className={`cursor-pointer p-4 hover:bg-purple-900 ${
        isActive ? " bg-purple-900" : ""
      }`}
    >
      <span className={`font-semibold text-lg text-white`}>{name}</span>
    </Link>
  );
};
