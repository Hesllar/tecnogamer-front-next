"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Product } from "@/interfaces/products";
import * as productsApi from "@/products/helpers";
import { ProductItem } from "./ProductItem";
import { useProductStore } from "@/store/products/product-store";
import ProductGridSkeleton from "./ProductGridSkeleton";
import { identifyCategoryByURL } from "@/helper";

interface Props {
  products: Product[];
}

const arrEmpty = Array.from({ length: 8 });

export const ProductsGrid = ({ products = [] }: Props) => {
  const pathname = usePathname();

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
    setFilterProduct,
  } = useProductStore((state) => state);
  const [initialProducts, setInitialProducts] = useState(products);

  {
    /*Manda la data de los productos filtrados al endpoint */
  }
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
          resetFilterProduct();
        });
    }
  }, [applyFilter]);

  {
    /* Actualiza el ID de la categoria en el store de productos */
  }
  useEffect(() => {
    const categoryId = identifyCategoryByURL(pathname);

    if (!categoryId) return;

    setFilterProduct({
      ...filterProduct,
      categoryId: categoryId,
    });
  }, []);

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
