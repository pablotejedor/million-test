import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter';
import Badge from './Badge';

export default function Card({ pokemon }) {
     return (
          <div
               className="flex items-center justify-around py-5 px-10 bg-slate-300 rounded-xl cursor-pointer hover:scale-105 relative w-100"
               key={pokemon.id}
          >
               <div className="flex flex-col items-center">
                    <img
                         className="w-36"
                         src={
                              pokemon.sprites.other['official-artwork'][
                                   'front_default'
                              ]
                         }
                         alt={pokemon.name}
                    />
                    <h3 className="text-xl absolute top-5 right-5">
                         #{pokemon.id}
                    </h3>
                    <h3 className="text-xl">
                         {capitalizeFirstLetter(pokemon.name)}
                    </h3>
               </div>

               {/* Badges */}
               <div className="flex flex-col md:flex-row items-center">
                    {pokemon.types.map((type) => (
                         <Badge type={type.type.name} />
                    ))}
               </div>
               {/* Badges */}
          </div>
     );
}
