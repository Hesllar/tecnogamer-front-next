"use client";

import { useEffect, useState } from "react";
import { Product } from "@/interfaces/products";
import * as productsApi from "@/products/helpers";
import { ProductItem } from "./ProductItem";
import { useProductStore } from "@/store/products/product-store";
import ProductGridSkeleton from "./ProductGridSkeleton";

interface Props {
  products: Product[];
}

const arrEmpty = Array.from({ length: 8 });

export const ProductsGrid = ({ products = [] }: Props) => {
  {
    /*Gestor de estados de productos */
  }
  const {
    isLoading,
    filterProduct,
    setApplyFilter,
    applyFilter,
    resetFilterProduct,
    setIsLoading,
  } = useProductStore((state) => state);
  const [initialProducts, setInitialProducts] = useState(products);

  useEffect(() => {
    if (applyFilter) {
      setIsLoading(true);
      productsApi
        .getProducts({ ...filterProduct, isClient: true })
        .then((data) => {
          setInitialProducts(data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        })
        .finally(() => {
          setApplyFilter(false);
          setIsLoading(false);
          resetFilterProduct(filterProduct.categoryId);
        });
    }
  }, [filterProduct]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {!isLoading ? (
        <>
          {initialProducts.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </>
      ) : (
        <>
          {arrEmpty.map((_, index) => (
            <ProductGridSkeleton key={index} />
          ))}
        </>
      )}
    </div>
  );
};
