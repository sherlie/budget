import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_API_URL } from "./constants";

export const useAddCategory = () => {
    console.log('here')
    const queryClient = useQueryClient();
    return useMutation({
    mutationFn: async (data: { name: string; color: string }) => {
      const res = await fetch(`${BASE_API_URL}/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed');

      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
}