"use client";

import { Filter } from "@/products/components/Filter";
import { SidebarFilter } from "@/products/components/SidebarFilter";
import { useUIStore } from "@/store/ui/ui-store";
import { usePathname } from "next/navigation";

export default function ({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  const closeMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <>
      {pathname !== "/products" && (
        <>
          <Filter />
          <SidebarFilter />
        </>
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {children}
    </>
  );
}
