import React from 'react';

export default function Buttons({ data, loading, setUrl }) {
     return (
          <div className="flex w-full justify-around md:justify-between md:w-1/2 my-10">
               <button
                    className={`py-3 px-10 text-white rounded-md text-xl hover:scale-105 hover:bg-slate-500 ${
                         !data?.prevPageUrl || loading
                              ? 'cursor-not-allowed bg-slate-300'
                              : 'bg-slate-400'
                    }`}
                    disabled={!data?.prevPageUrl || loading}
                    onClick={() => setUrl(data?.prevPageUrl)}
               >
                    Prev
               </button>
               <button
                    className={`py-3 px-10 text-white rounded-md text-xl hover:scale-105 hover:bg-slate-500 ${
                         !data?.nextPageUrl || loading
                              ? 'cursor-not-allowed bg-slate-300'
                              : 'bg-slate-400'
                    }`}
                    disabled={!data?.nextPageUrl || loading}
                    onClick={() => setUrl(data?.nextPageUrl)}
               >
                    Next
               </button>
          </div>
     );
}
