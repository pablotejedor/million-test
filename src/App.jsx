import { useState } from 'react';
import usePokemons from './hooks/usePokemons';
import Buttons from './components/Buttons';
import Card from './components/Card';

export default function App() {
     const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

     const { data, errors, loading } = usePokemons(url);

     return (
          <div className="flex flex-col items-center justify-center bg-slate-200 min-h-screen py-10">
               <h1 className="text-black-600 text-3xl md:text-4xl my-10">
                    Gotta catch'em all!
               </h1>

               <Buttons data={data} loading={loading} setUrl={setUrl} />

               {loading ? (
                    <h3>Loading your data...</h3>
               ) : (
                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-1 gap-4 min-h-full p-6">
                         {data?.listOfPokemons.map((pokemon) => (
                              <Card pokemon={pokemon} />
                         ))}
                    </div>
               )}
          </div>
     );
}
