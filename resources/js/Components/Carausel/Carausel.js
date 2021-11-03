import React, { useState } from 'react';
import Itemcarausel from './ItemCarausel';

const Carausel = ({ data = [45, "545ssssssssssssssssssssssssss3dddddddddddddddddddddddddddddddddddd", 343, 656, 435] }) => {
  let arr = [];
  while (data.length > 0) {
    arr.push(data.splice(0, 3))
  }
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div>
      {
        arr.map((v, i) => {

          if (i == openIndex) {
            let prev = openIndex == 0 ? (arr.length > openIndex + 1 ? arr.length - 1 : null) : openIndex - 1;
            let next = openIndex == arr.length - 1 ? 0 : (arr.length > openIndex + 1 ? openIndex + 1 : null);
            return (
              <div key={i} className="carousel relative shadow-2xl ">
                <div className="flex space-x-3 justify-center items-center px-[35px]">
                  <Itemcarausel items={v} />
                  {prev != null &&
                    <button onClick={e => setOpenIndex(prev)} htmlFor="carousel-1" className="border-2 border-primary w-[30px] h-[30px] absolute cursor-pointer flex items-center justify-center text-3xl font-bold text-primary rounded-full e hover:bg-white leading-tight text-center z-10 inset-y-0 left-0 my-auto"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg></button>}
                  {next != null &&
                    <label htmlFor="carousel-1" onClick={e => setOpenIndex(next)} className="border-2 border-primary w-[30px] h-[30px] absolute cursor-pointer flex items-center justify-center text-3xl font-bold text-primary rounded-full e hover:bg-white leading-tight text-center z-10 inset-y-0 right-0 my-auto"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg></label>}
                </div>
              </div>
            )
          }
        })
      }
    </div>
  );
};

export default Carausel;