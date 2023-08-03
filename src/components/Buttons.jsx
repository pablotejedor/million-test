import React from 'react';

export default function Buttons({ data, isLoading, setUrl }) {
     return (
          <div className="flex w-full justify-around md:justify-between md:w-1/2 my-10">
               <button
                    className={`py-3 px-10 text-white rounded-md text-xl hover:scale-105 hover:bg-slate-500 ${
                         !data?.prevPageUrl || isLoading
                              ? 'cursor-not-allowed bg-slate-300'
                              : 'bg-slate-400'
                    }`}
                    disabled={!data?.prevPageUrl || isLoading}
                    onClick={() => setUrl(data?.prevPageUrl)}
               >
                    Prev
               </button>
               <button
                    className={`py-3 px-10 text-white rounded-md text-xl hover:scale-105 hover:bg-slate-500 ${
                         !data?.nextPageUrl || isLoading
                              ? 'cursor-not-allowed bg-slate-300'
                              : 'bg-slate-400'
                    }`}
                    disabled={!data?.nextPageUrl || isLoading}
                    onClick={() => setUrl(data?.nextPageUrl)}
               >
                    Next
               </button>
          </div>
     );
}
