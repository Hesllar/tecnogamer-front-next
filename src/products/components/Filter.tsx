"use client";

import { useUIStore } from "@/store/ui/ui-store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

const pathPermitted = ["/towers", "/video-cards", "/ram-memory", "/processors"];

export const Filter = () => {
  const [showFilterButton, setShowFilterButton] = useState(false);

  const pathname = usePathname();

  const { toggleSideFilterMenu } = useUIStore((state) => state.sidebarFilter);

  useEffect(() => {
    const validPaths = pathPermitted.some(
      (path) => pathname === `/products${path}`
    );

    // Valida si la ruta actual es una de las permitidas
    if (validPaths) {
      setShowFilterButton(true);
      return;
    }
    setShowFilterButton(false);
  }, [pathname]);

  return (
    <>
      {showFilterButton ? (
        <div className="flex justify-end mt-10 mr-8 md:mt-0 md:mr-0">
          <div
            className=" flex bg-amber-700 content-center items-center gap-2 p-2 rounded-lg cursor-pointer md:p-4"
            onClick={toggleSideFilterMenu}
          >
            <strong className="text-lg text-white">Filtros</strong>
            <FaFilter className="text-white" />
          </div>
        </div>
      ) : null}
    </>
  );
};
