import { ProductSlideShow } from "@/products/components/product/ProductSlideShow";

export default function () {
  return (
    <div className="flex bg-lime-500 h-[600px]">
      <ProductSlideShow />
      <div className="bg-red-600 w-2/4">
        <span>asd</span>
      </div>
    </div>
  );
}
