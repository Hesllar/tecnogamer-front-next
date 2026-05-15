"use client";

import { Category } from "@/categories/interfaces";
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

interface Props extends Category {
  icon: React.ReactNode | null;
  subCategories?: Category[];
}

export const SidebarMenuItem = ({ id, name, icon, subCategories }: Props) => {
  const { toggleSideMenu } = useUIStore((state) => state.sideMenuDesktop);
  const pathname = usePathname();
  const formattedName = `/products/${name.replaceAll(" ", "-").toLowerCase()}`;

  const [itemActive, setItemActive] = useState(0);

  const handleClick = () => {
    setItemActive((prev) => {
      if (prev === +id!) {
        return 0;
      }
      return +id!;
    });
  };

  if (subCategories?.length === 0) {
    return (
      <Link
        onClick={toggleSideMenu}
        href={formattedName}
        className={clsx("text-2xl font-medium text-white p-4 rounded-md")}
      >
        <div className="flex gap-3 items-center">
          <span className={"text-black dark:text-white"}>{name}</span>
          <div className={clsx("text-black dark:text-white")}>{icon}</div>
        </div>
      </Link>
    );
  }

  return (
    <div
      onClick={() => handleClick()}
      className={clsx(
        "text-2xl font-medium text-white p-4 rounded-md hover:cursor-pointer"
      )}
    >
      <div className="flex gap-3 items-center">
        <span className={"text-black dark:text-white"}>{name}</span>
        <div className={clsx("text-black dark:text-white")}>{icon}</div>
      </div>
      <div
        className={clsx(
          " left-0 top-full w-full min-w-max z-10 transition-all duration-300 ease-in-out",
          "border border-cyan-600 rounded-b-lg shadow-xl shadow-cyan-900/50",
          "backdrop-blur-sm flex flex-col gap-4 p-4",
          {
            "opacity-100 visible translate-y-0 h-fit": itemActive === +id!,
            "opacity-0 invisible -translate-y-2 h-0": itemActive !== +id!,
          }
        )}
      >
        {subCategories?.map(({ id, name }) => (
          <Link
            key={+id!}
            onClick={toggleSideMenu}
            href={`${formattedName}/sub-category/${name
              .replaceAll(" ", "-")
              .toLowerCase()}`}
            className={clsx("text-2xl font-medium text-white")}
          >
            <div className="flex gap-3 items-center">
              <span className={"text-black dark:text-white"}>{name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
