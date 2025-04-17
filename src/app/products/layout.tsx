import { Filter } from "@/products/components/Filter";
import { SidebarFilter } from "@/products/components/SidebarFilter";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Filter />
      <SidebarFilter />
      {children}
    </>
  );
}
