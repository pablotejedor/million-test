import { colors } from '../assets/colors';
import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter';

export default function Badge({ type }) {
     return (
          <div
               className={'rounded-lg px-6 py-1 text-white mx-1'}
               style={{
                    backgroundColor: colors[type],
               }}
          >
               {capitalizeFirstLetter(type)}
          </div>
     );
}
