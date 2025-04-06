"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { IoArrowForward } from "react-icons/io5";

interface Props {
  path: string;
  name: string;
  itemsLength: number;
  index: number;
  setOpenNavItems: Dispatch<SetStateAction<boolean>>;
}

export const NavItems = ({
  path,
  name,
  itemsLength,
  index,
  setOpenNavItems,
}: Props) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <Link
      onClick={() => setOpenNavItems(false)}
      href={path}
      key={name}
      className={clsx(
        `h-10 content-center cursor-pointer ${
          itemsLength - (index + 1) !== 0
            ? "border-b-2 border-black"
            : undefined
        }`,
        {
          "bg-gradient-cyan-via-green_custom_2 dark:bg-gradient-sunset-custom_2":
            isActive,
          "bg-gradient-cyan-via-green_custom_1 dark:bg-gradient-sunset-custom_1":
            !isActive,
        }
      )}
    >
      <div className="flex items-center justify-center gap-6">
        {isActive && <IoArrowForward fontSize={25} className=" text-white" />}
        <span className="text-white text-lg font-semibold">{name}</span>
      </div>
    </Link>
  );
};
