import { useState } from 'react';
import usePokemons from './hooks/usePokemons';
import Buttons from './components/Buttons';

function App() {
     const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

     const { data, errors, loading } = usePokemons(url);

     return (
          <div className="flex flex-col items-center justify-center min-w-full bg-slate-200 min-h-screen py-10">
               <h1 className="text-black-600 text-4xl">
                    Let's make this damn thing work
               </h1>

               <Buttons data={data} loading={loading} setUrl={setUrl} />

               {loading ? (
                    <h3>Loading your data...</h3>
               ) : (
                    <div className="flex w-full flex-wrap justify-start min-h-full">
                         {data &&
                              data.listOfPokemons.map((pokemon) => (
                                   <div
                                        className="flex flex-col items-center py-5 px-10 bg-slate-300 m-5 rounded-xl cursor-pointer hover:scale-105"
                                        key={pokemon.id}
                                   >
                                        <img
                                             className="w-36"
                                             src={
                                                  pokemon.sprites.other[
                                                       'official-artwork'
                                                  ]['front_default']
                                             }
                                             alt={pokemon.name}
                                        />
                                        <h3 className="text-2xl">
                                             #{pokemon.id}{' '}
                                             {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
                                                  1
                                             )}`}
                                        </h3>
                                   </div>
                              ))}
                    </div>
               )}
          </div>
     );
}

export default App;
