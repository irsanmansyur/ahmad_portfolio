import React from 'react';

export default function ButtonRounded({ value, className, type = "button" }) {
  return (
    <button type={type} className={"py-1 bg-primary hover:opacity-80 rounded-full px-3 font-bold text-base sm:text-[32px] sm:leading-[39px] font-CenturyGothic " + className}>{value}</button>
  );
}


