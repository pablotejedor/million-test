import { useEffect } from 'react';
import { getPokemons } from '../services/getPokemons';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function usePokemons(url) {
     const { data, isLoading, error } = useQuery({
          queryKey: [url],
          queryFn: () => getPokemons(url).then((response) => response),
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          staleTime: Infinity,
     });

     const queryClient = useQueryClient();

     useEffect(() => {
          queryClient.invalidateQueries({
               queryKey: [url],
          });
     }, [url]);

     return { data, isLoading, error };
}
