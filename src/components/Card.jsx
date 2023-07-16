import Badge from './Badge';

export default function Card({ pokemon }) {
     return (
          <div
               className="flex items-center justify-around py-5 px-10 bg-slate-300 m-5 rounded-xl cursor-pointer hover:scale-105"
               key={pokemon.id}
          >
               <div className="flex flex-col">
                    <img
                         className="w-36"
                         src={
                              pokemon.sprites.other['official-artwork'][
                                   'front_default'
                              ]
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
                    {pokemon.types.map((type) => (
                         <Badge type={type.type.name} />
                    ))}
               </div>
               {/* Badges */}
          </div>
     );
}
