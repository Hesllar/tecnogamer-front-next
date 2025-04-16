import type { product } from "@prisma/client";
import { Product } from "@/interfaces/products";
import { env } from "process";

export const getProducts = async (categoryId: number): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${env.BASE_URL}/api/products?category_id=${categoryId}`
    );
    if (!response.ok) {
      throw new Error("Error fetching products");
    }

    const products = await response.json();

    const productsMapper = products.map((product: product) => {
      return {
        ...product,
        imageUrl: product.img_url,
        categoryId: product.category_id,
        brandId: product.brand_id,
      };
    });

    return productsMapper;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return [];
  }
};
