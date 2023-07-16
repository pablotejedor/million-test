import { useState } from 'react';
import usePokemons from './hooks/usePokemons';
import Buttons from './components/Buttons';
import Card from './components/Card';

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
                              <Card pokemon={pokemon} />
                         ))}
                    </div>
               )}
          </div>
     );
}
