import { env } from "process";
import { Brand } from "../interfaces";

export const getBrands = async (categoryId: number): Promise<Brand[]> => {
  try {
    const response = await fetch(`/api/brand?categoryId=${categoryId}`);
    if (!response.ok) {
      throw new Error("Error fetching brands");
    }

    const brands = await response.json();

    return brands;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return [];
  }
};
