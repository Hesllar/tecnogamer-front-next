import { Filter } from "@/products/components/Filter";
import { SidebarFilter } from "@/products/components/SidebarFilter";
import * as brandApi from "@/brands/helper";

export default async function ({ children }: { children: React.ReactNode }) {
  const brands = await brandApi.getBrands();

  return (
    <>
      <Filter />
      <SidebarFilter brands={brands} />
      {children}
    </>
  );
}
