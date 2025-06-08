import { env } from "process";
import { Category } from "../interfaces";

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${env.BASE_URL}/api/category`);
    if (!response.ok) {
      throw new Error("Error fetching categories");
    }

    const categories = await response.json();

    return categories;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return [];
  }
};

export const getCategoryByName = async (
  name: string,
  isClient = false
): Promise<Category | null> => {
  try {
    let url = `${env.BASE_URL}/api/category/${name}`;

    if (isClient) {
      url = `/api/category/${name}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching category by name");
    }

    const categories = await response.json();

    return categories;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return null;
  }
};

export const getSubCategoriesByParentId = async (
  id: number,
  isClient = false
): Promise<Category[] | null> => {
  try {
    let url = `${env.BASE_URL}/api/category/sub-category/${id}`;

    if (isClient) {
      url = `/api/category/sub-category/${id}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching sub category by parent ID");
    }

    const subCategories = await response.json();

    return subCategories;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return null;
  }
};
