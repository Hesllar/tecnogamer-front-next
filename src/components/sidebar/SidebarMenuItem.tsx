"use client";

import { Category } from "@/categories/interfaces";
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface Props extends Category {
  icon: React.ReactNode | null;
}

export const SidebarMenuItem = ({ name, icon }: Props) => {
  const { toggleSideMenu } = useUIStore((state) => state.sideMenuDesktop);
  const pathname = usePathname();
  const formattedName = `/products/${name.replaceAll(" ", "-").toLowerCase()}`;
  const isActive = pathname === formattedName;

  return (
    <Link
      onClick={toggleSideMenu}
      href={formattedName}
      className={clsx("text-2xl font-medium text-white p-4 rounded-md", {
        "shadow-2xl backdrop-blur-3xl": isActive,
      })}
    >
      <div className="flex gap-3 items-center">
        <span className={"text-black dark:text-white"}>{name}</span>
        <div
          className={clsx("text-black dark:text-white", {
            "text-white": isActive,
          })}
        >
          {icon}
        </div>
      </div>
    </Link>
  );
};
