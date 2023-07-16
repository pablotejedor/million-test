import axios from 'axios';

export const getPokemons = async (url) => {
     let nextPageUrl = null;

     let prevPageUrl = null;

     const pokemonsSummary = await axios({ method: 'GET', url: url })
          .then((response) => {
               nextPageUrl = response.data.next;
               prevPageUrl = response.data.previous;

               return response.data.results;
          })
          .catch((error) => {
               throw new Error(error);
          });

     const listOfPokemons = await Promise.all(
          pokemonsSummary.map(
               async (pokemon) =>
                    await axios({ method: 'GET', url: pokemon.url })
                         .then((res) => res.data)
                         .catch((error) => {
                              throw new Error(error);
                         })
          )
     );

     return {
          listOfPokemons,
          nextPageUrl,
          prevPageUrl,
     };
};
