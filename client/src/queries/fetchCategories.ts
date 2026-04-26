import { useQuery } from "@tanstack/react-query";
import type { Category } from "../types";
import { BASE_API_URL } from "./constants";

const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_API_URL}/categories`);

  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  return response.json();
};

export const useCategories = () => {
    const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
  return  { data, isLoading, error };
} 
