import { useState } from 'react';
import usePokemons from './hooks/usePokemons';
import Buttons from './components/Buttons';
import { colors } from './assets/colors';

export default function App() {
     const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

     const { data, errors, loading } = usePokemons(url);

     return (
          <div className="flex flex-col items-center justify-center min-w-full bg-slate-200 min-h-screen py-10">
               <h1 className="text-black-600 text-4xl">Gotta catch'em all!</h1>

               <Buttons data={data} loading={loading} setUrl={setUrl} />

               {loading ? (
                    <h3>Loading your data...</h3>
               ) : (
                    <div className="grid grid-cols-4 w-full min-h-full">
                         {data?.listOfPokemons.map((pokemon) => (
                              <div
                                   className="flex items-center justify-around py-5 px-10 bg-slate-300 m-5 rounded-xl cursor-pointer hover:scale-105"
                                   key={pokemon.id}
                              >
                                   <div className="flex flex-col">
                                        <img
                                             className="w-36"
                                             src={
                                                  pokemon.sprites.other[
                                                       'official-artwork'
                                                  ]['front_default']
                                             }
                                             alt={pokemon.name}
                                        />
                                        <h3 className="text-xl">
                                             #{pokemon.id}{' '}
                                             {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
                                                  1
                                             )}`}
                                        </h3>
                                   </div>

                                   {/* Badges */}
                                   <div className="flex items-center">
                                        {pokemon.types.map((type) => {
                                             return (
                                                  <div
                                                       className={
                                                            'rounded-lg px-6 py-1 text-white'
                                                       }
                                                       style={{
                                                            backgroundColor:
                                                                 colors[
                                                                      type.type
                                                                           .name
                                                                 ],
                                                       }}
                                                  >
                                                       {type.type.name[0].toUpperCase()}
                                                       {type.type.name.slice(1)}
                                                  </div>
                                             );
                                        })}
                                   </div>
                                   {/* Badges */}
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
}
