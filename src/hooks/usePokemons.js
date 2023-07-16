import { useState, useEffect, useCallback } from 'react';
import { getPokemons } from '../services/getPokemons';

export default function usePokemons(url) {
     const [dataState, setDataState] = useState({
          data: null,
          loading: true,
          errors: null,
     });

     const handleFetch = useCallback(async () => {
          setDataState((prev) => ({ ...prev, loading: true }));

          getPokemons(url)
               .then((response) =>
                    setDataState((prev) => ({
                         ...prev,
                         data: response,
                    }))
               )
               .catch((error) =>
                    setDataState((prev) => ({ ...prev, errors: error }))
               )
               .finally(() =>
                    setDataState((prev) => ({ ...prev, loading: false }))
               );
     }, [url]);

     useEffect(() => {
          const abortController = new AbortController();

          handleFetch();

          return () => abortController.abort();
     }, [url]);

     return dataState;
}
