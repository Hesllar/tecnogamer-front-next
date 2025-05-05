"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Product } from "@/interfaces/products";

import { ProductItem } from "./ProductItem";
import { useProductStore } from "@/store/products/product-store";
import ProductGridSkeleton from "./ProductGridSkeleton";
import * as productsAPI from "@/products/helpers";
import * as categoryAPI from "@/categories/helpers";

interface Props {
  products: Product[];
}

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

      if (!filterProduct.categoryId) return;

      productsAPI
        .getProducts({
          ...filterProduct,
          categoryId: filterProduct.categoryId,
          isClient: true,
        })
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
    setIsLoading(true);
    resetFilterProduct();
    categoryAPI
      .getCategoryByName(pathname.split("/").at(-1)!, true)
      .then((category) => {
        if (!category) {
          setFilterProduct({
            ...filterProduct,
            categoryId: null,
          });
          return;
        }
        setFilterProduct({
          ...filterProduct,
          categoryId: +category?.id!,
        });
      })
      .catch(() => {
        setFilterProduct({
          ...filterProduct,
          categoryId: null,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading && applyFilter) return <ProductGridSkeleton />;

  if (!isLoading && !filterProduct.categoryId) {
    return (
      <div>
        <span className="text-white">Error</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {initialProducts.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};
