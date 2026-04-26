import type { Category } from "../types";

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch('http://localhost:3000/categories');

  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  return response.json();
};