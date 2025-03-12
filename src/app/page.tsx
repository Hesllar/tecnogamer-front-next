import { products } from "../data/products.json";

import { Products } from "@/components/Products/Products";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 pt-12 md:pt-8">
      <h2 className="font-semibold text-4xl">Productos destacados</h2>
      <Products products={products} />
    </div>
  );
}
