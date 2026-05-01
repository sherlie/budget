import { useQuery } from "@tanstack/react-query";
import type { Transaction } from "../types";
import { BASE_API_URL } from "./constants";

interface TransactionPage {
  data: Transaction[];
  nexCursor: string;
}

const fetchTransactions = async (): Promise<TransactionPage> => {
  const response = await fetch(`${BASE_API_URL}/transactions`);

  if (!response.ok) {
    throw new Error('Failed to fetch transactions');
  }

  return response.json();
};

export const useTransactions = () => {
    const { data, isLoading, error } = useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
  });
  return  { data, isLoading, error };
} 
