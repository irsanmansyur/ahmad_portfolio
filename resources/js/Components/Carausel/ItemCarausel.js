import { data } from 'autoprefixer';
import { max } from 'lodash';
import React from 'react';

export default function Itemcarausel({ items, padding = 35 }) {
  let data = [items];
  if (Array.isArray(items))
    data = items;
  let maxWidth = (100 / data.length) + "%";
  return (
    <>
      {data.map((newData, i) => {
        return (<div key={i} className="rounded-lg border-2 border-primary p-2 h-full overflow-hidden break-all hover:scale-105 hover:bg-black" style={{ maxWidth: `calc(${maxWidth} - ${padding * 2}px` }} >
          <div className="flex items-center">
            <img src="http://127.0.0.1:8001/image/overlay/default.png" className="w-[70px] h-[70px] rounded-full border-2 border-primary" />
            <div className="ml-4">
              <span className="text-primary font-bold">{newData}</span>
              <p>*****</p>
            </div>
          </div>
          <p className="mt-5 text-[20px]">lorem ipsum h</p>
        </div>)
      })}
    </>
  );
}