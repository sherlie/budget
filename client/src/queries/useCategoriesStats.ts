import { useQuery } from "@tanstack/react-query";
import type { Category } from "../types";
import { BASE_API_URL } from "./constants";

interface FetchTransactionsStatsProps {
  from: string;
  until: string;
  cadence: "day" | "week" | "month";
}

const fetchTransactionsStats = async ({ from, until, cadence }: FetchTransactionsStatsProps): Promise<Category[]> => {
  const url = new URL(`${BASE_API_URL}/transactions/stats`);
  url.searchParams.set("cadence", cadence);
  url.searchParams.set("from", from);
  url.searchParams.set("until", until);

  const response = await fetch(url.toString());


  if (!response.ok) {
    throw new Error('Failed to fetch transactions stats');
  }

  return response.json();
};

export const useTransactionsStats = (props: FetchTransactionsStatsProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['transactionsStats'],
    queryFn: () => fetchTransactionsStats(props),
  });
  return  { data, isLoading, error };
} 
