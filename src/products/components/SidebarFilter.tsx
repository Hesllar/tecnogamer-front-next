"use client";

import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";

export const SidebarFilter = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  return (
    <div
      className={clsx(
        "fixed p-5 right-0 top-0 w-[350px] h-screen bg-amber-700 z-20 shadow-2xl transition-transform duration-300 ease-in-out",
        {
          "translate-x-full": !isSideMenuOpen,
        }
      )}
    ></div>
  );
};
