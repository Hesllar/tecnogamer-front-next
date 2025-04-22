import { Filter } from "@/products/components/Filter";
import { SidebarFilter } from "@/products/components/SidebarFilter";
import * as brandApi from "@/brands/helper";

export default async function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let brands = await brandApi.getBrands();

  const brandAll = { id: 0, name: "Todos" };

  brands = [brandAll, ...brands].map((brand, index) => ({
    id: index,
    name: brand.name,
  }));
  return (
    <>
      <Filter />
      <SidebarFilter brands={brands} />
      {children}
    </>
  );
}
