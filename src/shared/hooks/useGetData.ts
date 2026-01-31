import { useQuery } from 'reactish-query';

import type { CardItemProps } from '../types';

export const useGetData = (id?: string) => {
  const { isPending, data, error } = useQuery<CardItemProps[]>({
    queryKey: ['sneakers'],
    queryFn: async () => {
      const res = await fetch(
        id
          ? `https://697dce5a97386252a2691968.mockapi.io/sneakers/${id}`
          : 'https://697dce5a97386252a2691968.mockapi.io/sneakers',
      );
      if (!res.ok) throw new Error(res.status.toString());
      return res.json();
    },
  });
  return { isPending, data, error };
};
