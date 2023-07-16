import { colors } from '../assets/colors';
import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter';

export default function Badge({ type }) {
     return (
          <div
               className={'flex justify-center rounded-lg px-6 py-1 text-white m-1 w-3/4'}
               style={{
                    backgroundColor: colors[type],
               }}
          >
               {capitalizeFirstLetter(type)}
          </div>
     );
}
