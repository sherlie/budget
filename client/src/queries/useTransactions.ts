import type { Transaction } from "../types";
import { BASE_API_URL } from "./constants";
import { useInfiniteQuery } from '@tanstack/react-query';

interface TransactionPage {
  data: Transaction[];
  nextCursor: string;
}

interface FetchTransactionProps {
  pageParam?: string | null;
}

const fetchTransactions = async ({ pageParam }: FetchTransactionProps): Promise<TransactionPage> => {
  const url = new URL(`${BASE_API_URL}/transactions`);

  if (pageParam) {
    url.searchParams.set('cursor', pageParam);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Failed to fetch transactions');
  }

  return response.json();
};

export const useTransactions = () => {
  return useInfiniteQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined;
    },
  });
};