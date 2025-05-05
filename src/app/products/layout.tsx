import { Filter } from "@/products/components/Filter";
import { SidebarFilter } from "@/products/components/SidebarFilter";

import * as productAPI from "@/products/helpers";

export async function generateStaticParams() {
  const getAllProducts = await productAPI.getProducts({});

  return getAllProducts.map((product) => ({ name: product.name }));
}
export default async function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Filter />
      <SidebarFilter />
      {children}
    </div>
  );
}
