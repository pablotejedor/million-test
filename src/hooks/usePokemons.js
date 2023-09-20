import { getPokemons } from '../services/getPokemons';
import { useQuery } from '@tanstack/react-query';

export default function usePokemons(url) {
     const { data, isLoading, error } = useQuery({
          queryKey: [url],
          queryFn: () => getPokemons(url),
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          staleTime: Infinity,
     });

     return { data, isLoading, error };
}
