import { Products } from "@/components/Products/Products";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="font-semibold text-4xl">Productos destacados</h2>
      <Products />
    </div>
  );
}
