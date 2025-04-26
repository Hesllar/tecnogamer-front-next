"use client";

import { useUIStore } from "@/store/ui/ui-store";
import { usePathname } from "next/navigation";
import { FaFilter } from "react-icons/fa";

export const Filter = () => {
  const pathname = usePathname();
  const { openSidebarFilter } = useUIStore((state) => state.sidebarFilter);

  return (
    <>
      {pathname !== "/products" ? (
        <div className="flex justify-end mt-10 mr-8 md:mt-0 md:mr-0">
          <div
            className=" flex bg-amber-700 content-center items-center gap-2 p-2 rounded-lg cursor-pointer md:p-4"
            onClick={openSidebarFilter}
          >
            <strong className="text-lg text-white">Filtros</strong>
            <FaFilter className="text-white" />
          </div>
        </div>
      ) : null}
    </>
  );
};
