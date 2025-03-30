"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface Props {
  name: string;
  icon: React.ReactNode;
  path: string;
}

export const SidebarMenuItem = ({ name, icon, path }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={clsx(
        "bg-gray-400 text-lg font-medium text-white p-2 rounded-md transition duration-150 ease-in-out hover:scale-105",
        {
          "bg-gray-800": isActive,
        }
      )}
    >
      <div className="flex gap-3 items-center">
        <div
          className={clsx("hidden md:block text-black dark:text-white", {
            "text-white": isActive,
          })}
        >
          {icon}
        </div>
        <span
          className={clsx("text-black dark:text-white", {
            "text-white": isActive,
          })}
        >
          {name}
        </span>
      </div>
    </Link>
  );
};
