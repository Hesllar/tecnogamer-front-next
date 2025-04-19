import type { product } from "@prisma/client";
import { Price, Product } from "@/interfaces/products";
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
        imageUrl: product.img_url || null,
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

export const getPrice = async (categoryId: number): Promise<Price> => {
  try {
    const response = await fetch(
      `/api/products/price?category_id=${categoryId}`
    );

    if (!response.ok) {
      throw new Error("Error fetching price");
    }

    const price = await response.json();

    return {
      price: {
        max: price._max.price || 0,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    throw error;
  }
};
