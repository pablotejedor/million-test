import React from 'react';
import { colors } from '../assets/colors';

export default function Badge({ type }) {
     return (
          <div
               className={'rounded-lg px-6 py-1 text-white mx-1'}
               style={{
                    backgroundColor: colors[type],
               }}
          >
               {type[0].toUpperCase()}
               {type.slice(1)}
          </div>
     );
}
