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
