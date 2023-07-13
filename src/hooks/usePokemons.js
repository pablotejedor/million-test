import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function usePokemons(url) {
     const [dataState, setDataState] = useState({
          data: null,
          loading: true,
          errors: null,
          next: null,
          prev: null,
     });

     const handleFetch = useCallback(async () => {
          let prevUrl = null;
          let nextUrl = null;

          setDataState((prev) => ({ ...prev, loading: true }));

          const listOfPokemons = await axios({ method: 'GET', url: url }).then(
               (res) => {
                    prevUrl = res.data.previous;
                    nextUrl = res.data.next;
                    return res.data.results;
               }
          );

          const pokemons = listOfPokemons.map(async (pokemon) =>
               axios({ method: 'GET', url: pokemon.url }).then(
                    (res) => res.data
               )
          );

          await Promise.all(pokemons)
               .then((res) =>
                    setDataState((prev) => ({
                         ...prev,
                         data: res,
                         loading: false,
                         next: nextUrl,
                         prev: prevUrl,
                    }))
               )
               .catch((error) =>
                    setDataState((prev) => ({
                         ...prev,
                         loading: false,
                         errors: error,
                    }))
               );
     }, [url]);

     useEffect(() => {
          const abortController = new AbortController();

          handleFetch();

          return () => abortController.abort();
     }, [url]);

     return dataState;
}
