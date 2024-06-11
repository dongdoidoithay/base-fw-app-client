import React from "react";


export const Boundary = ({
  labels,
  linkNext,
  lableLink,
  isFull=null,
}:any) => {
  return (
    <div className="flex flex-row flex-grow">
      <div className="py-1  text-md text-sky-300 items-center font-semibold first-line:uppercase first-letter:text-2xl first-letter:font-bold flex-1" >
         {!isFull &&<h2 className="border-b-4  border-t-transparent border-b-sky-300 w-1/2 lg:w-1/5">  {labels}</h2> }
         {isFull &&<h2 className="border-b-4  border-t-transparent border-b-sky-300">  {labels}</h2> }
      </div>
      {lableLink &&<div className="pr-2 py-1 flex flex-wrap flex-row align-middle justify-center text-center">
          <a href={linkNext} title={lableLink} className="first-letter:text-2xl first-letter:font-bold text-orange-500 hover:text-sky-500 hover:border-b-sky-500 hover:border-b-4  border-b-orange-500 border-b-2 font-semibold after:content-['_↗']">{lableLink}</a>
      </div>
      }
    </div>
  );
};
