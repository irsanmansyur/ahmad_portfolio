import React, { useState } from 'react';

export default function Tooltip({ title, children, className }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative z-30 inline-flex">
      <div onMouseEnter={e => setShow(true)} onMouseDown={e => setShow(true)} onMouseLeave={e => setShow(false)} className={"" + className}>
        {children}
      </div>
      {show && <div className="relative">
        <div className="absolute top-0 z-10 py-1 px-2 -mt-1 text-sm leading-tight text-white transform -translate-x-1/2 -translate-y-full bg-orange-500 rounded-lg shadow-lg border-primary border  whitespace-nowrap">
          {title}
        </div>
      </div>}
    </div>
  );
}

