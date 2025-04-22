import type { product } from "@prisma/client";
import { Price, Product } from "@/interfaces/products";
import { env } from "process";

interface GetProductsRequest {
  categoryId: number;
  rangePrice?: number;
  brandId?: number | null | string;
  isClient?: boolean;
}

export const getProducts = async ({
  categoryId,
  brandId = null,
  rangePrice = 0,
  isClient = false,
}: GetProductsRequest): Promise<Product[]> => {
  try {
    let url = `/api/products?categoryId=${categoryId}&brandId=${brandId}&rangePrice=${rangePrice}`;

    if (!isClient) {
      url = `${env.BASE_URL}/api/products?categoryId=${categoryId}&brandId=${brandId}&minPrice=${rangePrice}`;
    }
    const response = await fetch(url);
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
      `/api/products/price?categoryId=${categoryId}`
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
